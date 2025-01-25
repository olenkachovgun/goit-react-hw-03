import React from "react";
import Contact from "../Contact/Contact";
// import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div>
      ContactList
      <ul>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
