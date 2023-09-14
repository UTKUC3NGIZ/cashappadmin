export const TransactionsData = {
    getProductsData() {
        return [
            {
                paraGonderen: 'Utku',
                parayiAlan: 'Omer',
                islemMiktar: 300,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 20,
                paraAlanSonBakiye: 320
                },
                
                {
                paraGonderen: 'Ahmet',
                parayiAlan: 'Ayşe',
                islemMiktar: 150,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 200,
                paraAlanSonBakiye: 350
                },
                
                {
                paraGonderen: 'Mehmet',
                parayiAlan: 'Ali',
                islemMiktar: 500,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 1000,
                paraAlanSonBakiye: 500
                },
                
                {
                paraGonderen: 'Ebru',
                parayiAlan: 'Deniz',
                islemMiktar: 50,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 600,
                paraAlanSonBakiye: 550
                },
                
                {
                paraGonderen: 'Can',
                parayiAlan: 'Zeynep',
                islemMiktar: 200,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 800,
                paraAlanSonBakiye: 1000
                },
                
                {
                paraGonderen: 'Fatma',
                parayiAlan: 'Mustafa',
                islemMiktar: 1000,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 5000,
                paraAlanSonBakiye: 4000
                },
                
                {
                paraGonderen: 'Kemal',
                parayiAlan: 'Meral',
                islemMiktar: 75,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 300,
                paraAlanSonBakiye: 375
                },
                
                {
                paraGonderen: 'Zafer',
                parayiAlan: 'Sibel',
                islemMiktar: 120,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 400,
                paraAlanSonBakiye: 520
                },
                
                {
                paraGonderen: 'Ayhan',
                parayiAlan: 'Gizem',
                islemMiktar: 250,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 600,
                paraAlanSonBakiye: 850
                },
                
                {
                paraGonderen: 'Sevgi',
                parayiAlan: 'Kadir',
                islemMiktar: 180,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 700,
                paraAlanSonBakiye: 520
                },
                
                {
                paraGonderen: 'Aslı',
                parayiAlan: 'Emre',
                islemMiktar: 430,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 900,
                paraAlanSonBakiye: 1300
                },
                
                {
                paraGonderen: 'Hakan',
                parayiAlan: 'Selin',
                islemMiktar: 60,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 150,
                paraAlanSonBakiye: 210
                },
                
                {
                paraGonderen: 'Tolga',
                parayiAlan: 'Nihal',
                islemMiktar: 300,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 1000,
                paraAlanSonBakiye: 700
                },
                
                {
                paraGonderen: 'Nazlı',
                parayiAlan: 'Murat',
                islemMiktar: 90,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 450,
                paraAlanSonBakiye: 540
                },
                
                {
                paraGonderen: 'Kerem',
                parayiAlan: 'Ceren',
                islemMiktar: 200,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 800,
                paraAlanSonBakiye: 600
                },
                
                {
                paraGonderen: 'Nilüfer',
                parayiAlan: 'Eren',
                islemMiktar: 150,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 400,
                paraAlanSonBakiye: 550
                },
                
                {
                paraGonderen: 'Kamil',
                parayiAlan: 'Şeyma',
                islemMiktar: 280,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 700,
                paraAlanSonBakiye: 980
                },
                
                {
                paraGonderen: 'Şule',
                parayiAlan: 'Tayfun',
                islemMiktar: 420,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 1200,
                paraAlanSonBakiye: 780
                },
                
                {
                paraGonderen: 'Onur',
                parayiAlan: 'Gül',
                islemMiktar: 75,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 300,
                paraAlanSonBakiye: 375
                },
                
                {
                paraGonderen: 'Seda',
                parayiAlan: 'Ege',
                islemMiktar: 110,
                islemTarih: '12-09-2023',
                paraGonderenSonBakiye: 500,
                paraAlanSonBakiye: 610
                }
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
export const usersData = {
    getProductsData() {
        return [
            { users: 'Ahmet Yılmaz', bakiye: 500 },
            { users: 'Ayşe Demir', bakiye: 750 },
            { users: 'Mehmet Kaya', bakiye: 400 },
            { users: 'Zeynep Aksoy', bakiye: 600 },
            { users: 'Cemil Öztürk', bakiye: 350 },
            { users: 'Aslı Çelik', bakiye: 800 },
            { users: 'Eren Yıldırım', bakiye: 300 },
            { users: 'Fatma Özdemir', bakiye: 900 },
            { users: 'Gökhan Aksu', bakiye: 550 },
            { users: 'Deniz Gündüz', bakiye: 650 },
            { users: 'Elif Şahin', bakiye: 420 },
            { users: 'Kadir Yılmaz', bakiye: 730 },
            { users: 'Gamze Öz', bakiye: 480 },
            { users: 'Burak Yıldız', bakiye: 560 },
            { users: 'Sibel Tekin', bakiye: 320 },
            { users: 'Ercan Korkmaz', bakiye: 670 },
            { users: 'Sevgi Aydın', bakiye: 390 },
            { users: 'Oğuzhan Çetin', bakiye: 720 },
            { users: 'Seda Demirtaş', bakiye: 430 },
            { users: 'Kemal Erdoğan', bakiye: 580 }
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




