const Cta = () => {
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
            <form className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First Name" className="subtle-border rounded-lg p-3 bg-white" />
                <input type="text" placeholder="Last Name" className="subtle-border rounded-lg p-3 bg-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input type="email" placeholder="Email Address" className="subtle-border rounded-lg p-3 bg-white" />
                <input type="text" placeholder="Contact Number" className="subtle-border rounded-lg p-3 bg-white" />
              </div>
              <textarea placeholder="Your Prayer" className="subtle-border rounded-lg p-3 bg-white min-h-28" />
              <button type="button" className="btn btn-primary pill w-full md:w-max">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
