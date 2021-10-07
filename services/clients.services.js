const faker = require('faker')


class ClientsService {
  constructor(){
    this.clients=[]
    this.generate()

  }

  generate(){
    const limit = 1000;
    for (let i = 0; i < limit; i++) {
      this.clients.push({
        id:faker.datatype.uuid(),
        name:faker.name.findName(),
        email : faker.internet.email(),
        age:Math.floor(Math.random() * 80) + 15,
        image: faker.image.avatar()
      })
    }
  }
  create(){
  }

  find(){
    return this.clients
  }

  findOne(id){
    return this.clients.find(client => client.id === id)
  }
  update(){

  }

  delete(){

  }
}

module.exports = ClientsService
