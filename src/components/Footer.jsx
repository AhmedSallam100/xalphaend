import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        Made With 💜 By
        <a
          href="https://web.facebook.com/xravox"
          target="_blank"
          rel="noreferrer"
        >
          Ahmed Sallam
        </a>
        © <span className="year-auto">{new Date().getFullYear()}</span>
      </div>
      <div className="right">
        <ul className="list-unstyled social d-flex  align-center just-cont-c ltr mb-0">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=201024289101&text=السلام عليكم"
            >
              <i
                className="uil uil-whatsapp"
                style={{
                  fontSize: "30px",
                }}
              ></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://web.facebook.com/xravox"
            >
              <i className="fa-brands fa-facebook-f fa-fw fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AhmedSallam100"
            >
              <i className="fa-brands fa-github fa-fw fa-2x"></i>
            </a>
          </li>
          <br className="visible-xs" />
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ahmedsallam110/"
            >
              <i className="fa-brands fa-instagram fa-fw fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
