import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly httpClient: HttpClient) { }
  //Generico o generic, quiere decir que podemos decidir el tipo de dato a retornar.
  public get<T>(url: string): Promise<T> {
    return new Promise ((resolve, reject) => {
      this.httpClient.get<T>(url).subscribe({
        
        // next(value){
        //   resolve(value);
        // },
        // error(err){
        //   reject(err);
        // }

        // También puede escribirse de la siguiente manera:
        next: (value) => resolve(value),
        error: (err) => reject(err)
       });
    })
  }
}
