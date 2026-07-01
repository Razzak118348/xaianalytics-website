import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";
import { FiBookOpen, FiCalendar, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import Scope from "../../Components/Scope/Scope";
import Topic from "../../Components/Topic/Topic";

const Home = () => {
  return (
    <div className="bg-base-100">
      {/* Premium Academic Publication Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-base-200 p-6 sm:p-10 rounded-3xl border border-base-300 shadow-xl overflow-hidden relative group">
          {/* Subtle background gradient flare for a modern UI touch */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-all duration-500" />

          {/* Left Side: Animated Book Cover Wrapper (4 Columns wide on large screens) */}
          <MotionDiv
            x={-40}
            y={0}
            duration={0.8}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative max-w-[240px] sm:max-w-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-base-content/10 transition-transform duration-500 hover:scale-[1.03] border border-base-300">
              <Link
                to="https://link.springer.com/series/6161"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/home/book.jpeg"
                  alt="Book Cover - Studies in International Series in Operations Research & Management Science"
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>
          </MotionDiv>

          {/* Right Side: Structured Text Content (8 Columns wide on large screens) */}
          <div className="lg:col-span-8 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Title Block */}
            <div className="space-y-2 w-full">
              <div className="badge badge-primary badge-outline font-semibold gap-1.5 px-3 py-3 text-xs tracking-wider uppercase mx-auto lg:mx-0">
                <Link
                  to="https://link.springer.com/series/6161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <FiBookOpen className="w-3.5 h-3.5" /> Access The Series Page
                </Link>
              </div>
              <MotionH2
                text="International Series in Operations Research and Management Science"
                className="text-md lg:text-3xl font-extrabold text-base-content !text-center lg:!text-left"
              />
              <div className="inline-flex items-center gap-2 text-sm font-bold text-secondary mt-1 bg-secondary/10 px-3 py-1 rounded-full">
                Indexed by Web of Science (WoS)
              </div>
            </div>

            {/* Timeline Row (Responsive Grid layout for key dates) */}
            <MotionDiv
              y={30}
              delay={0.2}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full bg-base-100 p-4 rounded-2xl border border-base-300/60"
            >
              <div className="flex items-center gap-3 p-2">
                <div className="p-2.5 rounded-xl bg-error/10 text-error">
                  <FiCalendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-base-content/50 uppercase font-bold tracking-wider">
                    Submission Deadline
                  </p>
                  <p className="text-sm sm:text-base font-bold text-base-content">
                    15 December 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-base-300/60 pt-4 sm:pt-2 sm:pl-6">
                <div className="p-2.5 rounded-xl bg-success/10 text-success">
                  <FiCalendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-base-content/50 uppercase font-bold tracking-wider">
                    Publication Deadline
                  </p>
                  <p className="text-sm sm:text-base font-bold text-base-content">
                    15 March 2027
                  </p>
                </div>
              </div>
            </MotionDiv>

            {/* Call To Action Button utilizing your slide-in paragraph wrapper strategy */}
            <div className="w-full flex justify-center">
              <MotionDiv y={30} delay={0.3} className="w-full sm:w-auto pt-2">
                <Link
                  to="https://easychair.org/account/signin?l=8742937441755881830.1782908715.1624ee14"
                  className="btn btn-primary btn-md sm:btn-md px-8 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  <span className="text-white">Click Here to Submit</span>
                  <FiExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <Scope></Scope>

      {/* keyword section  */}
      {/* ================= KEYWORDS SECTION ================= */}
      <section className="bg-base-100 text-base-content py-10 px-4 my-6 sm:px-6 lg:px-8 border-t border-base-200 transition-colors duration-300">
        <MotionDiv className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-base-200 p-6 sm:p-8 rounded-2xl border border-base-300 shadow-sm relative overflow-hidden group">
            {/* Background Accent Mesh */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 dark:bg-accent/10 rounded-full blur-2xl pointer-events-none" />

            {/* Label Area */}
            <div className="md:w-1/5 flex-shrink-0">
              <h4 className="text-xs uppercase tracking-widest font-black text-secondary mb-1">
                Core Focus
              </h4>
              <h3 className="text-xl font-extrabold tracking-tight">
                Index Terms or Keywords
              </h3>
            </div>

            {/* Keywords Wrap Wrapper */}
            <div className="md:w-4/5 flex flex-wrap gap-2.5 text-semibold">
              {[
                "Artificial Intelligence",
                "Explainable Artificial Intelligence",
                "Big Data",
                "Machine Learning",
                "Deep Learning",
                "Business Analytics",
                "Decision Making",
                "Distributed Computing",
                "Block Chain",
                "Information Intelligence",
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl bg-base-100 border border-base-300 text-base-content/80 hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* topic section */}

      {/* ================= RESEARCH TOPICS SECTION ================= */}
      <section className="bg-base-100 text-base-content py-20 px-4 sm:px-6 lg:px-8 border-t border-base-200 transition-colors duration-300 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-12 ">
          {/* Section Header */}
          <div className="flex items-center justify-center">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-xl md:text-3xl font-bold text-center">
                Target Research Topics & Themes
              </h2>
              <p className="text-center ">
                We welcome high-quality, unpublished book chapter submissions
                exploring mathematical innovations, case studies, and framework
                designs within the following core domains:
              </p>
            </div>
          </div>

          {/* Topics Grid Architecture */}
          <Topic></Topic>
        </div>
      </section>
    </div>
  );
};

export default Home;
