import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="new contact"
      />
      <ContactForm
        buttonLabel="register"
      />
    </>
  );
}
