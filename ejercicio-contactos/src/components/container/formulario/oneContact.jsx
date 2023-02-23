import React from "react";
import PropTypes from "prop-types";
import { contacto } from "../../../models/contact.class";

const ContactComponent = ({ contacto }) => {
  return (
    <div>
      <h2>nombre: {contacto.nombre} </h2>
      <h2> apellido: {contacto.apellido} </h2>
      <h2> email: {contacto.email} </h2>
      <h2>conectado: {contacto.conectado ? 'Contacto en Linea' : 'Contacto no Disponible'} </h2>
    </div>
  );
};

ContactComponent.propTypes = {
  contacto: PropTypes.instanceOf(contacto),
};

export default ContactComponent;
