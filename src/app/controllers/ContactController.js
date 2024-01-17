const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // lista todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // obtem 1 registro
  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found!' });
    }

    response.json(contact);
  }

  // cria 1 registro
  store() {
  }

  // atualiza 1 registro
  update() {
  }

  // deleta 1 registro
  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User uninformed!' });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
