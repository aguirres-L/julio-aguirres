import React, { useState } from 'react';
import './ContactForm.css'; // Asegúrate de crear un archivo CSS para tus estilos

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    setFormData({
      name: '',
      message: '',
    });
  // Crear el mensaje con los datos del formulario
  const messageText = `Hola mi nombre es ${formData.name}. Me comunico por ${formData.message}`;

  // Construir la URL de WhatsApp
  const whatsappURL = `https://wa.me/3512364375?text=${encodeURIComponent(
    messageText
  )}`;

  // Redirigir a la URL de WhatsApp
  window.location.href = whatsappURL;
    
  };

 
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mensaje:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4" // Fija el número de filas para que el textarea no sea redimensionable
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
