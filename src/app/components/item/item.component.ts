import { Component, Input, OnInit } from '@angular/core';
import { IUselessstuffResponse } from 'src/app/interfaces/IUselessStuff';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent  implements OnInit {
  
  public cartItems: IUselessstuffResponse[] = [];
  
  @Input() item!: IUselessstuffResponse;

  constructor(private readonly shopSrv: ShoppingCartService) { }

  ngOnInit() {
    console.log('Componente item cargado con:', this.item);
  }
  
  public removeFromCart(itemId: number) : void {
    this.shopSrv.removeFromCart(itemId);
    this.cartItems = this.shopSrv.getItems(); // Actualizar la lista de productos mostrados
    console.log('Item eliminado:', itemId);
  }
}
