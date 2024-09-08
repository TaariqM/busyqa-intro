import "../css/footer.css";

const Footer = () => {
  return (
    <div className="pageFooter">
      <p>&copy; 2024 Crypto Coin Tracker. All rights reserved</p>
      <div className="connect-footer-Icons">
        <p>Connect With Us</p>
        <div className="footer-Icons">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
