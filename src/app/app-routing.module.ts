import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/pages/components/main/main.component';
import { CardDetailsComponent } from './views/pages/components/card-details/card-details.component';
import { AuthComponent } from './views/pages/components/auth/auth.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UnAuthGuard } from './core/guards/un-auth.guard';


const routes: Routes = [
  {path:'' , redirectTo:'auth', pathMatch:'full'},
  {path:'main',component:MainComponent, canActivate:[AuthGuard]},
  {path:"details/:cardId",component:CardDetailsComponent,canActivate:[AuthGuard]},
  {path:"auth", component:AuthComponent, canActivate:[UnAuthGuard], children:[
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }