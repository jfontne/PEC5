import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { WineNew } from '../models/wine-new';
@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent {
  nw: WineNew;
  constructor(){
    this.nw = new WineNew('vino1',10,'imagen',true);
    }

    createWine(wineForm:NgForm) {
      console.log('wine form', wineForm.value);
      if (wineForm.valid) {
        this.nw = wineForm.value.wine;
        console.log('Creating wine ', this.nw);
      } else {
        console.error('Stock form is in an invalid state');
      }
  }
    public urlValidar(url:string):boolean{
      let testURL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
      return testURL.test(url);
    }
}