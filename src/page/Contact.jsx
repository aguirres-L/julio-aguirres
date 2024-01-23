import ContactForm from "../Components/From/From";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <h2>Julio Aguirres</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem quae consequuntur nihil vel nemo qui non sint fugit quia
            magni distinctio in aut, esse nam. Beatae officiis nulla doloribus!
          </p>
        </div>
        
        <ContactForm/>
      </div>
    </div>
  );
}
