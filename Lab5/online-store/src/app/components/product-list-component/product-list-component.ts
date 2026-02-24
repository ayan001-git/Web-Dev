import {Component, Input, output} from '@angular/core';
import {ProductComponent} from "../product-component/product-component";
import {NgForOf} from "@angular/common";
import {ProductModel} from "../../models/product.model";

@Component({
    selector: 'app-product-list-component',
    templateUrl: './product-list-component.html',
    imports: [
        ProductComponent,
        NgForOf
    ],
    styleUrls: ['product-list-component.css'],
})
export class ProductListComponent {
    @Input() productList: ProductModel[] = [];

    productId = output<number>()

    delete(id :number){
        this.productId.emit(id);
    }
}
