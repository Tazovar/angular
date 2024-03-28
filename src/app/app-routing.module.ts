import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/pages/auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AuthGuard } from './core/guard/auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'auth',pathMatch:'full'},
  {path:'auth', component:AuthComponent,children:[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent}
  ]
},
 {path:'home/:email',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }