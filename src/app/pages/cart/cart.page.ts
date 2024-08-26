import { Component, OnInit } from '@angular/core';
// Una API de ionic creada para el manejo de las toasts asi como el formcontrol
import { ToastController } from '@ionic/angular';
import { IUselessstuffResponse } from 'src/app/interfaces/IUselessStuff';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cartItems: IUselessstuffResponse[] = [];
  public totalAmount: number = 0;
  public currentCurrency = 'USD';


  constructor(
    private readonly shopSrv: ShoppingCartService,
    private readonly toastContrl: ToastController
  ) {}

// (Nota para mi XD) (IMPORTANTE):Causas Comunes de Múltiples Instancias de un Servicio
// Registro de Servicios en Módulos Compartidos o en Componentes: 
// Si registras un servicio en un módulo que se importa en múltiples módulos o 
// directamente en un componente, Angular creará una nueva instancia del 
// servicio para cada módulo o componente que lo use.

// Providers en el Decorador del Componente: Si declaras ShoppingCartService en la propiedad providers de un componente 
// (como DetailsPage o CartPage), Angular tratará cada componente como una zona de inyección separada y 
// creará una nueva instancia del servicio para ese componente.
// Resumén de lo aprendido: Angular tratará cada servicio de manéra diferente en diferentes componentes.
// (tener en cuenta para evitar problemas.)

  ngOnInit() {
    this.cartItems = this.shopSrv.getItems();
    this.calculateTotal();
  }
  // Condicional para cambiar el mensaje toast a partir del toastContrl no ma.
  public async clearCart() {
    if (this.cartItems.length > 0) {
      this.shopSrv.clearCart();
      this.cartItems = this.shopSrv.getItems();
      const toast = await this.toastContrl.create({
        message: 'THANKS FOR YA MONEY LMAO!',
        duration: 1000,
        color: 'success',
        icon: 'checkmark',
        cssClass: 'custom-toast',
        position: 'top'
      });
      await toast.present();
    } else {
      const toast = await this.toastContrl.create({
        message: 'YA AINT BUYING ANYTHING!!!!!!!!',
        duration: 1000,
        color: 'warning',
        icon: 'alert',
        cssClass: 'custom-toast',
        position: 'top'
      });
      await toast.present();
    }
  }
  // El total del carrito
  //(Nota)reduce() es un método de los arrays en JavaScript que se utiliza para reducir un arreglo a un solo valor. 
  // Para hacer esto, reduce() aplica una función que "acumula" cada elemento del arreglo en un único valor final. 
  // La función de reducción recibe dos argumentos: el acumulador (total en este caso) y 
  // el valor actual del elemento del array (item).
  private calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((total, item) => total + item.price, 0);
  }  
}