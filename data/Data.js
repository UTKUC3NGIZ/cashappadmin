export const ProductService = {
    getProductsData() {
        return [
            {
                paraGonderen: 'Utku',
                parayiAlan: 'Omer',
                islemMiktar: 300,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 20,
                paraAlanSonBakiye: 320,
            },
            {
                paraGonderen: 'Utku',
                parayiAlan: 'Omer',
                islemMiktar: 300,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 20,
                paraAlanSonBakiye: 320,
            },
            {
                paraGonderen: 'Utku',
                parayiAlan: 'Omer',
                islemMiktar: 300,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 20,
                paraAlanSonBakiye: 320,
            },
            {
                paraGonderen: 'Utku',
                parayiAlan: 'Omer',
                islemMiktar: 300,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 20,
                paraAlanSonBakiye: 320,
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

