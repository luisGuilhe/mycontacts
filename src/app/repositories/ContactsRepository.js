const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Luis Guilherme',
    email: 'guilherme.aires.dias@gmail.com',
    phone: '12787123456',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
