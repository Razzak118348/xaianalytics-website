# 📊 xAI Analytics

> Next-generation, AI-driven analytics platform featuring high-end cinematic animations, performance-first data visualization, and an elite interactive UI/UX workflow.

Live Demo: [xaianalytics.web.app](https://xaianalytics.web.app/)

---

[![Deployment Status](https://img.shields.io/badge/Deployment-Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)](https://xaianalytics.web.app/)
[![Tech Stack](https://img.shields.io/badge/Stack-MERN_/_Firebase-007ACC?style=for-the-badge&logo=react&logoColor=61DAFB)](#-tech-stack)
[![UI Engine](https://img.shields.io/badge/UI_Engine-Tailwind_%2B_Framer_Motion-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)

## ⚡ Key Features

*   **High-End Fluid Animations:** Premium micro-interactions, layout morphs, and cinematic entrance transitions orchestrated seamlessly via Framer Motion and GSAP logic without sacrificing frame rates.
*   **Performance-First Visualization:** Interactive chart components engineered for sub-millisecond updates and layout adjustments across all browser engines.
*   **Adaptive Responsive Layouts:** Optimized breakpoints specifically tailored for pixel-perfect presentation across mobile viewports, tablets, and wide-screen desktop monitors.
*   **Production Architecture:** Organized code structure built around reusable atomic components, strict state scoping, and clean layout optimization principles.

---

## 🛠️ Tech Stack

### Frontend Core
*   **Framework:** React.js (Single Page Application architecture built for fluid routing)
*   **Styling Engine:** Tailwind CSS (Utility-first responsive framework with precise config tokens)
*   **Animation Suite:** Framer Motion & GSAP (Performance-optimized layout animations and complex timelines)
*   **Icons:** Lucide React / React Icons (Crisp, vector-pure iconography scaled for responsive viewports)

### Backend & Infrastructure
*   **Hosting/Cloud:** Firebase Tools (Edge delivery network for fast static loading)
*   **State Management:** Context API / Redux Toolkit (Optimized global data state hydration)
*   **Database/API Integration:** Structured handling for seamless asynchronous data pipelines

---

## 📂 Project Structure

```text
xaianalytics/
├── public/                 # Static assets, vector icons, and favicon variations
├── src/
│   ├── assets/             # Brand logos, heavy illustrations, and background media
│   ├── components/         # Reusable structural components (Buttons, Input, Grid wrappers)
│   │   ├── common/         # Globally shared atomic elements
│   │
│   |---utils/
|   |---Routes/
│   ├── hooks/              # Custom React hooks managing responsive data operations
│   ├── pages/              # Main functional view entry points
│   ├── utils/              # Animation configuration presets and math wrappers
│   ├── App.jsx             # Root core shell and global layout setup
│   └── main.jsx            # Application mount point with strict engine monitoring
├── tailwind.config.js      # Advanced theme breakpoints, custom scales, and utility logic
├── firebase.json           # Cloud deployment, routing configurations, and security rules
└── package.json            # Module orchestration and build pipeline commands


## Local installtion and setup
 ### Clone the repository
    ```git clone [\[https://github.com/yourusername/xaianalytics.git\](https://github.com/yourusername/xaianalytics.git)](https://github.com/Razzak118348/xaianalytics-website.git)
      cd xaianalytics

 ### Install
     ```npm install
 ### Run
     ```npm run dev