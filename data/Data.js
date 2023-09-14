export const TransactionsData = {
  async getProductsData({ transfers }) {
    if (transfers && transfers.length > 0) {
      return transfers.map((item) => ({
        id: item.id,
        paraGonderen: `${item.senderUser.firstName} ${item.senderUser.lastName}`,
        parayiAlan: `${item.targetUser.firstName} ${item.targetUser.lastName}`,
        islemMiktar: item.amount,
        islemTarih: item.createdDate,
        paraGonderenSonBakiye: item.senderLastAmount,
        paraAlanSonBakiye: item.targetLastAmount,
      }));
    }
    return [];
  },
  async getProductsMini({ transfers }) {
    const data = await this.getProductsData({ transfers });
    return data.slice(0, 5);
  },

  async getProductsSmall({ transfers }) {
    const data = await this.getProductsData({ transfers });
    return data.slice(0, 10);
  },

  async getProducts({ transfers }) {
    return this.getProductsData({ transfers });
  },

  async getProductsWithOrdersSmall({ transfers }) {
    const data = await this.getProductsWithOrdersData({ transfers });
    return data.slice(0, 10);
  },

  async getProductsWithOrders({ transfers }) {
    return this.getProductsWithOrdersData({ transfers });
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
