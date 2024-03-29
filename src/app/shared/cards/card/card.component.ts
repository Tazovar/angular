import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/core/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() card:Card = {} as Card;

constructor(private router:Router){}

onCardClick():void{
this.router.navigate(['/details',this.card.id])
}
}
