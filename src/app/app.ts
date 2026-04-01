import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Buttons } from "./global/buttons/buttons";
import { ButtonsHolder } from "./modules/buttons-holder/buttons-holder";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Buttons, ButtonsHolder],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('alpaca-image');
}
