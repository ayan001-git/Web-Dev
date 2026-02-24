import {Injectable} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ProductService {


    public getData(): Observable<ProductModel[]> {
        return of(this.readyData);
    }

    getDataByCategory(id : number | null){
        if(id == null){return []}
        if(id == 0) return this.data;
        this.readyData = this.data.filter(item => item.categoryId == id);
        return this.readyData;
    }

    private data: ProductModel[] = [
        {
            id: 1,
            name: "Смартфон Apple iPhone 17 Pro 256Gb оранжевый",
            price: 763903,
            description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000",
            categoryId: 1,
            likes: 5
        },
        {
            id: 2,
            name: "Смартфон Apple iPhone 15 128Gb черный",
            price: 385447,
            description: "Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
            categoryId: 1,
            likes: 1
        },
        {
            id: 3,
            name: "Смартфон Apple iPhone 13 128Gb черный",
            price: 322236,
            description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения. Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов.",
            rating: 4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium"

            ],
            links: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
            likes: 20,
            categoryId: 1
        },
        {
            id: 4,
            name: "Смартфон Samsung Galaxy S25+ 5G 12 ГБ/256 ГБ синий",
            price: 462799,
            description: "Samsung Galaxy S25+ 5G — мощный и стильный смартфон с передовыми технологиями, созданный для тех, кто ценит безупречное качество и непревзойденную производительность.",
            rating: 4.2,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p12/p11/20115802.png?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/p12/p11/20115802.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pda/p10/20115804.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pa1/p10/20115806.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133433811/?c=750000000",
            likes: 50,
            categoryId: 1
        },
        {
            id: 5,
            name: "Смартфон OPPO A31 6 ГБ/128 ГБ черный",
            price: 47029,
            description: "Представляем OPPO A31 — смартфон, который сочетает в себе высокую производительность, стильный дизайн и доступную цену. С ним вы сможете наслаждаться яркими изображениями и быстрой работой приложений.✨",
            rating: 3,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pfd/pc4/15961672.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/pfd/pc4/15961672.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p1a/pc5/15961673.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p36/pc5/15961674.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133433811/?c=750000000",
            categoryId: 1,
            likes: 10
        },
        {
            id: 6,
            name: "Ноутбук Apple MacBook Pro 14 2024 14.2\" / 24 Гб / SSD 512 Гб / macOS / MX2H3",
            price: 1_087_279,
            description: "New 2024 14 inch MacBook Pro 14-inch Li uid Retina XDRuid Retina XDR display2Standard displayApple M4 Pro chip with 12 core CPU, 16 core GPU, 16 core GPU, 16 core GPU, 16 core Neural Engine24GB unified memory512GB SSD storage70 USB-C Power AdaptThree Thunderbolt 5 ports, HDMI port 3 portBacklit Magic Keyboard with Touch Touch ID - US English",
            rating: 4.5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p7e/p44/15673152.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p9a/p44/15673151.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2h3-137220149/?c=750000000",
            categoryId: 2,
            likes: 75,
        },
        {
            id: 7,
            name: "Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123",
            price: 524_993,
            description: "Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.",
            rating: 3.5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000",
            categoryId: 2,
            likes: 30,
        },
        {
            id: 8,
            name: "Ноутбук ASUS ROG Strix G18 18\" / 32 Гб / SSD 1024 Гб / Без ОС / 90NR0LM1-M00200",
            price: 1_449_990,
            description: "Ноутбук ASUS ROG Strix G18 18\" / 32 Гб / SSD 1024 Гб / Без ОС / 90NR0LM1-M00200",
            rating: 4.0,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p01/p05/56375893.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/p01/p05/56375893.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pc9/p04/56375895.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p58/p04/56375899.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/asus-rog-strix-g18-18-32-gb-ssd-1024-gb-bez-os-90nr0lm1-m00200-143479081/?c=750000000",
            categoryId: 2,
            likes: 55,
        },
        {
            id: 9,
            name: "Ноутбук ASUS ProArt P16 16\" / 64 Гб / M.2 4000 Гб / Win 11 Pro / H7606WX-SE002X",
            price: 2_799_990,
            description: "Ноутбук ASUS ProArt P16 16\" 4K OLED 120Hz AMD Ryzen 9 64GB 2TB RTX 5090 Windows 11 Pro (90NB17E1-M000Y0)\n" +
                "Творческая мощь и точность цвета для профессионалов.\n" +
                "ASUS ProArt P16 — это идеальный инструмент для художников, дизайнеров и видеомейкеров. OLED-дисплей с 4K разрешением и 100% DCI-P3 обеспечивает непревзойденную цветопередачу, а топовая конфигурация процессора и графики позволяет работать с любыми задачами.",
            rating: 2.0,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pbd/p02/93188267.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/pbd/p02/93188267.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pa1/p02/93188268.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p85/p02/93188269.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/asus-proart-p16-16-64-gb-m-2-4000-gb-win-11-pro-h7606wx-se002x-153888660/?c=750000000",
            categoryId: 2,
            likes: 15,
        },
        {
            id: 10,
            name: "Ноутбук Lenovo LOQ 15IRX10 15.6\" / 32 Гб / SSD 512 Гб / Без ОС / 83JE00RMRK",
            price: 699_990,
            description: "Ноутбук ASUS ProArt P16 16\" 4K OLED 120Hz AMD Ryzen 9 64GB 2TB RTX 5090 Windows 11 Pro (90NB17E1-M000Y0)\n" +
                "Творческая мощь и точность цвета для профессионалов.\n" +
                "ASUS ProArt P16 — это идеальный инструмент для художников, дизайнеров и видеомейкеров. OLED-дисплей с 4K разрешением и 100% DCI-P3 обеспечивает непревзойденную цветопередачу, а топовая конфигурация процессора и графики позволяет работать с любыми задачами.",
            rating: 4.5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pd5/p28/91985670.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/pd5/p28/91985670.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pf1/p28/91985671.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p0d/p29/91985672.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/lenovo-loq-15irx10-15-6-32-gb-ssd-512-gb-bez-os-83je00rmrk-153706912/?c=750000000&m=Mechta",
            categoryId: 2,
            likes: 45,
        },
        {
            id: 11,
            name: "Телевизор LG 43LM5772PLA 109 см черный",
            price: 174_988,
            description: "Телевизоры LG HD позволяют наслаждаться более качественным изображением благодаря высокому разрешению и ярким цветам. Телевизоры LG HD созданы для того, чтобы удивлять вас отличным качеством изображения — в несколько раз лучше, чем SD. Благодаря технологиям Dynamic Color и Active HDR весь ваш любимый контент будет более реалистичным и потрясающим. ",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h6b/h88/64349678829598.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h6b/h88/64349678829598.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h1c/ha7/64349682139166.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/ha5/h80/64349684727838.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000",
            categoryId: 3,
            likes: 25,
        },
        {
            id: 12,
            name: "Телевизор LG 65UA75009LA 165 см черный",
            price: 400_000,
            description: "LG 65UA75009LA — стильный LED-телевизор с диагональю 65 дюймов (165 см) и разрешением 4K UHD (3840x2160) для невероятно чёткого и детализированного изображения.",
            rating: 4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/ped/pc7/37718500.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/ped/pc7/37718500.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p09/pc8/37718501.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p25/pc8/37718502.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/lg-65ua75009la-165-sm-chernyi-138403485/?c=750000000",
            categoryId: 3,
            likes: 30,
        },
        {
            id: 13,
            name: "Телевизор LG 65UA75009LA 165 см черный",
            price: 239_989,
            description: "LG 43NANO80A6B — погрузитесь в мир ярких красок с этим 43-дюймовым OLED-телевизором! Наслаждайтесь невероятным качеством изображения 4K UHD и реалистичным звуком",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p83/pa8/39811868.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/p83/pa8/39811868.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p9f/pa8/39811869.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p9f/pa8/39811869.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/lg-43nano80a6b-109-sm-chernyi-138971688/?c=750000000",
            categoryId: 3,
            likes: 5,
        },
        {
            id: 14,
            name: "Телевизор Samsung UE43T5300AUXCE 109 см черный",
            price: 285_000,
            description: "Смотрите HDR контент с улучшенной четкостью и точнейшей цветопередачей. Телевизор Samsung UHD обеспечивает более точную передачу деталей в самых ярких и темных сценах.\n" +
                "Технология Ultra Clean View анализирует исходный контент с помощью новейшего алгоритма и формирует более качественные изображения с минимальным искажением. Наслаждайтесь четкостью изображения.",
            rating: 4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h4f/h4d/63880826617886.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h4b/h75/63880828715038.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000",
            categoryId: 3,
            likes: 23,
        },
        {
            id: 15,
            name: "Телевизор Samsung UE65U8000FUXCE 165 см черный",
            price: 428_900,
            description: "Samsung UE65U8000FUXCE — погрузитесь в мир невероятно чёткого изображения с этим 65-дюймовым LED-телевизором в стильном чёрном корпусе.",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pae/pa6/63689075.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/pae/pa6/63689075.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p76/pa6/63689077.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p59/pa6/63689078.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/samsung-ue65u8000fuxce-165-sm-chernyi-145434862/?c=750000000",
            categoryId: 3,
            likes: 37,
        },
        {
            id: 16,
            name: "Наушники JBL Tune 510BT черный",
            price: 9_000,
            description: "Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов. Эти простые в использовании наушники работают до 40 часов на одном заряде аккумулятора, а, подключив зарядный кабель USB-C всего на пять минут к сети питания, вы получите еще 2 часа воспроизведения.",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000",
            categoryId: 4,
            likes: 18,
        },
        {
            id: 17,
            name: "Наушники JBL Tune 720BT синий",
            price: 24_997,
            description: "Bluetooth-гарнитура JBL Tune 720BT выполнена в черном пластиковом корпусе с мягкими накладками и отделкой из экокожи. Она комфортно располагается на голове и не вызывает усталости. Динамики с диаметром мембраны 40 мм воспроизводят аудио в деталях. Технология JBL Pure Bass формирует глубокий и насыщенный бас. Для точности передачи голоса интегрирован микрофон.",
            rating: 4.5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/hc0/h8d/86333130670110.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hc0/h8d/86333130670110.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h0d/hf4/86333130702878.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h1f/h01/86333130735646.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/naushniki-jbl-tune-720bt-sinii-111087498/?c=750000000",
            categoryId: 4,
            likes: 30,
        },
        {
            id: 18,
            name: "Наушники Samsung Galaxy Buds core черный",
            price: 20_839,
            description: "Беспроводные наушники Samsung Galaxy Buds core — компактное и стильное решение для тех, кто ценит качество звука и удобство использования.",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p02/p7d/53123421.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pe6/p7c/53123422.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-core-chernyi-142551258/?c=750000000",
            categoryId: 4,
            likes: 61,
        },
        {
            id: 19,
            name: "Наушники Samsung Buds 3 серый",
            price: 49_975,
            description: "Беспроводные наушники Samsung Buds 3 серый — компактное и стильное решение для тех, кто ценит качественный звук и удобство использования.",
            rating: 3,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h79/hdf/87077988368414.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h79/hdf/87077988368414.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h18/h61/87077988433950.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h6d/h95/87077988499486.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/naushniki-samsung-buds-3-seryi-123383427/?c=750000000",
            categoryId: 4,
            likes: 13,
        },
        {
            id: 20,
            name: "Наушники Apple AirPods 4 белый",
            price: 61_875,
            description: "Samsung UE65U8000FUXCE — погрузитесь в мир невероятно чёткого изображения с этим 65-дюймовым LED-телевизором в стильном чёрном корпусе.",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000",
            categoryId: 4,
            likes: 229,
        }
    ]


    readyData: ProductModel[] = this.data
}
