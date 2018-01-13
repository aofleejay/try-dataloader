const Dataloader = require('dataloader')
const { fetchUserById } = require('../apis/user')

const fetchUserByIds = ids => Promise.all(ids.map(id => fetchUserById(id)))

userLoader = new Dataloader(ids => fetchUserByIds(ids))

module.exports = userLoader
