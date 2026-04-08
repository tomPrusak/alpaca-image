import { Component, output, input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
  index = input<number>(0);
  buttonName = input<string>('');
  returnButtonName = output<{ name: string; index: number }>();

  sendButtonName() {
    this.returnButtonName.emit({
      name: this.buttonName(),
      index: this.index(),
    });
  }
}
