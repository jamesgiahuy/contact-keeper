import React, { useContext } from "react";
import ContactCard from "../ContactCard/ContactCard";
import { v4 as uuidv4 } from "uuid";
import contactContext from "../../contexts/ContactContext/ContactContext";

const ContactList = (props) => {
  // props
  const { onDeleteCard } = props;

  const { contacts } = useContext(contactContext);
  console.log(contacts);
  return (
    <div className="">
      {contacts.map((contact, index) => (
        <ContactCard
          contact={contact}
          key={uuidv4()}
          onDeleteCard={onDeleteCard}
        />
      ))}
    </div>
  );
};

export default ContactList;
