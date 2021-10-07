const faker = require('faker')


class UsersService {
  constructor(){
    this.users=[]
    this.generate()

  }

  generate(){
    const limit = 24;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id:faker.datatype.uuid(),
        userName: faker.internet.userName(),
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
    return this.users
  }

  findOne(id){
    return this.users.find(client => client.id === id)
  }
  update(){

  }

  delete(){

  }
}

module.exports = UsersService
