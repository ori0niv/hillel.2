const contactBook = {
    contacts:[{
        name: 'Maksim Iliev',
        phone: +'905348823617',
        mail: 'maksim.iliev@icloud.com'
    },
        {
            name: 'Daria Dobrov',
            phone: '+380984165822',
            mail: 'dobrov.daria@gmail.com'
        }],
    findContactByName: function (name){

        return this.contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase());
    },
      addContact: function (name,phone,mail){
      const newContact= {name, phone, mail};
      this.contacts.push(newContact);
      console.log("New contact", newContact);
      }
}

console.log(contactBook.findContactByName("Maksim Iliev"));
contactBook.addContact("Valera Pisakov","+35950025545421", "ololo@mail.com");
console.log(contactBook.contacts);