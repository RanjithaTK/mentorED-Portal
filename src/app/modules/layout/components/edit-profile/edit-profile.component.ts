import { Component, OnInit, ViewChild } from '@angular/core'
import { EDIT_PROFILE_FORM } from 'src/app/core/constants/formConstant';
import { FormService } from 'src/app/core/services/form/form.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExitPopupComponent } from '../../../../shared/components/exit-popup/exit-popup.component';
import { DynamicFormComponent } from 'src/app/shared';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { localKeys } from 'src/app/core/constants/localStorage.keys';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  formData: any;
  canLeave:any = false;
  userDetails:any
  user = this.localStorage.getLocalData(localKeys.USER_DETAILS);
  @ViewChild('editProfile')editProfile:DynamicFormComponent;

  constructor(private formService:FormService,private router:Router,public dialog: MatDialog,private profileService: ProfileService,private localStorage:LocalStorageService) {}
  
  async ngOnInit(): Promise<void> {
    this.userDetails = JSON.parse(await this.user)
    this.formService.getForm(EDIT_PROFILE_FORM).subscribe((form)=>{
        this.formData=form
    })
  }


  canDeactivate(): any {

    if(!this.canLeave){
      const confirmResult = this.dialog.open(ExitPopupComponent, {})
      confirmResult.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);

      });
      if (this.editProfile) {
        if (this.editProfile.myForm.dirty) {
          return false;
        } else {
          return true;
        }
      }
    }else{
      return true;
    }
    
  }

  onSubmit(){
    this.profileService.profileUpdate(this.editProfile.myForm.value).subscribe((result:any) =>{
      console.log(result)
    }) 
    // this.router.navigate(['/profile'])
  }
}
