import {Component, Input} from '@angular/core';
import {ProductModel} from "../../models/product-model";
import {Star} from "../star/star";

@Component({
    selector: 'app-product-component',
    template: `
        <div class="product">
            <div class="product__img">
                <img src="{{product.image}}" alt="">
            </div>  
            <div class="product__bottom">
                <a [href]="product.links" target="_blank">
                    <h1 class="product__title">{{ product.name }}</h1>
                </a>
                <div class="product__rating">
                    <div class="stars">
                        <app-star [rating]="product.rating"/>
                    </div>
                    <p></p>
                </div>
                <div class="product__description">
                    <p>
                        {{ product.description }}
                    </p>
                </div>
                <div class="product__price">
                    <div class="price__item price__price">Цена</div>
                    <div class="price__item">{{ product.price }} тг</div>
                </div>
                <div class="social">
                    <a [href]="showTelegram(product.links, product.name)">
                        <div class="social__wrapper telegram">
                            Telegram
                        </div>
                    </a>
                    <a [href]="showWhatsapp(product.links)">
                        <div class="social__wrapper whatsapp">
                            Whatsapp
                        </div>
                    </a>
                </div>
            </div>

        </div>
    `,
    imports: [Star],
    styleUrls: ['product-component.css'],
})
export class ProductComponent {
    @Input() product!: ProductModel;

    showWhatsapp = (link: string) => {
        return `https://wa.me/?text=Check out this product: {${encodeURIComponent(link)}}`
    }
    showTelegram = (link: string, name: string) => {
        return `https://t.me/share/url?url={${encodeURIComponent(link)}&text={${encodeURIComponent(name)}}`
    }

}
