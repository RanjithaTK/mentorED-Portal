import { Injectable } from '@angular/core'
import { API_CONSTANTS } from '../../constants/apiUrlConstants'
import { map } from 'rxjs'
import { ApiService } from '../api/api.service'
import { ToastService } from '../toast/toast.service'

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
    private toastService: ToastService,
    private apiService: ApiService,
  ) {}

  enrollSession(id: any) {
    const config = {
      url: API_CONSTANTS.ENROLL_SESSION + id,
      payload: {},
    }
    return this.apiService.post(config).pipe(
      map((result: any) => {
        this.toastService.showMessage(result.message, 'success')
        return result.result
      }),
    )
  }
  joinSession(id: any) {
    const config = {
      url: API_CONSTANTS.JOIN_SESSION + id,
      payload: {},
    }
    return this.apiService.get(config).pipe(
      map((result: any) => {
        // this.toastService.showMessage(result.message, 'success')
        console.log(result)
      }),
    )
  }
}
