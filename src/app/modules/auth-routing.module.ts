import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: '/auth/login'
            }

        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }