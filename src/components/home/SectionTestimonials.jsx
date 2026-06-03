import Style from "./SectionTestimonials.module.css";

function SectionTestimonials() {
  return (
    <section className={Style["section-testimonials"]} id="testimonials">
      <div className={Style["testimonials-container"]}>
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className={Style["testimonials"]}>
          <figure className={Style["testimonial"]}>
            <img
              className={Style["testimonial-img"]}
              alt="Photo of customer Dave Bryson"
              src="/img/customers/dave.jpg"
            />
            <blockquote className={Style["testimonial-text"]}>
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className={Style["testimonial-name"]}>&mdash; Dave Bryson</p>
          </figure>

          <figure className={Style["testimonial"]}>
            <img
              className={Style["testimonial-img"]}
              alt="Photo of customer Ben Hadley"
              src="/img/customers/ben.jpg"
            />
            <blockquote className={Style["testimonial-text"]}>
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className={Style["testimonial-name"]}>&mdash; Ben Hadley</p>
          </figure>

          <figure className={Style["testimonial"]}>
            <img
              className={Style["testimonial-img"]}
              alt="Photo of customer Steve Miller"
              src="/img/customers/steve.jpg"
            />
            <blockquote className={Style["testimonial-text"]}>
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className={Style["testimonial-name"]}>&mdash; Steve Miller</p>
          </figure>

          <figure className={Style["testimonial"]}>
            <img
              className={Style["testimonial-img"]}
              alt="Photo of customer Hannah Smith"
              src="/img/customers/hannah.jpg"
            />
            <blockquote className={Style["testimonial-text"]}>
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className={Style["testimonial-name"]}>&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div className={Style["gallery"]}>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-1.jpg"
            alt="Photo of beautifully
            arranged food"
          />
          {/* <!-- <figcaption>Caption</figcaption> --> */}
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-2.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-3.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-4.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-5.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-6.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-7.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-8.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-9.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-10.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-11.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className={Style["gallery-item"]}>
          <img
            src="/img/gallery/gallery-12.jpg"
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
      </div>
    </section>
  );
}

export default SectionTestimonials;
