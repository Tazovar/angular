import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './views/components/main/main.component';
import { ApiComponent } from './views/components/api/api.component';
import { FormComponent } from './views/components/main/childs/form/form.component';
import { TaskComponent } from './views/components/main/childs/task/task.component';
import { HeaderComponent } from './header/header.component';
import { UpdateModalComponent } from './views/components/main/modals/update-modal/update-modal.component';
import { TaskDetailsComponent } from './views/components/main/childs/task-details/task-details.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './views/components/api/childs/post/post.component';
import { PostDetailsComponent } from './views/components/api/childs/post-details/post-details.component';
import { PostFormComponent } from './views/components/api/childs/post-form/post-form.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ApiComponent,
    FormComponent,
    TaskComponent,
    HeaderComponent,
    UpdateModalComponent,
    TaskDetailsComponent,
    PostComponent,
    PostDetailsComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
