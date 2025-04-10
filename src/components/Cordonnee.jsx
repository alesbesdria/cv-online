import IconePhone from "../assets/tel.png";
import IconeMail from "../assets/mail.png";
import GITHUB from "../assets/github.png";
import "../css/footer.css";
export default function Cordonnee() {
  return (
    <>
      <footer className="cordonnée">
        <div className="footer-content">
          <p>MEIRSMAN</p>
          <p>Mélissa</p>
          <address>Orléans, Sully-sur-Loire, Gien</address>
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
        </div>
      </footer>
    </>
  );
}
