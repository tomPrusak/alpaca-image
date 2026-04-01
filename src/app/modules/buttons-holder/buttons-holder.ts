import { Component } from '@angular/core';
import { Buttons } from '../../global/buttons/buttons';

@Component({
  selector: 'app-buttons-holder',
  imports: [Buttons],
  templateUrl: './buttons-holder.html',
  styleUrl: './buttons-holder.css',
})
export class ButtonsHolder {






  buttonsNames = [
    { name: 'button1' },
    { name: 'button2' },
    { name: 'button3' },
    { name: 'button4' },
  ]
}
