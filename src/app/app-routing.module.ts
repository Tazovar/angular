import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'cardDetail/:id', component:CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }