// src/pages/Contact/index.tsx

import { lazy } from "react";
import ContactContent from "../../content/ContactContent.json"; // Load JSON data for content
import "./style.css";

const Container = lazy(() => import("../../common/Container"));
const ContactForm = lazy(() => import("../../components/ContactForm"));

const Contact = () => {
  return (
    <Container>
      <ContactForm
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Contact;
