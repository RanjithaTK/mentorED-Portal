import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { localKeys } from 'src/app/core/constants/localStorage.keys'
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service'
import { TranslateService } from '@ngx-translate/core'
import { UserService } from 'src/app/core/services/user/user.service'

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
})
export class SessionCardComponent implements OnInit {
  @Input() cardData: any
  @Input() localProfileId: any
  @Output() buttonIsToggle = new EventEmitter()
  buttonConfig: any
  isCreator: boolean
  userData: any
  constructor(
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private userService:UserService
  ) {}

  async ngOnInit() {
    this.isCreator = await this.checkIfCreator()
    this.setButtonConfig(this.isCreator)
  }

  setButtonConfig(isCreator: boolean) {
    if (isCreator) {
      this.buttonConfig = { label: 'START', type: 'startAction' }
    } else {
      this.buttonConfig =
        (!isCreator && this.cardData.isEnrolled) ||
        (!isCreator && this.cardData.sessionId)
          ? { label: 'JOIN', type: 'joinAction' }
          : { label: 'ENROLL', type: 'enrollAction' }
    }
    let currentTimeInSeconds = Math.floor(Date.now() / 1000)
    this.buttonConfig.isEnabled =
      this.cardData.startDate - currentTimeInSeconds < 300 ? true : false
  }

  async checkIfCreator() {
    return this.cardData.userId ==this.localProfileId ? true : false
  }

  buttonToggle(action: any, data: any) {
    let detail: any = { action: action, data: data }
    this.buttonIsToggle.emit(detail)
  }
}
