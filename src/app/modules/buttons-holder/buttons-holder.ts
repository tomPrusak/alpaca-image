import { Component } from '@angular/core';
import { Buttons } from '../../global/buttons/buttons';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-buttons-holder',
  imports: [Buttons],
  templateUrl: './buttons-holder.html',
  styleUrl: './buttons-holder.css',
})
export class ButtonsHolder {
  constructor(private data: DataService) {}

  accessorizeAlpaca = [
    { name: 'Hair' },
    { name: 'Ears' },
    { name: 'Eyes' },
    { name: 'Mouth' },
    { name: 'Neck' },
    { name: 'Leg' },
    { name: 'Accesores' },
    { name: 'Background' },
  ];
  styleAlpaca = [
    { name: 'Default' },
    { name: 'Curis' },
    { name: 'Short' },
    { name: 'Bang' },
    { name: 'Quiff' },
  ];

  accessorizeAlpacaLength = this.accessorizeAlpaca.length;

  onChange(data: { name: string; index: number }) {
    console.log(data.name, data.index);
    this.data.updateValue('', data.index);
  }
}
