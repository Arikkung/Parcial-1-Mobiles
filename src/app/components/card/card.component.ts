import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Rating } from 'src/app/interfaces/IUselessStuff';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  public currentCurrency = "USD";

  //Se toma Category y Rating en base a sus datos relacionados en la interfaz
  @Input() id: number = 0;
  @Input() title: string = ""; 
  @Input() category: string = "";
  @Input() description: string = ""; 
  @Input() price: number = 0; 
  @Input() rating: Rating = { rate: 0, count: 0 }; 
  @Input() image: string = ""; 
  // @Input() createdAt: string = ""; 
  // @Input() updatedAt: string = ""; 

  @Output() doClick = new EventEmitter();

  constructor() { }

  click(id: number) {
    this.doClick.emit(this.id);
  }
}
