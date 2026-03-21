import IconePhone from "../assets/tel.png";
import IconeMail from "../assets/mail.png";
import GITHUB from "../assets/github.png";
import linkedin from "../assets/linkedin.jpg";
import "../css/footer.css";
export default function Cordonnee() {
  return (
    <>
      <footer className="cordonnée">
        <div className="footer-content">
          <p>MEIRSMAN</p>
          <p>Mélissa</p>
          <address>Orléans, Sully-sur-Loire, Gien</address>
          <p>DPT : 45, 18, 58, 89, 77</p>
        </div>

        <div className="footer-content">
          <div className="phone">
            <img src={IconePhone} alt="icone phone" className="icone" />
            <a href="tel:0628029684" className=""> 06.69.43.54.04</a>
          </div>
          <div className="mail">
            <img src={IconeMail} alt="icone mail" className="icone" />
            <a href="mailto:melissa@meirsman.fr">
            melissa@meirsman.fr
            </a>
          </div>
          <div className="github">  
            <img src={GITHUB} alt="icone github" className="icone" />
            <a href="https://github.com/alesbesdria">github.com/alesbesdria</a>
          </div>
                    <div className="github">  
            <img src={linkedin} alt="icone linkedin" className="icone" />
            <a href="https://www.linkedin.com/in/m%C3%A9lissa-meirsman-8a2b492a9/">linkedin.com/melissa-meirsman</a>
          </div>
        </div>
      </footer>
    </>
  );
}
