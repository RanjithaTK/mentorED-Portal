import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreatedSessionsComponent } from './components/created-sessions/created-sessions.component'
import { FaqComponent } from './components/faq/faq.component'
import { MentorDirectoryComponent } from './components/mentor-directory/mentor-directory.component'
import { SessionListingComponent } from './components/session-listing/session-listing.component'
import { LayoutComponent } from './layout.component'
import { PrivateGuard } from '../../core/guards/private.guard'
import { ProfilePageComponent } from './components/profile-page/profile-page.component'
import { CreateSessionComponent } from './components/create-session/create-session.component'

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
        component: FaqComponent,
        data: {title: 'FAQ'}
      },
      { path: 'profile',
        component: ProfilePageComponent,
        data: {title: 'MY_PROFILE'}
      },
      {
        path: 'create-session',
        component: CreateSessionComponent,
        data: {title: 'CREATE_NEW_SESSION'}
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
