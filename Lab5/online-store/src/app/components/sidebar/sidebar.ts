import {Component, output} from '@angular/core';
import {FilterItem} from "../filter-item/filter-item";

@Component({
  selector: 'app-sidebar',
    imports: [
        FilterItem
    ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

    selection = output<number>()

    select(s: number){
        this.selection.emit(s);
    }
}
