import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";

const Footer = () => {
  return (
    <footer className="flexCenter pb-24 pt-20">
      <div className="max_padd_container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* AgriRise Brand */}
          <Link to="/" className="mb-10 bold-20">Agri-Rise</Link>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link to="/" key={link}>{link}</Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Footer Contact Info */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link to="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p>{link.label}:</p>
                    <p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* Social Media Links */}
            <div className="flex">
              <FooterColumn>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((social, index) => (
                    <a
                      href={social.link}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Directly changing icon color to white */}
                      <img
                        src={social.icon}
                        alt="socialIcon"
                        height={22}
                        width={22}
                        style={{ fill: "#fff" }} // Ensuring the icons are white
                      />
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Footer Separator */}
        <div className="border bg-gray-20"></div>

        {/* Footer Note */}
        <p className="text-center regular-14 text-gray-30">© 2024 AgriRise | Empowering Farmers, Elevating Agriculture</p>
      </div>
    </footer>
  );
};

// FooterColumn Component
const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
