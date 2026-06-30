// import React from "react";
// import { MotionDiv, MotionH2,MotionP } from "../../utils/MotionElements";
// import {
//   FiAward,
//   FiGlobe,
//   FiLayers,
//   FiBookOpen,
// } from "react-icons/fi";

// const EditorsBio = () => {
//   const editors = [
//     {
//       name: "M Abedin",
//       title: "Senior Lecturer in FinTech",
//       institution: "School of Management, Swansea University, UK",
//       image: "/photo1.jpg",
//       tags: [
//         "FinTech",
//         "Big Data Analytics",
//         "Data Mining",
//         "200+ SSCI Papers",
//       ],
//       metrics: [
//         {
//           label: "Publications",
//           value: "200+ SSCI / ABS",
//         },
//         {
//           label: "Editorial Roles",
//           value: "Associate & Guest Editor",
//         },
//       ],
//       bio: [
//         "M Abedin is a Senior Lecturer in FinTech with the School of Management, Swansea University, UK. Earlier, he served as a Senior Lecturer in FinTech with Teesside University, UK. He possesses advanced analytical skills spanning both quantitative and qualitative research paradigms.",

//         "As an experienced data analyst and project evaluator, Abedin specializes deeply in FinTech ecosystems, data mining frameworks, and big data analytics. He remains actively engaged in cross-disciplinary research activities, international project dissemination, and global guest lecturing.",

//         "Abedin has published more than 200 SSCI and ABS-listed research papers across top-tier peer-reviewed journals. His contributions appear frequently in the European Journal of Operational Research, IEEE Transactions on Industrial Informatics, Annals of Operations Research, International Journal of Production Research, and International Review of Financial Analysis, among others.",

//         "He serves as an Associate Editor for the International Review of Economics and Finance, Journal of Global Information Management, and Kybernetes, alongside guest editor appointments at Decision Support Systems and Technological Forecasting & Social Change.",
//       ],
//     },
//     {
//       name: "Petr Hajek",
//       title: "Professor",
//       institution: "Science and Research Centre, University of Pardubice",
//       image: "/photo2.jpg",
//       tags: [
//         "Machine Learning",
//         "Economic Modelling",
//         "System Engineering",
//       ],
//       metrics: [
//         {
//           label: "Books Authored",
//           value: "3 Volumes",
//         },
//         {
//           label: "Articles",
//           value: "90+ Peer-Reviewed",
//         },
//         {
//           label: "Conference Laurels",
//           value: "6 Best Paper Awards",
//         },
//       ],
//       bio: [
//         "Petr Hajek received his M.S. degree in economic policy from the University of Pardubice in 2003, followed by a Ph.D. degree in system engineering and informatics in 2006. Since 2020, he has operated as a tenured Professor with the Science and Research Centre at the University of Pardubice.",

//         "His core research vertical sits at the intersection of advanced machine learning architectures and predictive economic modelling. Over his career, he has authored three specialized textbooks and over 90 scientific articles mapping complex systemic behaviors.",

//         "Dr. Hajek currently stands as an Associate Editor across four distinct scientific journals. In recognition of his foundational contributions to his institution's research depth, he was the recipient of the Rector Award for Scientific Excellence in both 2018 and 2019, alongside earning six Best Paper Awards at prestigious international scientific conferences.",
//       ],
//     },
//   ];

//   return (
//     <section className="bg-base-100 py-16 lg:py-24">
//       <div className="max-w-7xl mx-auto px-5">

//         {/* Header */}
//         <div className="text-center mb-16">

//           <MotionDiv
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-base-300 bg-base-200 mb-5"
//           >
//             <FiGlobe className="text-primary" />
//             <span className="uppercase text-xs tracking-[0.2em] font-semibold">
//               Editorial Board
//             </span>
//           </MotionDiv>

//           <MotionH2
//             text="Editors Biography"
//             className="text-3xl md:text-5xl font-black"
//           />

//           <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-5" />

//         </div>

//         <div className="space-y-20">

//           {editors.map((editor, index) => (

//             <MotionDiv
//               key={index}
//               y={40}
//               delay={index * 0.15}
//               className="grid lg:grid-cols-12 gap-10 items-start"
//             >

//               {/* Left */}
//               <div className="lg:col-span-4 flex flex-col items-center">

//                 <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-base-300 shadow-lg">

//                   <img
//                     src={editor.image}
//                     alt={editor.name}
//                     className="w-full h-96 md:h-auto object-cover"
//                   />

//                 </div>

//                 <div className="grid grid-cols-2 gap-3 w-full mt-2 md:mt-6 ">

//                   {editor.metrics.map((metric, i) => (

//                     <MotionDiv
//                       key={i}
//                       className="rounded-xl border border-base-300 bg-base-200 p-4 flex gap-3 items-start"
//                     >

//                       <FiAward className="text-primary mt-1 flex-shrink-0" />

//                       <div>

//                         <MotionP className="uppercase text-[11px] font-semibold text-base-content/50 tracking-wider">
//                           {metric.label}
//                         </MotionP>

//                         <p className="font-bold text-sm md:text-base ">
//                           {metric.value}
//                         </p>

//                       </div>

//                     </MotionDiv>

//                   ))}

//                 </div>

//               </div>

//               {/* Right */}

//               <MotionDiv className="lg:col-span-8">

//                 <h2 className="text-xl md:text-3xl font-black mb-2">
//                   {editor.name}
//                 </h2>

//                 <div className="flex items-center gap-2 text-primary font-semibold mb-2">

//                   <FiLayers />

//                   {editor.title}

//                 </div>

//                 <MotionP className="text-base-content/60 mb-6">
//                   {editor.institution}
//                 </MotionP>

//                 {/* Tags */}

//                 <div className="flex flex-wrap gap-2 mb-8">

//                   {editor.tags.map((tag, i) => (

//                     <span
//                       key={i}
//                       className="px-3 py-2 rounded-full bg-base-200 border border-base-300 text-xs font-semibold text-center"
//                     >
//                       {tag}
//                     </span>

//                   ))}

//                 </div>

//                 {/* Biography */}

//                 <MotionDiv className="space-y-5">

//                   {editor.bio.map((paragraph, i) => (

//                     <div
//                       key={i}
//                       className="flex gap-4 items-start"
//                     >

//                       <FiBookOpen className="text-primary mt-1 flex-shrink-0" />

//                       <p className="leading-8 text-base-content/75 text-justify">
//                         {paragraph}
//                       </p>

//                     </div>

//                   ))}

//                 </MotionDiv>

//               </MotionDiv>
// <hr  className="border-base-300 border-2 mt-2"/>
//             </MotionDiv>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default EditorsBio;


// import React from "react";
// import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";
// import {
//   FiAward,
//   FiGlobe,
//   FiLayers,
//   FiBookOpen,
//   FiUser,
// } from "react-icons/fi";

// const EditorsBio = () => {
//   const editors = [
//     {
//       name: "M Abedin",
//       title: "Senior Lecturer in FinTech",
//       institution: "School of Management, Swansea University, UK",
//       image: "/photo1.jpg",
//       tags: [
//         "FinTech",
//         "Big Data Analytics",
//         "Data Mining",
//         "200+ SSCI Papers",
//       ],
//       metrics: [
//         {
//           label: "Publications",
//           value: "200+ SSCI / ABS",
//         },
//         {
//           label: "Editorial Roles",
//           value: "Associate & Guest Editor",
//         },
//       ],
//       bio: [
//         "M Abedin is a Senior Lecturer in FinTech with the School of Management, Swansea University, UK. Earlier, he served as a Senior Lecturer in FinTech with Teesside University, UK. He possesses advanced analytical skills spanning both quantitative and qualitative research paradigms.",

//         "As an experienced data analyst and project evaluator, Abedin specializes deeply in FinTech ecosystems, data mining frameworks, and big data analytics. He remains actively engaged in cross-disciplinary research activities, international project dissemination, and global guest lecturing.",

//         "Abedin has published more than 200 SSCI and ABS-listed research papers across top-tier peer-reviewed journals. His contributions appear frequently in the European Journal of Operational Research, IEEE Transactions on Industrial Informatics, Annals of Operations Research, International Journal of Production Research, and International Review of Financial Analysis, among others.",

//         "He serves as an Associate Editor for the International Review of Economics and Finance, Journal of Global Information Management, and Kybernetes, alongside guest editor appointments at Decision Support Systems and Technological Forecasting & Social Change.",
//       ],
//     },

//     {
//       name: "Petr Hajek",
//       title: "Professor",
//       institution: "Science and Research Centre, University of Pardubice",
//       image: "/photo2.jpg",
//       tags: [
//         "Machine Learning",
//         "Economic Modelling",
//         "System Engineering",
//       ],
//       metrics: [
//         {
//           label: "Books",
//           value: "3 Volumes",
//         },
//         {
//           label: "Articles",
//           value: "90+",
//         },
//         {
//           label: "Awards",
//           value: "6 Best Papers",
//         },
//       ],
//       bio: [
//         "Petr Hajek received his M.S. degree in economic policy from the University of Pardubice in 2003, followed by a Ph.D. degree in system engineering and informatics in 2006. Since 2020, he has operated as a tenured Professor with the Science and Research Centre at the University of Pardubice.",

//         "His core research vertical sits at the intersection of advanced machine learning architectures and predictive economic modelling. Over his career, he has authored three specialized textbooks and over 90 scientific articles mapping complex systemic behaviors.",

//         "Dr. Hajek currently stands as an Associate Editor across four distinct scientific journals. In recognition of his foundational contributions to his institution's research depth, he was the recipient of the Rector Award for Scientific Excellence in both 2018 and 2019, alongside earning six Best Paper Awards at prestigious international scientific conferences.",
//       ],
//     },
//   ];

//   return (
//     <section className="bg-base-100 py-20 lg:py-28 dark:text-white">
//       <div className="max-w-7xl mx-auto px-5">

//         {/* Header */}

//         <div className="text-center max-w-3xl mx-auto mb-20">

//           <MotionDiv className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 mb-6">

//             <FiGlobe className="text-primary" />

//             <span className="uppercase tracking-[0.25em] text-xs font-bold">
//               Editorial Board
//             </span>

//           </MotionDiv>

//           <MotionH2
//             text="Editors Biography"
//             className="text-4xl md:text-5xl lg:text-6xl font-black"
//           />

//           <MotionP className="mt-6 text-base-content/70 leading-8">
//             Meet our internationally recognized editorial members who
//             contribute extensive academic expertise, innovative research, and
//             leadership across interdisciplinary scientific domains.
//           </MotionP>

//         </div>

//         <div className="space-y-28">

//           {editors.map((editor, index) => (

//             <MotionDiv
//               key={index}
//               delay={index * 0.2}
//               y={40}
//               className="relative"
//             >

//               <div className="grid lg:grid-cols-12 gap-14">

//                 {/* LEFT */}

//                 <div className="lg:col-span-4">

//                   <div className="sticky top-24">

//                     <div className="overflow-hidden rounded-3xl shadow-2xl border border-base-300">

//                       <img
//                         src={editor.image}
//                         alt={editor.name}
//                         className="w-full aspect-[4/5] object-cover transition duration-700 hover:scale-105"
//                       />

//                     </div>

//                     {/* Metrics */}

//                     <div className="grid gap-4 mt-8">

//                       {editor.metrics.map((metric, i) => (

//                         <MotionDiv
//                           key={i}
//                           className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-200 p-5 hover:border-primary hover:shadow-lg transition-all duration-300"
//                         >

//                           <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">

//                             <FiAward className="text-primary text-xl" />

//                           </div>

//                           <div>

//                             <p className="uppercase text-xs tracking-widest text-base-content/50 font-semibold">
//                               {metric.label}
//                             </p>

//                             <h3 className="font-bold text-lg">
//                               {metric.value}
//                             </h3>

//                           </div>

//                         </MotionDiv>

//                       ))}

//                     </div>

//                   </div>

//                 </div>

//                 {/* RIGHT */}

//                 <div className="lg:col-span-8">

//                   <div className="flex items-center gap-3 mb-3">

//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">

//                       <FiUser className="text-primary text-xl" />

//                     </div>

//                     <div>

//                       <h2 className="text-3xl md:text-4xl font-black">
//                         {editor.name}
//                       </h2>

//                       <div className="flex items-center gap-2 text-primary font-semibold mt-1">

//                         <FiLayers />

//                         {editor.title}

//                       </div>

//                     </div>

//                   </div>

//                   <MotionP className="text-lg text-base-content/60 mb-8">
//                     {editor.institution}
//                   </MotionP>

//                   {/* Tags */}

//                   <div className="flex flex-wrap gap-3 mb-10">

//                     {editor.tags.map((tag, i) => (

//                       <span
//                         key={i}
//                         className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-content transition-all duration-300 cursor-default"
//                       >
//                         {tag}
//                       </span>

//                     ))}

//                   </div>

//                   {/* Biography */}

//                   <div className="space-y-8">

//                     {editor.bio.map((paragraph, i) => (

//                       <MotionDiv
//                         key={i}
//                         className="flex gap-5"
//                       >

//                         <div className="mt-1">

//                           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">

//                             <FiBookOpen className="text-primary" />

//                           </div>

//                         </div>

//                         <p className="leading-8 text-justify text-base-content/75">
//                           {paragraph}
//                         </p>

//                       </MotionDiv>

//                     ))}

//                   </div>

//                 </div>

//               </div>

//               {index !== editors.length - 1 && (
//                 <div className="mt-24">
//                   <div className="h-px bg-gradient-to-r from-transparent via-base-300 to-transparent"></div>
//                 </div>
//               )}

//             </MotionDiv>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default EditorsBio;


import React from "react";
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