import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { MainComponent } from './views/pages/components/main/main.component';
import { TimeComponent } from './views/pages/components/time/time.component';
import { CardComponent } from './shared/cards/card/card.component';
import { CardDetailsComponent } from './views/pages/components/card-details/card-details.component';
import { CardDetailsCardComponent } from './shared/cards/card-details-card/card-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TimeComponent,
    CardComponent,
    CardDetailsComponent,
    CardDetailsCardComponent
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
