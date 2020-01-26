import React from "react";

export default function Portfolio() {
  return (
    <div className="full-width">
      <div className="container-mtb-2">
        <div className="portfolio">
          <div className="portfolio-menu">
            <h1 className="header">Portfolio</h1>
            <h4>UKA</h4>
            <h4>Tassie in Lisbon</h4>
            <h4>The Book Cellar</h4>
            <h4>Mission: Antarctica</h4>
          </div>
          <div className="portfolio-content">
            <section className="mb-2em">
              <img
                className="portfolio-img"
                src="./images/portfolio-uka.png"
                alt="Ultimate Kitchen Assistant"
              />
              <a href="http://uka.recipes">
                <h5 className="mb-075">Ultimate Kitchen Assistant</h5>
              </a>
              <p className="mb-075 project-description">
                A powerful recipe finder with favourites, private notes and public
                comments
              </p>
              <p>
                <em>
                  Node.js &nbsp;&nbsp;&nbsp; Express &nbsp;&nbsp;&nbsp; Handlebars
                  &nbsp;&nbsp;&nbsp; MongoDB &nbsp;&nbsp;&nbsp; Mongoose
                </em>
              </p>
              <p>
                <em>
                  Bootstrap &nbsp;&nbsp;&nbsp; HTML &nbsp;&nbsp;&nbsp; CSS
                  &nbsp;&nbsp;&nbsp; JavaScript
                </em>
              </p>
            </section>

            <section className="mb-2em">
              <img
                className="portfolio-img"
                src="./images/portfolio-tassieinlisbon.png"
                alt="Tassie in Lisbon"
              />
              <a href="https://tassieinlisbon.live">
                <h5 className="mb-075">Tassie in Lisbon</h5>
              </a>
              <p className="mb-075 project-description">A stylish apartment for short-term lets</p>
              <p>
                <em>
                  WordPress &nbsp;&nbsp;&nbsp; MariaDB &nbsp;&nbsp;&nbsp; Linux
                </em>
              </p>
              <p>
                <em>HTML &nbsp;&nbsp;&nbsp; CSS &nbsp;&nbsp;&nbsp; JavaScript</em>
              </p>
              <p>
                <em>Photography &nbsp;&nbsp;&nbsp; Lighroom</em>
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
