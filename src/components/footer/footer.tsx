import "../footer/footer.css";
import useFooter from "../../hooks/useFooter";
import SocialList from "../contact/SocialList";
import useContactUs from "../../hooks/useContactUs";

const Footer = () => {
  const { adreess } = useFooter();
  const { content } = useContactUs()

  return (
    <div className="footer" style={{ marginTop: 300 }}>
      <div className="sb__footer">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>
              Hall of Collaborator
            </h4>
            <a href="https://salt.id/academy">
              <div className="logo">
                <p>
                  <img src="/images/salt.webp" alt="" />
                </p>
              </div>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <div className="contact-us">
              <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>
                Contact Us
              </h4>
              {content && (
            <ul className="grid gap-1">
              <a href={content.data.attributes.phone}>
                <SocialList
                content={
                  "Whatsapp"
                }
                imageSource="./images/telp.png"
                />
              </a>
              <a href={content.data.attributes.email}>
                <SocialList
                  content='Our Email'
                  imageSource="./images/email.png"
                />
              </a>
              <a href={content.data.attributes.adress}>
                <SocialList
                  content='Our Addresss'
                  imageSource="./images/lokasi.png"
                />
              </a>
            </ul>
          )}
            </div>
          </div>
          <div className="sb__footer-links_div">
            <div className="addres">
              <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>Address</h4>
              {adreess && (
                <>
                  <p>{adreess.attributes.street}</p>
                  <p className="font-bold">{adreess.attributes.city}</p>
                </>
              )}
            </div>
          </div>
          <div className="sb__footer-links_div">
            <h4 style={{ fontWeight: "bold", fontSize: "13px" }}>
              Social media bawahnya
            </h4>
            <div className="  flex gap-7 justify-center items-center">
              <a href="https://www.facebook.com/konselingsatir.id/">
                <img src="/images/fb.webp" alt="" />
              </a>
              <a href="https://www.instagram.com/konselingsatir.id/">
                <img src="./images/ig.webp" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>Copyright © 2021 Konseling Satir Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
