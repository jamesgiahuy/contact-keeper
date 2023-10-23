import React, { useEffect, useState } from "react";
import ContactContext from "../../contexts/ContactContext/ContactContext";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
const contactData = [
  {
    id: 1,
    name: "Jill Johnson",
    email: "jill@gmail.com",
    phone: "111-111-1111",
    type: "personal",
  },
  {
    id: 2,
    name: "Sara Watson",
    email: "sara@gmail.com",
    phone: "222-222-2222",
    type: "personal",
  },
  {
    id: 3,
    name: "Harry White",
    email: "harry@gmail.com",
    phone: "333-333-3333",
    type: "professional",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  type: "",
};

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [contactForm, setContactForm] = useState(initialForm);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setContacts(contactData);
  }, []);

  const onAddContact = (contact) => {
    console.log(contact);
    setContacts((prev) => [...prev, contact]);
  };
  const onEditHandle = (id) => {
    const findCard = contacts.find((contact) => contact.id === id);
    setContactForm(findCard);
    setIsEdit(true);
  };
  const onDeleteCard = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const onUpdateHandle = () => {
    const indexFindCard = contacts.findIndex(
      (contact) => contact.id === contactForm.id
    );
    contacts[indexFindCard] = contactForm;
    setContacts(contacts);
    setIsEdit(false);
    setContactForm(initialForm);
    // contacts[indexFindCard] = contactForm;
  };

  return (
    <div className="container mt-4">
      <ContactContext.Provider
        value={{
          contacts,
          onDeleteCard,
          onEditHandle,
          onUpdateHandle,
          contactForm,
          setContactForm,
          initialForm,
          isEdit,
        }}
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <ContactForm onAddContact={onAddContact} />
          </div>
          <div className="col-12 col-md-6">
            <ContactList />
          </div>
        </div>
      </ContactContext.Provider>
    </div>
  );
};

export default HomePage;
