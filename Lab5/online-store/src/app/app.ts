import {Component, signal} from '@angular/core';
import {AppComponent} from "./components/app-component/app-component";

@Component({
  selector: 'app-root',
    template: `
        <app-app-component/>
    `,
    imports: [AppComponent],
})
export class App {
  protected readonly title = signal('online-store');
}
