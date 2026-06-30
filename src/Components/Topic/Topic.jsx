import React from 'react';
import { MotionDiv } from '../../utils/MotionElements';
const Topic = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title:
                  "Deep Learning Driven Predictive Modeling Techniques for Forecasting Business Trends",
                tag: "Predictive AI",
              },
              {
                title:
                  "Explainable AI in Business Analytics: Techniques for Enhancing Model Interpretability",
                tag: "XAI Interpretability",
              },
              {
                title:
                  "Handling Unstructured Data in Business Analytics using Artificial Intelligence",
                tag: "Unstructured Data",
              },
              {
                title:
                  "Overcoming Data Overload in Real-Time Business Analytics Using AI and Machine Learning",
                tag: "Real-Time ML",
              },
              {
                title:
                  "Integrating AI and Big Data for Proactive Business Decision-Making",
                tag: "Big Data Strategy",
              },
              {
                title:
                  "AI-Driven Anomaly Detection in Business Data using Machine Learning and Deep Learning",
                tag: "Anomaly Detection",
              },
              {
                title:
                  "Advance AI Methods for Optimizing Business Processes in Business Analytics",
                tag: "Process Optimization",
              },
              {
                title:
                  "Enhancing Data Quality in Business Analytics with AI-Powered Data Processing and Model Building Techniques",
                tag: "Data Quality",
              },
              {
                title:
                  "Scalable Machine Learning Solutions for Large-Scale Business Data Analysis",
                tag: "Scalable ML",
              },
              {
                title:
                  "AI in Customer Behavior Analysis: Leveraging Deep Learning for Personalized Marketing",
                tag: "Customer Insights",
              },
              {
                title:
                  "Explainability in Predictive Business Analytics: Balancing Accuracy and Interpretability",
                tag: "XAI Tradeoffs",
              },
              {
                title:
                  "Future Directions in AI-Driven Business Analytics: Challenges and Opportunities",
                tag: "Future Trends",
              },
              {
                title:
                  "AI-Enhanced Decision Support Systems for Business Strategy Development",
                tag: "Decision Systems",
              },
              {
                title:
                  "Ethical Considerations and Bias Mitigation in AI-Driven Business Analytics",
                tag: "Ethics & Bias",
              },
              {
                title:
                  "Real-Time Sentiment Analysis in Business: Applications of AI in Market Sentiment Prediction",
                tag: "Sentiment Analysis",
              },
              {
                title:
                  "AI-Driven Optimization of Supply Chain Management in Modern Business Environments",
                tag: "Supply Chain",
              },
            ].map((topic, index) => {
              // Automatically calculate formatted counts (e.g., 01, 02... 16)
              const displayIndex = index + 1 < 10 ? `0${index + 1}` : index + 1;

              return (
                <MotionDiv
                  key={index}
                  className="group relative bg-base-200 border border-base-300 hover:border-primary/40 p-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start gap-4"
                >
                  {/* Visual Indicator Mesh */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-full pointer-events-none group-hover:bg-primary/10 transition-all duration-300" />

                  <div className="space-y-3 w-full">
                    {/* Header inside the card */}
                    <div className="flex justify-between items-center w-full">
                      <span className="text-xs font-mono font-bold text-base-content/30 group-hover:text-primary transition-colors">
                        {displayIndex}
                      </span>
                      <span className="badge badge-sm bg-base-100 border border-base-300 text-base-content/70 font-semibold px-2.5 py-2 text-[10px] uppercase tracking-wider whitespace-nowrap">
                        {topic.tag}
                      </span>
                    </div>

                    {/* Topic Title */}
                    <h3 className="text-base font-bold text-base-content leading-snug tracking-tight group-hover:text-primary transition-colors pr-2">
                      {topic.title}
                    </h3>
                  </div>

                  {/* Bottom context placeholder line to anchor the design */}
                  <div className="w-8 h-[2px] bg-base-300 group-hover:w-16 group-hover:bg-primary transition-all duration-300 mt-2" />
                </MotionDiv>
              );
            })}
          </div>
    );
};

export default Topic;