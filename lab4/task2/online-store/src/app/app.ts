import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponent} from "./components/product-list-component/product-list-component";

@Component({
  selector: 'app-root',
    template: `
        <app-product-list-component/>
    `,
    imports: [ProductListComponent],
})
export class App {
  protected readonly title = signal('online-store');
}
