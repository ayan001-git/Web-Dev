import {Component, computed, inject, output, signal} from '@angular/core';
import {CategoryService} from "../../services/category/category.service";

@Component({
  selector: 'app-filter-item',
  imports: [],
  templateUrl: './filter-item.html',
  styleUrl: './filter-item.css',
})
export class FilterItem {
    categoryData = inject(CategoryService)

    isOpen = signal(true)

    listClass = computed(() => this.getStatus() ? 'filterItem__list active' : 'filterItem__list')

    getStatus() {
        return this.isOpen()
    }

    setStatus() {
        this.isOpen.update((status) => !status)
    }

    selection = output<number>();

    select(s: number) {
        this.selection.emit(s);
    }

}
