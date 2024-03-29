import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './admin/components/user/user.component';
import { HomeComponent as AdminHomeComponent } from './admin/components/home/home.component';
import { LoginComponent } from './admin/layouts/pages/login/login.component';
import { isLoginGuard, isLogoutGuard } from './admin/custom-functions/guards';
import { UserAddComponent } from './admin/components/user/user-add/user-add.component';
import { UserUpdateComponent } from './admin/components/user/user-update/user-update.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'admin/login',component:LoginComponent,canActivate:[isLogoutGuard] },
    {path:'admin',component:AdminComponent, canActivate:[isLoginGuard] ,children:[
        {path:'',component:AdminHomeComponent},
        {path:'home',component:AdminHomeComponent},
        {path:'users',component:UserComponent},
        {path:'user-add',component:UserAddComponent},
        {path:'user-update',component:UserUpdateComponent}
    ]}
];
