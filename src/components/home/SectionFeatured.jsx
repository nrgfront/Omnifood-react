import Style from "./SectionFeatured.module.css"

function SectionFeatured() {
    return (
         <section className={Style["section-featured"]}>
        <div className="container">
          <h2 className={Style["heading-featured-in"]}>As featured in</h2>
          <div className={Style["logos"]}>
            <img src="/img/logos/techcrunch.png" alt="Techcrunch logo" />
            <img
              src="/img/logos/business-insider.png"
              alt="Business Insider logo"
            />
            <img
              src="/img/logos/the-new-york-times.png"
              alt="The New York Times logo"
            />
            <img src="/img/logos/forbes.png" alt="Forbes logo" />
            <img src="/img/logos/usa-today.png" alt="USA Today logo" />
          </div>
        </div>
      </section>
    )
}

export default SectionFeatured
