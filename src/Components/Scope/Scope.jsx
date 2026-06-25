
import { 
  FiCompass, 
  FiTrendingUp, 
  FiEye, 
  FiShield, 
  FiCpu, 
  FiUsers, 
  FiAward 
} from "react-icons/fi";
import { MotionH2 ,MotionDiv,MotionP} from "../../utils/MotionElements";

const Scope = () => {
  // Target audience metrics & list
  const audiences = [
    { role: "Academicians & Researchers", desc: "Foundational theory and methodology bridging AI with business frameworks." },
    { role: "Practitioners & Data Scientists", desc: "Practical optimization models and machine learning implementation tactics." },
    { role: "Financial Managers & Heads", desc: "Risk assessment paradigms and automated strategic planning insights." },
    { role: "Government & Policymakers", desc: "Governance structures regarding ethical and transparent AI guidelines." },
  ];

  return (
    <section className="bg-base-100 text-base-content py-10 px-4 mt-8 border-t border-base-200 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="badge badge-secondary badge-outline font-semibold tracking-widest gap-1.5 px-4 py-3 text-xs uppercase">
            <FiCompass className="animate-spin-slow" /> Book Research Scope
          </div>
          <MotionH2 
            text="Shaping the Future of Business Intelligence"
            className="text-md md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent !text-center"
          />
          <MotionP className="text-base-content/60 text-base sm:text-lg max-w-2xl mx-auto !text-center">
            Exploring the methodological collaboration of Explainable Artificial Intelligence (XAI) and modern corporate decision-making frameworks.
          </MotionP>
        </div>

        {/* ================= PILLAR 1: THE CORE MISSION (BENTO CARD) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <MotionDiv 
            y={50}
            className="lg:col-span-7 bg-base-200 border border-base-300 p-8 sm:p-10 rounded-3xl flex flex-col justify-center space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-md md:text-xl font-extrabold flex items-center gap-2 tracking-tight">
              <FiTrendingUp className="text-secondary" /> Effective Optimization & Strategy
            </h3>
            <p className="text-base-content/70 leading-relaxed text-sm sm:text-base">
              The proposed book offers significant perspectives on the effective utilization and implementation of artificial intelligence (AI) in the field of business analytics. By processing vast volumes of data into valuable insights, this work focuses heavily on identifying trends, discovering underlying hidden patterns, and uncovering critical correlations to radically enhance the quality of executive decision-making.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="badge badge-sm bg-base-100 border border-base-300 p-3 font-semibold text-xs">Quantitative Analysis</span>
              <span className="badge badge-sm bg-base-100 border border-base-300 p-3 font-semibold text-xs">Statistical Modeling</span>
              <span className="badge badge-sm bg-base-100 border border-base-300 p-3 font-semibold text-xs">Pattern Recognition</span>
            </div>
          </MotionDiv>

          {/* XAI Highlight Block */}
          <MotionDiv 
            y={50} 
            delay={0.15}
            className="lg:col-span-5 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-transparent border border-primary/20 p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <FiShield className="w-6 h-6" />
              </div>
              <h3 className="text-md md:text-xl font-black tracking-tight text-base-content">
                The Trust Imperative: Explainable AI (XAI)
              </h3>
              <p className="text-base-content/80 text-sm sm:text-base leading-relaxed">
                Explainable Artificial Intelligence (XAI) is essential for enhancing model explainability and transparency. This book deeply analyzes how complex algorithms make predictions, transforming black-box operations into trustworthy corporate assets.
              </p>
            </div>
            <div className="border-t border-base-300/60 pt-4 mt-6 text-xs font-bold text-primary tracking-wider uppercase">
              🔒 Safety • Interpretability • Transparency
            </div>
          </MotionDiv>
        </div>

        {/* ================= PILLAR 2: THE REVOLUTION SPLIT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-base-200/50 p-4 sm:p-8 rounded-3xl border border-base-200">
          <MotionDiv className="space-y-4 p-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-error/80">The Modern Dilemma</h4>
            <h3 className="text-md md:text-xl font-bold tracking-tight">Conventional Limitations</h3>
            <p className="text-sm text-base-content/60 leading-relaxed">
              In this modern data-driven era, the volume, scatteredness, and complexity of available data have surged exponentially. This rapid transformation has significantly diminished the performance, speed, and real-world efficiency of conventional analytical frameworks.
            </p>
          </MotionDiv>

          <MotionDiv className="space-y-4 p-4 bg-base-100 border border-base-300 rounded-2xl shadow-inner relative group">
            <div className="absolute -top-3 -right-3 bg-success text-success-content text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md font-bold shadow-md">
              Evolutionary
            </div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-success">The Systemic Solution</h4>
            <h3 className="text-md md:text-xl font-bold tracking-tight flex items-center gap-2">
              <FiCpu className="text-success animate-pulse" /> AI-Driven Interpellation
            </h3>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Machine learning and deep learning algorithms will revolutionize data interpretation. By simulating human-like processing intelligences to continuously adapt and automate, these techniques minimize human errors while maximizing processing capability.
            </p>
          </MotionDiv>
        </div>

        {/* ================= PILLAR 3: TARGET AUDIENCES ================= */}
        <div className="space-y-12">
          <div className="text-center md:text-left space-y-2 max-w-xl">
            <h3 className="text-md md:text-xl font-extrabold tracking-tight flex items-center justify-center md:justify-start gap-2">
              <FiUsers className="text-primary" /> Target Beneficiaries & Impact
            </h3>
            <p className="text-sm text-base-content/60">
              This publication scales across diverse global stakeholders, offering tangible foundational insights for high-intensive data ecosystems.
            </p>
          </div>

          {/* Interactive Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((aud, index) => (
              <MotionDiv
                key={index}
                y={40}
                delay={index * 0.1}
                className="bg-base-200 border border-base-300 hover:border-primary/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-base-100 flex items-center justify-center border border-base-300 text-base-content/70 group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300 text-xs font-bold shadow-sm">
                    0{index + 1}
                  </div>
                  <h4 className="text-base font-bold text-base-content tracking-tight group-hover:text-primary transition-colors">
                    {aud.role}
                  </h4>
                  <p className="text-xs text-base-content/60 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 text-[11px] font-bold text-secondary opacity-0 group-hover:opacity-100 transition-opacity pt-4 uppercase tracking-wider">
                  <FiAward /> Global Value
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Scope;