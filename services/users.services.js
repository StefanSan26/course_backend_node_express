const faker = require('faker')
// const getConnection = require('../libs/postgres')
const {models} = require('../libs/sequelize')
const boom = require("@hapi/boom")


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
  async create(data){
    const newUser = await models.User.create(data)
    return newUser
  }

  async find(){
    // const client = await getConnection()
    const rta = await models.User.findAll()
    return rta
    // const rta = await client.query('SELECT * from public.task')
    // return rta.rows
  }

  async findOne(id){
    const user = await models.User.findByPk(id)
    if(!user){
      throw boom.notFound('User not found')
    }
    return user
    // return this.users.find(client => client.id === id)
  }
  async update(id,changes){
    const user = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  async delete(id){
    const user = await this.findOne(id)
    // const user = await models.User.findByPk(id)
    await user.destroy()
    return id
  }
}

module.exports = UsersService
