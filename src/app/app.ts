import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Buttons } from "./global/buttons/buttons";
import { ButtonsHolder } from "./modules/buttons-holder/buttons-holder";
import { ImageHolder } from "./modules/image-holder/image-holder";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Buttons, ButtonsHolder, ImageHolder],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('alpaca-image');
}
