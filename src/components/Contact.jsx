// src/components/Contact.jsx
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Contact;