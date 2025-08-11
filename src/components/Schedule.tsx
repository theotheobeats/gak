const Schedule = () => {
  return (
    <section className="section">
      <div className="page-container">
        <div className="text-center mb-10">
          <div className="chip inline-block">How We Gather</div>
          <h3 className="font-serif text-3xl md:text-5xl mt-2">Because a Stronger Faith starts with Small Steps</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/img/schedule/card_1.png",
            "/img/schedule/card_2.png",
            "/img/schedule/card_3.png",
            "/img/schedule/card_4.png",
            "/img/schedule/card_5.png",
            "/img/schedule/card_6.png",
            "/img/schedule/card_7.png",
          ].map((src, i) => (
            <div key={src} className="card overflow-hidden">
              <img src={src} alt={`schedule ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
