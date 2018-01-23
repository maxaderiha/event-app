class RootStore {
  constructor(stores) {
    this.allStores = stores;
  }

  getStore(storeName) {
    return this.allStores[storeName];
  }
}

export default RootStore;