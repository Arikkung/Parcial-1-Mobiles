import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-selectc',
  templateUrl: './selectc.component.html',
  styleUrls: ['./selectc.component.scss'],
})
export class SelectcComponent implements OnInit {

  public categories: string[] = [];

  // Este evento envia la categoria al componente padre
  @Output() categorySelected = new EventEmitter<string>();

  constructor(
    private readonly httpSrv: HttpService
  ) {}

  async ngOnInit() {
      try {
      const url = environment.URL_CATEGORIES; // URL para obtener las categorías
      this.categories = await this.httpSrv.get<string[]>(url); // Obtener categorías y almacenarlas en el array
    } catch (err) {
      console.error('Error obtaining categories:', err);
    }
  }
  // Esta es una función que se llama cada vez 
  //que el usuario selecciona una nueva categoría en el componente de selección (dropdown)
  onCategoryChange(event: any) {
    const selectedCategory = event.detail.value;
    //esta línea está "avisando" al componente padre que una categoría ha sido seleccionada y está proporcionando 
    //la categoría seleccionada para que el componente padre pueda manejarla adecuadamente.
    this.categorySelected.emit(selectedCategory);
  }
}