import "./TestimonialsSection.css";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonial">
        <div className="quote-icon">“</div>
        <p className="quote-text">
          OMG! I can't believe how easy it was to build my resume. CVGo made it super intuitive and clean. I got interviews in no time.
        </p>
        <p className="author"><strong>Diego Morata</strong><span> Web Developer</span></p>
      </div>

      <div className="testimonial">
        <div className="quote-icon">“</div>
        <p className="quote-text">
          CVGo is simply the best. I recommend it to anyone looking to level up their job search with AI tools and automation.
        </p>
        <p className="author"><strong>Franklin Hicks</strong><span> Digital Marketer</span></p>
      </div>
      
    </section>
  );
}
