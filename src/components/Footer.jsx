// scr/components/Footer.jsx
import "../style/style.css";
import aboutLogo from "../assets/UKF_about-logo-image.svg";
import contactIcon from "../assets/contact-link.svg";

export default function Footer() {
  return (
    <footer>
      {/* CONTACT */}
      <div className="contact-section" id="contact-section-id">
        <div className="contact-title">KONTAKT OSS</div>

        <div className="contact-content">
          <div className="contact-links">
            <a
              href="https://www.instagram.com/uakunstforening/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-name">instagram</div>
              <img className="contact-link-icon" src={contactIcon} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61575929593237"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-name">facebook</div>
              <img className="contact-link-icon" src={contactIcon} />
            </a>

            <a
              href="https://www.linkedin.com/company/109398664/admin/dashboard/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-name">linkedIn</div>
              <img className="contact-link-icon" src={contactIcon} />
            </a>

            <a href="mailto:ua.kunstforening@gmail.com" className="contact-email no-select">
              <span className="line">ua.kunstforening</span>
              <span className="dog">@</span>
              <span className="line">gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-description">
              Formålet med foreningen er å samle og synliggjøre ukrainske kunstnere i Norge,
              <br /> fremme deres virksomhet og bidra til økt <br /> offentlig engasjement i kunst og kultur.
              <br id="special-br" /><br />
              Ønsker du å motta nyheter om utstillinger, arrangementer og foreningens aktiviteter?
              <br id="special-br" /><br id="special-br"/>
              Abonner på nyhetsbrevet vårt: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvf9KaLpu9c8vm1SbaFsmBnkkG9aRFt_7Rd7aD3ewpz_y8Fg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">Abonner på nyhetsbrevet</a>
            </div>

            <div className="about-details">
              <div className="about-details-content">DEN UKRAINSKE KUNSTFORENING</div>
              <div className="kontonummer">Org. n. 935 633 001</div>

              <a href="mailto:ua.kunstforening@gmail.com" className="contact-email no-select" id="contact-email-id-special">
                <span className="line">ua.kunstforening</span>
                <span className="dog">@</span>
                <span className="line">gmail.com</span>
              </a>
            </div>
          </div>

          <div className="about-logo">
            <img className="about-logo-image" src={aboutLogo} />
          </div>
        </div>
      </div>
    </footer>
  );
}