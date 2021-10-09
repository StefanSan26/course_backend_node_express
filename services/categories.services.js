const faker = require('faker')


class CategoriesService {
  constructor(){
    this.categories=[]
    this.generate()

  }

  generate(){
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id:faker.datatype.uuid(),
        name:faker.commerce.department(),
        products:Math.floor(Math.random() * 20) + 1
      })
    }
  }
  async create(data){
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory)
    return newCategory
  }

  async find(){
    return this.categories
  }

  async findOne(id){
    return this.categories.find(item => item.id === id)
  }
  async update(id,data){
    const index = this.categories.findIndex(item => item.id === id)
    if(index ==-1){
      throw console.error('Categoria no encontrada')
    }
    const category = this.categories[index]
    this.categories[index]= {
      ...category,
      ...data
    }
    return this.categories[index]
  }

  async delete(id){
    const index = this.categories.findIndex(item => item.id === id)
    if(index == -1){
      throw console.error('Categoria no encontrada')
    }
    const category = this.categories.splice(index,1)
    return category
  }
}

module.exports = CategoriesService
