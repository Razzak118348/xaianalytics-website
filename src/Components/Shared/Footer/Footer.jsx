import React from "react";
import { FiMail, FiGlobe, FiInfo } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-base-300 p-4 text-base-content transition-colors duration-300 border-t border-base-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Column 1: Publisher Branding (5 Columns wide) */}
          <div className="md:col-span-5 space-y-4 flex flex-col items-center md:items-start text-center md:text-left mb-4">
            <div className="bg-base-100 p-3 rounded-xl border border-base-200/60 shadow-sm inline-block">
              <img
                src="/logo.png"
                className="h-12 w-auto object-contain dark:brightness-110"
                alt="Springer Logo"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-cinzel font-bold text-lg text-left ">
                XaiResAiBusAnalytics
              </h3>
              <p className="text-xs text-base-content/60 max-w-sm leading-relaxed">
                Studies in International Series in Operations Research &
                Management Science.
                <br />
                <span className="font-bold text-normal">
                  Indexed by Web of Science (WoS).
                </span>
              </p>
            </div>
          </div>

          {/* Column 2: Editor Correspondence (7 Columns wide) */}
          <div className="md:col-span-7 space-y-4 w-full">
            <h4 className="font-black text-primary text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              <FiMail className="text-secondary" /> For questions regarding the
              book, please contact
            </h4>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Editor Group 1 */}
              <div className="bg-base-200/60 p-4 rounded-xl border border-base-200 hover:border-primary/20 transition-all duration-200">
                <p className="font-bold">
                  Mohammad Abedin, PhD <br />
                  <span className="text-sm font-normal">
                    School of Management <br />
                    Swansea University, UK
                  </span>
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  <a
                    href="mailto:m.z.abedin@swansea.ac.uk"
                    className="text-sm font-medium hover:text-primary transition-colors block break-all "
                  >
                    Email: m.z.abedin@swansea.ac.uk
                  </a>

                  <a
                    href="mailto:abedinmz@yahoo.com"
                    className="text-sm font-medium hover:text-primary transition-colors block break-all"
                  >
                    Email: abedinmz@yahoo.com
                  </a>
                </div>
              </div>

              {/* Editor Group 2 */}
              <div className="bg-base-200/60 p-4 rounded-xl border border-base-200 hover:border-primary/20 transition-all duration-200">
                <p className="font-bold mb-2">
                  Petr Hajek, PhD <br />
                  <span className="text-sm font-normal">
                    Faculty of Economics and Administration <br />
                    University of Pardubice Czech Republic
                  </span>
                </p>
                <a
                  href="mailto:petr.hajek@upce.cz"
                  className="text-sm font-medium hover:text-primary transition-colors block break-all"
                >
                  Email: petr.hajek@upce.cz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-base-200/60 my-8" />

        {/* Bottom Bar Container */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/50 font-medium">
          <p className="text-center sm:text-left mt-2">
            © {currentYear} Book Proposal Chapter Board. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <FiInfo className="text-xs" /> Peer Reviewed
            </span>
            <span className="flex items-center gap-1">
              <FiGlobe className="text-xs" /> Springer Nature Hub
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
