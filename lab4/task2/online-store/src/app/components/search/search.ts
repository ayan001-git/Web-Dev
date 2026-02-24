import {Component, output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
    searchQuery = output<string>()


    emitEvent() {
        this.searchQuery.emit('!'); // Emit the data
    }
}
