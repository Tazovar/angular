import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './pipe/custom.pipe';
import { TestComponent } from './components/test/test.component';
import {HttpClient, HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
