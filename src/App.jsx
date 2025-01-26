import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox ";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  const [filter, setfilter] = useState("");
  const hundleChange = (e) => {
    setfilter(e.target.value.toLowerCase());
  };
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim())
  );
  const handleAddContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };
  console.log(contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm newContact={handleAddContact} />
      <SearchBox value={filter} onChange={hundleChange} />
      <ContactList contacts={filterContacts} />
    </div>
  );
}

export default App;
