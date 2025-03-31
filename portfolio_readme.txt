Here's a diagram of the languages and frameworks used in your portfolio:

┌─────────────────────────────────────────┐
│           Portfolio Tech Stack          │
└───────────────┬─────────────────────────┘
                │
    ┌───────────┴───────────┐
    │                       │
┌───▼───┐               ┌───▼───┐
│Frontend│               │ Styling│
└───┬───┘               └───┬───┘
    │                       │
    ├─ TypeScript           ├─ Tailwind CSS
    ├─ React.js             │
    ├─ React Router         │
    └─ Vite (Build tool)    │
                            │
┌───────────────┐           │
│   UI Components│◄─────────┘
└───────┬───────┘
        │
        ├─ Shadcn/UI
        ├─ Lucide React (Icons)
        └─ Recharts (for charts)
Application Structure Flowchart
┌─────────────────────────────────────────────────┐
│                      App.tsx                     │
│  (Main entry point with QueryClient, Routing)    │
└───────────────────────┬─────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│                   Index.tsx                      │
│         (Main container for components)          │
└───────┬───────┬───────┬───────┬───────┬─────────┘
        │       │       │       │       │
        ▼       ▼       ▼       ▼       ▼
  ┌─────────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────────┐
  │ Navbar  │ │Hero │ │About│ │Skills│ │Experience│
  └─────────┘ └─────┘ └─────┘ └─────┘ └─────────┘
        │                                 ▲
        │            ┌───────────────────┘
        │            │ (View My Work button links here)
        ▼            │
  ┌──────────┐ ┌──────────┐ ┌───────────┐ ┌─────────┐
  │ Projects │ │ LeetCode │ │Achievements│ │ Contact │ ◄─┐
  └──────────┘ └──────────┘ └───────────┘ └─────────┘   │
                                              ▲          │
                                              │          │
                                              └──────────┘
                                    (Contact Me button links here)
In this structure:

The application starts with App.tsx as the entry point
It uses React Router for navigation
The main page is rendered through Index.tsx
Each section (Navbar, Hero, About, etc.) is a separate component
The "View My Work" button in the Hero section scrolls to the Experience section
The "Contact Me" button scrolls to the Contact section
All components are styled with Tailwind CSS with Shadcn/UI component library