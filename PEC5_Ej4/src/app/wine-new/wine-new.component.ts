import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidacionsPropies } from '../validacions/validacions-propies';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent {
public wineForm: FormGroup;

constructor(private fb:FormBuilder){
  this.wineForm = this.fb.group({             
    nombre: [null, [Validators.required, ValidacionsPropies.NameWineValidator]],         
    precio: [0, [Validators.required, Validators.min(1)]],
    URLimagen: [null, [Validators.required, Validators.pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)]],
    enVenta: [false,[]]
  });
}
createWine() {
  console.log('wine: ', this.wineForm.value);
}



}
