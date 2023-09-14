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
        id: 1003,
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
  async getProductsData({ userList }) {
    if (userList && userList.length > 0) {
      return userList.map((item) => ({
        id: item.id,
        users: `${item.firstName} ${item.lastName}`,
        amount: item.amount, 
      }));
    }
    return [];
  },

  async getProductsMini({ userList }) {
    const data = await this.getProductsData({ userList });
    return data.slice(0, 5);
  },

  async getProductsSmall({ userList }) {
    const data = await this.getProductsData({ userList });
    return data.slice(0, 10);
  },

  async getProducts({ userList }) {
    return this.getProductsData({ userList });
  },

  async getProductsWithOrdersSmall({ userList }) {
    const data = await this.getProductsWithOrdersData({ userList });
    return data.slice(0, 10);
  },

  async getProductsWithOrders({ userList }) {
    return this.getProductsWithOrdersData({ userList });
  },
};
