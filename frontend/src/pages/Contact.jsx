import ContactForm from "../components/ContactForm";
import style from "../components/styles/ContactForm.module.css";

const Contact = () => {
  return (
    <div className={style.contact_container}>
      <h1>Contactez-moi</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
