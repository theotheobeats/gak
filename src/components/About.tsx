const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section">
      <div className="page-container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img src="/img/about.png" alt="About" className="w-full rounded-2xl card object-fit" />
            <div className="absolute -bottom-6 -right-6 card p-4 hidden md:block">
              <div className="text-sm text-[color:var(--muted-ink)]">72 years</div>
              <div className="font-semibold">Following Christ</div>
            </div>
          </div>
          <div>
            <div className="chip mb-3 inline-block">About Us</div>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-4">
              More than 70 years of Christ Centered Worship
            </h2>
            <p className="text-[color:var(--muted-ink)] max-w-prose">
              Christ Centered Worship, Prayer, and Fellowship. No matter your background, you are welcome here.
            </p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => scrollToSection("schedule")} className="btn btn-primary pill">See Schedules</button>
              <button onClick={() => scrollToSection("devotion")} className="btn btn-outline pill">Read Devotions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
