import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";
import {
  FiAward,
  FiGlobe,
  FiLayers,
  FiBookOpen,
} from "react-icons/fi";

const editorsData = [
  {
    name: "M Abedin",
    title: "Senior Lecturer in FinTech",
    institution: "School of Management, Swansea University, UK",
    image: "/photo1.jpg",
    tags: ["FinTech", "Big Data Analytics", "Data Mining", "200+ SSCI Papers"],
    metrics: [
      { label: "Publications", value: "200+ SSCI / ABS" },
      { label: "Editorial Roles", value: "Associate & Guest Editor" },
    ],
    bio: [
      "M Abedin is a Senior Lecturer in FinTech with the School of Management, Swansea University, UK. Earlier, he served as a Senior Lecturer in FinTech with Teesside University, UK. He possesses advanced analytical skills spanning both quantitative and qualitative research paradigms.",
      "As an experienced data analyst and project evaluator, Abedin specializes deeply in FinTech ecosystems, data mining frameworks, and big data analytics. He remains actively engaged in cross-disciplinary research activities, international project dissemination, and global guest lecturing.",
      "Abedin has published more than 200 SSCI and ABS-listed research papers across top-tier peer-reviewed journals. His contributions appear frequently in the European Journal of Operational Research, IEEE Transactions on Industrial Informatics, Annals of Operations Research, International Journal of Production Research, and International Review of Financial Analysis, among others.",
      "He serves as an Associate Editor for the International Review of Economics and Finance, Journal of Global Information Management, and Kybernetes, alongside guest editor appointments at Decision Support Systems and Technological Forecasting & Social Change.",
    ],
  },
  {
    name: "Petr Hajek",
    title: "Professor",
    institution: "Science and Research Centre, University of Pardubice",
    image: "/photo2.jpg",
    tags: ["Machine Learning", "Economic Modelling", "System Engineering"],
    metrics: [
      { label: "Books Authored", value: "3 Volumes" },
      { label: "Articles", value: "90+ Peer-Reviewed" },
      { label: "Conference Laurels", value: "6 Best Paper Awards" },
    ],
    bio: [
      "Petr Hajek received his M.S. degree in economic policy from the University of Pardubice in 2003, followed by a Ph.D. degree in system engineering and informatics in 2006. Since 2020, he has operated as a tenured Professor with the Science and Research Centre at the University of Pardubice.",
      "His core research vertical sits at the intersection of advanced machine learning architectures and predictive economic modelling. Over his career, he has authored three specialized textbooks and over 90 scientific articles mapping complex systemic behaviors.",
      "Dr. Hajek currently stands as an Associate Editor across four distinct scientific journals. In recognition of his foundational contributions to his institution's research depth, he was the recipient of the Rector Award for Scientific Excellence in both 2018 and 2019, alongside earning six Best Paper Awards at prestigious international scientific conferences.",
    ],
  },
];

const EditorCard = ({ editor, index }) => {
  const isEven = index % 2 === 0;

  return (
    <MotionDiv
      y={40}
      delay={index * 0.15}
      className="grid dark:text-white lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-base-300 last:border-none last:pb-0"
    >
      {/* Left Column: Visuals & Highlights */}
      <div className={`lg:col-span-5 flex dark:text-white flex-col gap-6 ${!isEven ? "lg:order-last" : ""}`}>
        <div className="relative dark:text-white group w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-base-300 shadow-xl bg-base-200 aspect-[4/5]">
          <img
            src={editor.image}
            alt={editor.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto lg:mx-0">
          {editor.metrics.map((metric, i) => (
            <div
              key={i}
              className="rounded-2xl border border-base-300 bg-base-200/50 backdrop-blur-sm p-4 flex gap-3 items-start hover:border-primary/30 transition-colors"
            >
              <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <FiAward className="text-lg" />
              </div>
              <div>
                <p className="uppercase text-[10px] font-bold text-base-content/50 tracking-wider mb-0.5">
                  {metric.label}
                </p>
                <p className="font-extrabold text-sm md:text-base text-base-content/90 leading-tight">
                  {metric.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Narrative Biography */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <h3 className="text-2xl md:text-4xl font-black text-base-content tracking-tight mb-2">
            {editor.name}
          </h3>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm mb-3">
            <FiLayers className="text-md" />
            <span>{editor.title}</span>
          </div>
          <MotionP className="text-base-content/60 font-medium md:text-lg">
            {editor.institution}
          </MotionP>
        </div>

        {/* Specialized Domain Tags */}
        <div className="flex flex-wrap gap-2">
          {editor.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full bg-base-200 border border-base-300/80 text-xs font-semibold tracking-wide text-base-content/80 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Biography Block */}
        <div className="space-y-4 pt-4 border-t border-base-200">
          {editor.bio.map((paragraph, i) => (
            <div key={i} className="flex gap-4 items-start group">
              <FiBookOpen className="text-primary/40 mt-1.5 flex-shrink-0 text-lg transition-colors group-hover:text-primary" />
              <p className="leading-relaxed text-base-content/80 text-justify text-sm md:text-base">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

const EditorsBio = () => {
  return (
    <section className="bg-base-100 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <MotionDiv className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-base-300 bg-base-200/60 shadow-sm mb-4">
            <FiGlobe className="text-primary animate-pulse" />
            <span className="uppercase text-xs tracking-[0.25em] font-bold text-base-content/80">
              Editorial Leadership
            </span>
          </MotionDiv>

          <MotionH2
            text="Editors Biography"
            className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-b from-base-content to-base-content/80 bg-clip-text"
          />
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6 shadow-sm" />
        </div>

        {/* Profiles Iteration */}
        <div className="space-y-24 lg:space-y-32">
          {editorsData.map((editor, index) => (
            <EditorCard key={editor.name} editor={editor} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default EditorsBio;