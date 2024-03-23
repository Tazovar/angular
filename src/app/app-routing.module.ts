import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/components/main/main.component';
import { ApiComponent } from './views/components/api/api.component';
import { TaskDetailsComponent } from './views/components/main/childs/task-details/task-details.component';
import { PostDetailsComponent } from './views/components/api/childs/post-details/post-details.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'details/:id',component:TaskDetailsComponent}
  ]
},
  {path:'http', component:ApiComponent},
  {path:'postDetails/:id', component:PostDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }