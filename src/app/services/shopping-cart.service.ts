import { Injectable } from '@angular/core';
import { IUselessstuffResponse } from '../interfaces/IUselessStuff';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems: IUselessstuffResponse[] = [];
  
  constructor() { }

  getItems(): IUselessstuffResponse[] {
    console.log('Obteniendo productos del carrito:', this.cartItems);
    return this.cartItems;
  }  
  
  addToCart(product: IUselessstuffResponse): void {
    this.cartItems.push(product);
    console.log('Productos en el carrito ahora:', this.cartItems);
  }

  removeFromCart(id: number): void {
    console.log('ID del producto a eliminar:', id);
    this.cartItems = this.cartItems.filter(item => item.id!== id);
    console.log('Productos restantes:', this.cartItems);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
