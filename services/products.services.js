const faker = require('faker')


class ProductsService {
  constructor(){
    this.products=[]
    this.generate()

  }

  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl()
      })
    }
  }
  async create(data){
    const newUser = {
      id:faker.datatype.uuid(),
      ...data
    }
    this.products.push(newUser)
    return newUser
  }

  find(){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(this.products)
      }, 5000);
    })
  }

  async findOne(id){
    const name = this.metodoQueNoExiste()
    return this.products.find(product => product.id === id)
  }
  async update(id,data){
    const index = this.products.findIndex(product => product.id === id)
    if (index == -1) {
      throw new Error('ID Not Found')
    }
    const product = this.products[index]
    this.products[index] = {...product,...data}
    return this.products[index]
  }

  async delete(id){
    const index = this.products.findIndex(product => product.id === id)
    if (index == -1) {
      throw new Error('Product Not Found')
    }
    const product =this.products.splice(index,1)
    return product
  }
}

module.exports = ProductsService
