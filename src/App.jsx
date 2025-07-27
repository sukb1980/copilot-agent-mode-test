import { useState } from 'react';
import './App.css';

function HeroBanner({ onDonateClick }) {
  return (
    <section className="hero">
      <h1>Empowering Girl Children & Supporting Survivors</h1>
      <p>
        Our NGO is dedicated to providing hope, support, and opportunities for girl children and victims of rape incidents. Join us in making a difference.
      </p>
      <button className="donate-btn" onClick={onDonateClick}>Donate Now</button>
    </section>
  );
}

function Home() {
  return (
    <section className="home">
      <h2>About Us</h2>
      <p>
        We are a non-profit organization committed to the welfare, education, and rehabilitation of girl children and survivors of sexual violence. Our mission is to create a safe, nurturing environment and empower them to lead fulfilling lives.
      </p>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <img src="https://placehold.co/300x200?text=Image+1" alt="Gallery 1" />
        <img src="https://placehold.co/300x200?text=Image+2" alt="Gallery 2" />
        <video width="300" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Email: support@ngoforgirls.org</p>
      <p>Phone: +91-12345-67890</p>
      <p>Address: 123 Hope Street, City, Country</p>
    </section>
  );
}

function DonationForm() {
  const [form, setForm] = useState({ name: '', address: '', phone: '', email: '', amount: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="donation">
      <h2>Make a Donation</h2>
      {submitted ? (
        <div className="thank-you">Thank you for your support, {form.name}!</div>
      ) : (
        <form onSubmit={handleSubmit} className="donation-form">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required min="1" />
          <button type="submit">Donate</button>
        </form>
      )}
    </section>
  );
}

function LoginForm({ onBack }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="login">
      <h2>User Login</h2>
      {submitted ? (
        <div className="thank-you">Login successful!</div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <div className="button-row">
            <button type="submit">Login</button>
            <button type="button" onClick={onBack}>Back</button>
          </div>
        </form>
      )}
    </section>
  );
}

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('gallery')}>Gallery</button>
      <button onClick={() => setPage('contact')}>Contact</button>
      <button onClick={() => setPage('donate')}>Donate</button>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      The NGO Foundation © 2025 &nbsp;|&nbsp; Empowering Girl Children & Survivors
    </footer>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">
      {!showLogin && (
        <header style={{position: 'relative'}}>
          <button
            className="login-btn"
            style={{position: 'absolute', top: 20, right: 30}}
            onClick={() => { setShowLogin(true); }}
          >
            Login
          </button>
        </header>
      )}
      {showLogin ? (
        <div className="login-bg">
          <LoginForm onBack={() => setShowLogin(false)} />
        </div>
      ) : (
        <>
          <HeroBanner onDonateClick={() => setPage('donate')} />
          <Navbar setPage={setPage} />
          {page === 'home' && <Home />}
          {page === 'gallery' && <Gallery />}
          {page === 'contact' && <Contact />}
          {page === 'donate' && <DonationForm />}
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
