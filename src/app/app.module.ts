import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './directives/custom.directive';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { UpdateModalComponent } from './components/modals/update-modal/update-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainComponent,
    CardComponent,
    UpdateModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
