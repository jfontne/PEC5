import { Component } from '@angular/core';
import { Wine } from '../models/wine';
import { Food } from '../interfaces/food';
import { WineQuantityChange } from '../interfaces/wine-quantity-change';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent {
  public winelist: Wine[];
  public totalComanda: string;

  
  constructor(){
  this.totalComanda = '';  
  let foods: Food[]= [];
    foods = [
      {
      name: 'peix al forn',
      kcal: 1000,
      gluten: false,
      vegan: false}
      ,
      {
        name: "Anxoves de l'escala",
        kcal: 1000,
        gluten: false,
        vegan: false}
      ]  
      this.winelist = [
      new Wine(1,'Alta Alella LAIETÀ Gran Reserva','03_alta_alella_mirgin_laieta_gran_reserva_t_21.jpg',20.20,true,0,0,foods),
      new Wine(2,'Alta Alella LAIETÀ Rosé Gran Reserva','04_alta_alella_mirgin_laieta_rose_gran_reserva_t_22.jpg',21.85,true,0,0,foods),
      new Wine(3,'Alta Alella MIRGIN Gran Reserva','02_alta_alella_mirgin_gran_reserva_elaborador_t.jpg',12.95,false,0,0,foods),
      new Wine(4,'Alta Alella MIRGIN OPUS Paratge','05_alta_alella_mirgin_opus_paratge_qualificat_vallcirera_t_22.jpg',32.00,true,0,0,foods)
    ]
  }
  addGetWine(e:WineQuantityChange){
    let i: number;
    let ids: Array<number>;
    ids = this.winelist.map(x => x.id);
    i = ids.indexOf(e.id);
    this.winelist[i].quantityInCart++;  
    this.winelist[i].total = this.winelist[i].quantityInCart * this.winelist[i].price;  
    this.totalComanda = this.actualitzaTotalComanda().toFixed(2);
  }
  substractGetWine(e:WineQuantityChange){
    let i: number;
    let ids: Array<number>;
    ids = this.winelist.map(x => x.id);
    i = ids.indexOf(e.id);
    this.winelist[i].quantityInCart--;
    this.winelist[i].total = this.winelist[i].quantityInCart * this.winelist[i].price;  
    this.totalComanda = this.actualitzaTotalComanda().toFixed(2);
  }
  actualitzaTotalComanda(){
    let total: number = 0;
    let llista: Wine;
    this.winelist.forEach(wine =>{
      total = total + wine.total
    });
    return total;
  }
}
