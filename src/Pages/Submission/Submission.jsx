import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";
import {
  FiUploadCloud,
  FiExternalLink,
  FiFileText,
  FiAlertTriangle,
  FiDollarSign,
  FiShield,
  FiLayers,
  FiDownload
} from "react-icons/fi";

const Submission = () => {
  // Key submission checkpoints for quick scannability
  const quickMetrics = [
    {
      title: "Submission Deadline",
      value: "15 July 2024",
      icon: <FiUploadCloud className="w-5 h-5 text-error" />,
      bg: "bg-error/10",
      border: "border-error/20"
    },
    {
      title: "Plagiarism Limit",
      value: "Less than 10%",
      caption: "Excluding references",
      icon: <FiAlertTriangle className="w-5 h-5 text-warning" />,
      bg: "bg-warning/10",
      border: "border-warning/20"
    },
    {
      title: "Chapter Length",
      value: "15 - 25 Pages",
      caption: "Springer Format",
      icon: <FiLayers className="w-5 h-5 text-primary" />,
      bg: "bg-primary/10",
      border: "border-primary/20"
    },
    {
      title: "Processing Fees",
      value: "USD $0 (Free)",
      caption: "No hidden charges",
      icon: <FiDollarSign className="w-5 h-5 text-success" />,
      bg: "bg-success/10",
      border: "border-success/20"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <MotionDiv y={20} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-200 border border-base-300 text-xs font-bold uppercase tracking-widest text-base-content/70">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Springer-Nature Publication
          </MotionDiv>
          <MotionH2
            text="Manuscript Submission"
            className="text-2xl lg:text-5xl font-black tracking-tight"
          />
          <MotionP
            y={20} delay={0.1}
            className=""
          >
            Authors are invited to submit their original, unpublished full book chapters. All accepted contributions will be published under an indexing workflow by <strong>Springer-Nature</strong>.
          </MotionP>
        </div>

        {/* ================= KEY CHECKPOINTS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickMetrics.map((item, idx) => (
            <MotionDiv
              key={idx}
              y={30}
              delay={0.05 * idx}
              className={`bg-base-200/40 border ${item.border} p-5 rounded-2xl flex flex-col justify-between gap-3 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-base-content/50 uppercase tracking-wider">{item.title}</span>
                <div className={`p-2 rounded-xl ${item.bg}`}>
                  {item.icon}
                </div>
              </div>
              <div>
                <p className="text-lg font-black text-base-content tracking-tight">{item.value}</p>
                {item.caption && <p className="text-xs text-base-content/50 mt-0.5">{item.caption}</p>}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* ================= DETAILED GUIDELINES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Block: Requirements & Formatting */}
          <MotionDiv
            y={40} delay={0.2}
            className="bg-base-100 border border-base-300 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 border-b border-base-200 pb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <FiFileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-base-content tracking-tight">Formatting & Style Rules</h3>
            </div>

            <p className="text-sm text-base-content/70 leading-relaxed">
              Chapters must be prepared using <strong>LaTeX</strong> or <strong>Microsoft Word</strong>, adhering strictly to the structured manuscript guidelines provided by the publisher.
            </p>

            <div className="bg-base-200/70 border border-base-300 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-base-content">Official Layout Template</p>
                <p className="text-xs text-base-content/50">Download the core Springer structure files</p>
              </div>
              <a
                href="#springer-template-url" // Replace with actual download or publisher guideline link
                className="btn btn-sm btn-outline border-base-300 hover:border-primary/40 text-xs font-bold gap-2 w-full sm:w-auto"
              >
                <FiDownload className="w-3.5 h-3.5" /> Springer Template
              </a>
            </div>

            <div className="alert alert-error/5 border border-error/20 rounded-xl items-start gap-3">
              <FiAlertTriangle className="text-error w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-base-content/80 leading-relaxed">
                <span className="font-bold text-error block mb-0.5">Strict Formatting Enforcement:</span>
                Manuscripts that do not follow the formatting rules will be rejected immediately without entering the peer-review pipeline.
              </div>
            </div>
          </MotionDiv>

          {/* Right Block: Content Integrity & Ethics */}
          <MotionDiv
            y={40} delay={0.3}
            className="bg-base-100 border border-base-300 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 border-b border-base-200 pb-4">
              <div className="p-2.5 rounded-xl bg-success/10 text-success">
                <FiShield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-base-content tracking-tight">Originality & Peer Review</h3>
            </div>

            <div className="space-y-4 text-sm text-base-content/70 leading-relaxed">
              <p>
                Chapters submitted for the book must be entirely original, must not be previously published, or currently under review anywhere else.
              </p>
              <p>
                All manuscripts are evaluated thoroughly through a rigorous <strong>double-blind peer review</strong> editorial process managed by the board.
              </p>
              <p>
                Prior to submission, manuscripts must be checked via licensed tools like <strong>Turnitin</strong> or <strong>iThenticate</strong>. The final calculated similarity index content should not exceed 10%.
              </p>
            </div>

            <div className="pt-2">
              <div className="badge badge-outline border-base-300 text-base-content/60 px-3 py-3 rounded-lg text-xs font-medium bg-base-200/30">
                NB: No submission or acceptance publication fees.
              </div>
            </div>
          </MotionDiv>

        </div>

        {/* ================= CALL TO ACTION (SUBMISSION GATE) ================= */}
        <MotionDiv
          y={30} delay={0.4}
          className="bg-base-200/50 border border-base-300 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-5"
        >
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-base-content tracking-tight">Electronic Paper Submission Portal</h4>
            <p className="text-xs sm:text-sm text-base-content/60 max-w-xl mx-auto">
              Prospective authors should upload their manuscripts electronically via the online processing engine managed below:
            </p>
          </div>

          <div className="flex justify-center w-full">
            <a
              href="https://easychair.org/conferences/?conf=mlteef2024"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-md px-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 w-full sm:w-fit"
            >
              <span className="text-white font-bold">Submit via EasyChair</span>
              <FiExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </MotionDiv>

      </div>
    </div>
  );
};

export default Submission;