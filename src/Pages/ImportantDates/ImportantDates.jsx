// import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";
// import { FiBookOpen, FiCalendar, FiExternalLink } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const ImportantDates = () => {
//     return (
//         <div>
// <MotionDiv
//               y={30}
//               delay={0.2}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full bg-base-100 p-4 rounded-2xl border border-base-300/60"
//             >
//               <div className="flex items-center gap-3 p-2">
//                 <div className="p-2.5 rounded-xl bg-error/10 text-error">
//                   <FiCalendar className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-base-content/50 uppercase font-bold tracking-wider">
//                     Submission Deadline
//                   </p>
//                   <p className="text-sm sm:text-base font-bold text-base-content">
//                     15 December 2026
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-base-300/60 pt-4 sm:pt-2 sm:pl-6">
//                 <div className="p-2.5 rounded-xl bg-success/10 text-success">
//                   <FiCalendar className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-base-content/50 uppercase font-bold tracking-wider">
//                     Publication Deadline
//                   </p>
//                   <p className="text-sm sm:text-base font-bold text-base-content">
//                     15 March 2027
//                   </p>
//                 </div>
//               </div>
//             </MotionDiv>
//         </div>
//     );
// };

// export default ImportantDates;

import React from "react";
import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";
import {
  FiCalendar,
  FiFileText,
  FiCheckCircle,
  FiEdit3,
  FiBook,
  FiClock,
  FiSend,
  FiExternalLink
} from "react-icons/fi";
import { Link } from "react-router-dom";

const ImportantDates = () => {
  // Complete publishing roadmap based on standard academic timelines
  const timelineEvents = [
    {
      phase: "Phase 01",
      title: "Abstract Proposal Deadline",
      date: "August 15, 2026",
      desc: "Submit a 300-500 word abstract outlining the chapter's objectives, methodology, and relevance to XAI in Business Analytics.",
      icon: <FiFileText className="w-5 h-5" />,
      color: "text-primary",
      bg: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      phase: "Phase 02",
      title: "Abstract Acceptance Notification",
      date: "August 30, 2026",
      desc: "Authors will be notified of the editorial board's decision regarding their proposed abstracts.",
      icon: <FiCheckCircle className="w-5 h-5" />,
      color: "text-success",
      bg: "bg-success/10",
      borderColor: "border-success/30"
    },
    {
      phase: "Phase 03",
      title: "Full Chapter Submission",
      date: "October 15, 2026",
      desc: "Submission of the complete, formatted chapter adhering to the provided publisher guidelines.",
      icon: <FiSend className="w-5 h-5" />,
      color: "text-info",
      bg: "bg-info/10",
      borderColor: "border-info/30"
    },
    {
      phase: "Phase 04",
      title: "Review Results & Feedback",
      date: "November 15, 2026",
      desc: "Peer-review feedback returned to authors with requirements for minor or major revisions.",
      icon: <FiEdit3 className="w-5 h-5" />,
      color: "text-warning",
      bg: "bg-warning/10",
      borderColor: "border-warning/30"
    },
    {
      phase: "Phase 05",
      title: "Revised Chapter (Final Submission)",
      date: "December 15, 2026",
      desc: "Deadline for submitting the final, polished manuscript incorporating all reviewer corrections.",
      icon: <FiCalendar className="w-5 h-5" />,
      color: "text-error",
      bg: "bg-error/10",
      borderColor: "border-error/30"
    },
    {
      phase: "Phase 06",
      title: "Estimated Publication Date",
      date: "March 15, 2027",
      desc: "The final book is officially published and indexed across academic repositories.",
      icon: <FiBook className="w-5 h-5" />,
      color: "text-secondary",
      bg: "bg-secondary/10",
      borderColor: "border-secondary/30"
    }
  ];

  return (
    <div className="bg-base-100 pt-16 pb-6 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <MotionDiv y={20} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-200 border border-base-300 text-xs font-bold uppercase tracking-widest text-base-content/70">
            <FiClock className="text-primary" /> Roadmap
          </MotionDiv>
          <MotionH2
            text="Important Dates"
            className="text-xl lg:text-5xl font-black tracking-tight"
          />
          <MotionP
            y={20} delay={0.1}
            className="text-base-content/60 text-sm sm:text-base leading-relaxed"
          >
            The tentative schedule of the book publication is as follows. Please ensure all submissions align strictly with these deadlines to guarantee inclusion in the final manuscript.
          </MotionP>
        </div>

        {/* ================= QUICK SUMMARY HIGHLIGHT ================= */}
        <MotionDiv
          y={30}
          delay={0.2}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full bg-base-200/50 p-4 rounded-2xl border border-base-300 shadow-sm max-w-3xl mx-auto"
        >
          {/* Submission Highlight */}
          <div className="flex items-center gap-4 p-3 hover:bg-base-100 rounded-xl transition-colors">
            <div className="p-3 rounded-xl bg-error/10 text-error shadow-inner border border-error/20">
              <FiCalendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-base-content tracking-tight">
                Final Submission
              </p>
              <p className="text-base sm:text-lg font-bold text-base-content tracking-tight">
                15 December 2026
              </p>
            </div>
          </div>

          {/* Publication Highlight */}
          <div className="flex items-center gap-4 p-3 border-t sm:border-t-0 sm:border-l border-base-300 sm:pl-8 hover:bg-base-100 rounded-xl transition-colors">
            <div className="p-3 rounded-xl bg-success/10 text-success shadow-inner border border-success/20">
              <FiBook className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-base-content tracking-tight">
                Publication Target
              </p>
              <p className="text-base sm:text-lg font-bold text-base-content tracking-tight">
                15 March 2027
              </p>
            </div>
          </div>
        </MotionDiv>
<div className="w-full flex justify-center">
              <MotionDiv y={30} delay={0.3} className="w-full sm:w-auto pt-2">
                <Link
                  to="/"
                  href="#submit-link" // Replace with your real submission URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-md sm:btn-md px-8 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  <span className="text-white">Click Here to Submit</span>
                  <FiExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </MotionDiv>
            </div>
      </div>
    </div>
  );
};

export default ImportantDates;