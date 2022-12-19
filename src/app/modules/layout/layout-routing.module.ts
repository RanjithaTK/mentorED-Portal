import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreatedSessionsComponent } from './components/created-sessions/created-sessions.component'
import { FaqComponent } from './components/faq/faq.component'
import { MentorDirectoryComponent } from './components/mentor-directory/mentor-directory.component'
import { SessionListingComponent } from './components/session-listing/session-listing.component'
import { LayoutComponent } from './layout.component'
import { PrivateGuard } from '../../core/guards/private.guard'
import { ProfilePageComponent } from './components/profile-page/profile-page.component'
import { EditProfileComponent } from './components/edit-profile/edit-profile.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: 'home',
        component: SessionListingComponent
      },

      {
        path: 'enrolled-sessions',
        component: SessionListingComponent
      },
      {
        path: 'created-sessions',
        component: CreatedSessionsComponent
      },
      {
        path: 'mentor-directory',
        component: MentorDirectoryComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: 'profile',
        component: ProfilePageComponent
      },
      { path: 'edit-profile',
        component: EditProfileComponent
      }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
