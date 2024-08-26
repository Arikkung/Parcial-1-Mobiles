import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IUselessstuffResponse } from 'src/app/interfaces/IUselessStuff';
import { HttpService } from 'src/app/services/http.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public currentCurrency = 'USD';
  public product!: IUselessstuffResponse;
  private id!: number;

  constructor(
    private readonly httpSrv: HttpService,
    private readonly params: ActivatedRoute,
    private readonly navCtrl: NavController,
    private readonly shopSrv: ShoppingCartService,
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
// (tener en cuenta para evitar problemas. Caso shopSrv)

  async ngOnInit() {
    this.params.params.subscribe(async (params) => {
      const url = environment.URL_BASE + 'products/' + params['id'];
      this.product = await this.httpSrv.get<IUselessstuffResponse>(url);
    });
  }


  public goToCart() {
    this.navCtrl.navigateForward('cart');
  }

  public addToCart() {
    console.log('Añadiendo producto al carrito:', this.product);
    this.shopSrv.addToCart(this.product);
  }
}