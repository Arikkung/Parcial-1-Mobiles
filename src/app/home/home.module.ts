import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { CardComponent } from '../components/card/card.component';
import { SelectcComponent } from '../components/selectc/selectc.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    CurrencyPipe
  ],
  declarations: [HomePage, CardComponent, SelectcComponent],
  providers: [HttpService]
})
export class HomePageModule {}
