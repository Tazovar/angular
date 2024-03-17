import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() card:Card = {} as Card
bg:string = 'blue'

// style = {
//   'color':'red',
//   'background-color':this.bg
// }
}
