import {Injectable} from '@angular/core';
import {CategoryModel} from "../../models/category.model";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

    getData(): CategoryModel[] {
        return [...this.date]
    }

    private date: CategoryModel[] = [
        {
            id: 1,
            name: "phone",
            view: "Phone"
        },
        {
            id: 2,
            name: "laptop",
            view: "Laptop"
        },
        {
            id: 3,
            name: "tv",
            view: "TV"
        },
        {
            id: 4,
            name: "headphones",
            view: "Headphones"
        }
    ]
}
