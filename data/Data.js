export const TransactionsData = {
  getProductsData() {
    return [
      {
        id: 1000,
        paraGonderen: "Utku",
        parayiAlan: "Omer",
        islemMiktar: 300,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 20,
        paraAlanSonBakiye: 320,
      },

      {
        id: 1001,
        paraGonderen: "Ahmet",
        parayiAlan: "Ayşe",
        islemMiktar: 150,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 200,
        paraAlanSonBakiye: 350,
      },

      {
        id: 1002,
        paraGonderen: "Mehmet",
        parayiAlan: "Ali",
        islemMiktar: 500,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 1000,
        paraAlanSonBakiye: 500,
      },

      {
        id:1003,
        paraGonderen: "Ebru",
        parayiAlan: "Deniz",
        islemMiktar: 50,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 600,
        paraAlanSonBakiye: 550,
      },

      {
        id: 1004,
        paraGonderen: "Can",
        parayiAlan: "Zeynep",
        islemMiktar: 200,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 800,
        paraAlanSonBakiye: 1000,
      },

      {
        id: 1005,
        paraGonderen: "Fatma",
        parayiAlan: "Mustafa",
        islemMiktar: 1000,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 5000,
        paraAlanSonBakiye: 4000,
      },

      {
        id: 1006,
        paraGonderen: "Kemal",
        parayiAlan: "Meral",
        islemMiktar: 75,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 300,
        paraAlanSonBakiye: 375,
      },

      {
        id: 1007,
        paraGonderen: "Zafer",
        parayiAlan: "Sibel",
        islemMiktar: 120,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 400,
        paraAlanSonBakiye: 520,
      },

      {
        id: 1008,
        paraGonderen: "Ayhan",
        parayiAlan: "Gizem",
        islemMiktar: 250,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 600,
        paraAlanSonBakiye: 850,
      },

      {
        id: 1009,
        paraGonderen: "Sevgi",
        parayiAlan: "Kadir",
        islemMiktar: 180,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 700,
        paraAlanSonBakiye: 520,
      },

      {
        id: 1010,
        paraGonderen: "Aslı",
        parayiAlan: "Emre",
        islemMiktar: 430,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 900,
        paraAlanSonBakiye: 1300,
      },

      {
        id: 1011,
        paraGonderen: "Hakan",
        parayiAlan: "Selin",
        islemMiktar: 60,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 150,
        paraAlanSonBakiye: 210,
      },

      {
        id: 1012,
        paraGonderen: "Tolga",
        parayiAlan: "Nihal",
        islemMiktar: 300,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 1000,
        paraAlanSonBakiye: 700,
      },

      {
        id: 1013,
        paraGonderen: "Nazlı",
        parayiAlan: "Murat",
        islemMiktar: 90,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 450,
        paraAlanSonBakiye: 540,
      },

      {
        id: 1014,
        paraGonderen: "Kerem",
        parayiAlan: "Ceren",
        islemMiktar: 200,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 800,
        paraAlanSonBakiye: 600,
      },

      {
        id: 1015,
        paraGonderen: "Nilüfer",
        parayiAlan: "Eren",
        islemMiktar: 150,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 400,
        paraAlanSonBakiye: 550,
      },

      {
        id: 1016,
        paraGonderen: "Kamil",
        parayiAlan: "Şeyma",
        islemMiktar: 280,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 700,
        paraAlanSonBakiye: 980,
      },

      {
        id: 1017,
        paraGonderen: "Şule",
        parayiAlan: "Tayfun",
        islemMiktar: 420,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 1200,
        paraAlanSonBakiye: 780,
      },

      {
        id: 1018,
        paraGonderen: "Onur",
        parayiAlan: "Gül",
        islemMiktar: 75,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 300,
        paraAlanSonBakiye: 375,
      },

      {
        id: 1019,
        paraGonderen: "Seda",
        parayiAlan: "Ege",
        islemMiktar: 110,
        islemTarih: "12-09-2023",
        paraGonderenSonBakiye: 500,
        paraAlanSonBakiye: 610,
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
  },
};
export const usersData = {
  getProductsData() {
    return [
      {id:1000, users: "Ahmet Yılmaz", bakiye: 500 },
      {id:1001, users: "Ayşe Demir", bakiye: 750 },
      {id:1002, users: "Mehmet Kaya", bakiye: 400 },
      {id:1003, users: "Zeynep Aksoy", bakiye: 600 },
      {id:1004, users: "Cemil Öztürk", bakiye: 350 },
      {id:1005, users: "Aslı Çelik", bakiye: 800 },
      {id:1006, users: "Eren Yıldırım", bakiye: 300 },
      {id:1007, users: "Fatma Özdemir", bakiye: 900 },
      {id:1008, users: "Gökhan Aksu", bakiye: 550 },
      {id:1009, users: "Deniz Gündüz", bakiye: 650 },
      {id:1010, users: "Elif Şahin", bakiye: 420 },
      {id:1011, users: "Kadir Yılmaz", bakiye: 730 },
      {id:1012, users: "Gamze Öz", bakiye: 480 },
      {id:1013, users: "Burak Yıldız", bakiye: 560 },
      {id:1014, users: "Sibel Tekin", bakiye: 320 },
      {id:1015, users: "Ercan Korkmaz", bakiye: 670 },
      {id:1016, users: "Sevgi Aydın", bakiye: 390 },
      {id:1017, users: "Oğuzhan Çetin", bakiye: 720 },
      {id:1018, users: "Seda Demirtaş", bakiye: 430 },
      {id:1019, users: "Kemal Erdoğan", bakiye: 580 },
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
  },
};
