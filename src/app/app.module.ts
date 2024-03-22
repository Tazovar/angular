import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpComponent } from './components/http/http.component';
import { PostComponent } from './components/post/post.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { AddCardInputComponent } from './components/add-card-input/add-card-input.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    CardComponent,
    ModalComponent,
    HttpComponent,
    PostComponent,
    CardDetailsComponent,
    AddCardInputComponent,
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
