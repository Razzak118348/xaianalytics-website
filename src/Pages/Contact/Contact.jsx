import React from "react";
import {
  MotionDiv,
  MotionH2,
  MotionP,
} from "../../utils/MotionElements";

import {
  FiGlobe,
  FiMail,
  FiMapPin,
  FiUser,
  FiBookOpen,
} from "react-icons/fi";

const Contact = () => {
  const contacts = [
    {
      name: "Mohammad Abedin, PhD",
       title: "Senior Lecturer in FinTech",
      position: "School of Management",
      university: "Swansea University, UK",
      emails: [
        "m.z.abedin@swansea.ac.uk",
        "abedinmz@yahoo.com",
      ],
    },
    {
      name: "Petr Hajek, PhD",
       title: "Professor",
      position: "Faculty of Economics and Administration",
      university: "University of Pardubice, Czech Republic",
      emails: ["petr.hajek@upce.cz"],
    },
  ];

  return (
    <section className="bg-base-100 py-20 lg:py-28 dark:text-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}

        <MotionDiv className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">

            <FiGlobe className="text-primary" />

            <span className="uppercase text-xs tracking-[0.25em] font-semibold">
              Contact
            </span>

          </div>

          <MotionH2
            text="Contact the Editors"
            className="text-4xl md:text-5xl font-black"
          />

          <MotionP className="mt-6 text-base-content/70 text-center leading-8">
            If you have any questions regarding the book, publication,
            collaboration opportunities, or editorial matters, please feel free
            to contact one of the editors below.
          </MotionP>

        </MotionDiv>

        {/* Contact Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {contacts.map((person, index) => (

            <MotionDiv
              key={index}
              delay={index * 0.2}
              className="dark:text-whitegroup rounded-3xl border border-base-300 bg-base-200/50 p-8 hover:border-primary shadow-2xl hover:shadow-xl transition-all duration-500"
            >

              {/* Name */}

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">

                  <FiUser className="text-3xl text-primary" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    {person.name}
                  </h3>

                  <p className="text-primary font-semibold">
                    {person.title}
                  </p>

                </div>

              </div>

              {/* Institution */}

              <MotionDiv className="space-y-4">

                <div className="flex items-start gap-4">

                  <div className="mt-1 text-primary">
                    <FiBookOpen size={20} />
                  </div>

                  <div>

                    <MotionP className="font-semibold">
                      {person.position}
                    </MotionP>

                    <MotionP className="text-base-content/70">
                      {person.university}
                    </MotionP>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="mt-1 text-primary">
                    <FiMapPin size={20} />
                  </div>

                  <MotionP className="text-base-content/70">
                    {person.university}
                  </MotionP>

                </div>

                <div className="flex items-start gap-4">

                  <div className="mt-1 text-primary">
                    <FiMail size={20} />
                  </div>

                  <div className="space-y-2">

                    {person.emails.map((email, i) => (
                      <a
                        key={i}
                        href={`mailto:${email}`}
                        className="block text-primary hover:underline break-all"
                      >
                        {email}
                      </a>
                    ))}

                  </div>

                </div>

              </MotionDiv>

            </MotionDiv>

          ))}

        </div>

        {/* Bottom Note */}

        <MotionDiv
          delay={0.3}
          className="mt-20 rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center"
        >

          <MotionH2
            text="We're Here to Help"
            className="text-2xl md:text-3xl font-bold mb-4"
          />

          <MotionP className="max-w-3xl mx-auto text-base-content/70 leading-8 text-center">
            We welcome inquiries related to the book, research collaborations,
            editorial matters, and academic partnerships. Our editorial team
            will make every effort to respond to your message as promptly as
            possible.
          </MotionP>

        </MotionDiv>

      </div>
    </section>
  );
};

export default Contact;