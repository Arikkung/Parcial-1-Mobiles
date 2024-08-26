import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment.prod';
import { IUselessstuffResponse } from '../interfaces/IUselessStuff';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  public products: IUselessstuffResponse[] = []; // Se declará la interfaz como un array debido a que esta solo
  // está entregando los objetos de la tienda en el formato JSON, no en un Array en el mismo formato como el de
  // Rick and Morty.

  constructor(
    private readonly httpSrv: HttpService,
    private readonly navCtrl: NavController
  ) {}
  
  async ngOnInit() {
    await this.loadProducts();
  }

  //Método para cargar los productos desde la API. 
  //Creado para lograr renderizar los productos por categoria.
  private async loadProducts() {
    //Try catch para manejar los errores en la obtecion de los datos de la API y
    // this.httpSrv.get<IUselessstuffResponse[]>(url); Realiza una solicitud HTTP GET a la URL
    // el tipo <IUselessstuffResponse[]> indica que se espera que la respuesta de la API sea un array
    // de objetos que cumplen con la interfaz designada.   
    try {
      const url = environment.URL_BASE + 'products';
      this.products = await this.httpSrv.get<IUselessstuffResponse[]>(url);
      console.log(this.products);
    } catch (err) {
      console.error('Error obtaining products:', err);
    }
  }

  public async onCategorySelected(category: string) {
    if (category === 'all') {
      // Si se selecciona "All", cargar todos los productos
      await this.loadProducts();
    } else {
      // Cargar productos específicos de la categoría seleccionada
      await this.loadProductsByCategory(category);
    }
  }

   // Método para cargar los productos por categoría específica.
  private async loadProductsByCategory(category: string) {
    try {
      const url = environment.URL_BASE + 'products/category/' + category;
      this.products = await this.httpSrv.get<IUselessstuffResponse[]>(url);
      console.log(this.products);
    } catch (err) {
      console.error('Error obtaining products by category:', err);
    }
  }

  public doNavigate(id: number) {
    this.navCtrl.navigateForward(`details/` + id); // Se navega a la página de detalle del producto con el id seleccionado.
  }

  public goToCart() {
    this.navCtrl.navigateForward('cart');
  }
}