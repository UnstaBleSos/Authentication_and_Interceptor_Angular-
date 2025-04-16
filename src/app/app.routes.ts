import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { linkGuardGuard } from './link-guard.guard';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"navbar",
        component:NavbarComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"cart",
        canActivate:[linkGuardGuard],
        component:CartComponent
    },
    {
        path:"user",
       
        component:UserComponent
    },
   

];
