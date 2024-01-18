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

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  create({
    name, phone, email, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        phone,
        email,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  update(id, {
    name, phone, email, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        phone,
        email,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));

      resolve(updateContact);
    });
  }
}

module.exports = new ContactsRepository();
