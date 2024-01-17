const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // lista todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // obtem 1 registro
  show() {
  }

  // cria 1 registro
  store() {
  }

  // atualiza 1 registro
  update() {
  }

  // deleta 1 registro
  delete() {
  }
}

module.exports = new ContactController();
