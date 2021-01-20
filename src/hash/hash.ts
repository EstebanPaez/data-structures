class Hash {
  private data: any[];
  private length: number;

  constructor(length: number) {
    this.data = new Array(length);
    this.length = length;
  }
  private hashFunction(key: string) {
    let counter: number = 0;
    for (let i = 0; i < key.length; i++) {
      counter += key.charCodeAt(i);
    }
    const hash = counter % this.length;
    return hash;
  }
  set(value: any, key: string) {
    const address = this.hashFunction(key);
    if (this.data[address]) {
      this.data[address].push({ key: key, value: value });
    } else {
      this.data[address] = [{ key: key, value: value }];
    }
    console.log(
      `Se agrego correctamente el valor: ${value}, con la key: "${key}", en la posición: ${address}`,
    );
    return `Se agrego correctamente el valor: ${value}, en la posición: ${address}`;
  }
  get(key: string) {
    const address = this.hashFunction(key);
    let currentBlock: any[] = this.data[address];
    currentBlock.forEach((element) => {
      if (element.key === key) {
        console.log(element.value);
        return element.value;
      } else {
        console.log(`No se ha podido encontrar un elemento con el key: ${key}`);
      }
    });
  }
  getKeys() {
    let keyList: any[] = [];
    this.data.forEach((element: any[]) => {
      element.forEach((element) => {
        keyList.push(element.key);
      });
    });
    console.log(keyList);
    return keyList;
  }
  delete(key: string) {
    const address = this.hashFunction(key);
    let currentBlock: any[] = this.data[address];
    currentBlock.forEach((_, index) => {
      if (currentBlock[index].key === key) {
        delete currentBlock[index];
      }
    });
    this.data[address] = currentBlock;
    console.log(`La key ${key} fue eliminada`);
    console.log(currentBlock);
    console.log(this.data[address]);
    return `La key ${key} fue eliminada`;
  }
}
