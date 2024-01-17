const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Luis',
    email: 'luis@gmail.com',
    phone: '12787123456',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Guilherme',
    email: 'guilherme@gmail.com',
    phone: '12787123456',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
