import { Component, Input } from '@angular/core';
import { Card } from 'src/app/core/interfaces/cardsinterfaces/card';

@Component({
  selector: 'app-card-details-card',
  templateUrl: './card-details-card.component.html',
  styleUrls: ['./card-details-card.component.css']
})
export class CardDetailsCardComponent {
@Input() card:Card  = {} as Card
}
