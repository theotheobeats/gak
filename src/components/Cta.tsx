import { useState } from "react";

const Cta = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("Counselling");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "6285789012779"; // +62 857-8901-2779 without plus and separators
    const header = "[Message from anugerahkristus.org]";
    const footer = "— sent via anugerahkristus.org";
    const body = `${header}\n\nCategory: ${category}\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${contact}\n\nMessage:\n${message}\n\n${footer}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section">
      <div className="page-container">
        <div className="card overflow-hidden relative">
          <img src="/img/hero.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <div className="chip inline-block">Contact Us</div>
              <h3 className="font-serif text-3xl md:text-5xl mt-2">Come Back To Yourself</h3>
              <p className="mt-3 max-w-prose text-[color:var(--muted-ink)]">Get reminders, prompts, sermons, and mental wellness tips to support your daily walk.</p>
            </div>
            <form className="grid gap-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="subtle-border rounded-lg p-3 bg-white" />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="subtle-border rounded-lg p-3 bg-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="subtle-border rounded-lg p-3 bg-white" />
                <input type="text" placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} className="subtle-border rounded-lg p-3 bg-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="subtle-border rounded-lg p-3 bg-white">
                  <option>Counselling</option>
                  <option>Prayer Request</option>
                  <option>Consultation</option>
                  <option>Volunteer</option>
                  <option>Other</option>
                </select>
                <div className="hidden md:block" />
              </div>
              <textarea placeholder="Your Message / Prayer" value={message} onChange={(e) => setMessage(e.target.value)} className="subtle-border rounded-lg p-3 bg-white min-h-28" />
              <button type="submit" className="btn btn-primary pill w-full md:w-max">Send via WhatsApp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
