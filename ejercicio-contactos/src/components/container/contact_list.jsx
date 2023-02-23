import React from "react";
import { contacto } from "../../models/contact.class";
import ContactComponent from "./formulario/oneContact";

const ContactListComponent = () => {
  const defaultContact = new contacto(
    "example",
    "apellido example",
    "example@gmail.com",
    false
  );

  return (
    <div>
      <div>
        <h1> Contactos:</h1>
      </div>
      <ContactComponent contacto={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
