# PrompTedSite Template 20 — 3D Interactive Attachment Styles Sanctuary

An interactive 3D digital sanctuary engineered with **React**, **TypeScript**, and **Three.js WebGPU / WebGL2** exploring emotional attachment styles, psychological safety, and relational holding spaces.

---

## Visual Architecture & Features

- **3D Spatial Holding Environment**:
  - High-fidelity interior room model rendered with real-time soft shadows, gobo window projection, and leaf silhouettes.
  - Interactive narrative archetypes (*Carl Fredricksen*, *Russell*, *Dug* from the movie UP).
  - Miniature house and desktop craft objects with dynamic camera focus tweens.
  - Interactive attachment styles flashcards with 3D flip physics.
  - Interactive whiteboard/drawing desk with real-time UV canvas raycasting.
  - Parametric animated butterflies with procedural wing-flap vertex animation.
- **Atmospheric Day/Night Cycle**:
  - Smooth 1.5s ease transitions switching between Day and Night lighting, contrast post-processing, and 36 high-resolution texture maps.
  - Dynamic ambient acoustic level adjustment.
- **Audio Architecture**:
  - Ambient spatial acoustic soundtrack (`Married_Life.mp3`) managed via Howler.js with seamless mute/enter-with-sound options.
- **100% Zero External Dependencies**:
  - All 44 Google Fonts localized into `.woff2` files.
  - All 3D assets (`.glb`), audio (`.mp3`), textures (`.webp`, `.ktx2`), and Draco WASM decoders hosted 100% locally.
- **Responsive & Mobile Ready**:
  - Full viewport adaptation for mobile screens (iOS & Android) with touch controls and optimized pixel ratios.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 8 |
| **3D Engine** | Three.js (WebGPU backend with WebGL2 fallback) |
| **Animation Physics** | GSAP (GreenSock Animation Platform) |
| **Audio Engine** | Howler.js |
| **Geometry Decoding** | Google Draco WASM (`draco_decoder.wasm`) |
| **Styling** | Vanilla CSS with exact preserved cascade (`src/styles/globals.css`) |

---

## Project Structure

```
promptedsite-template-20/
├── public/
│   ├── audio/music/         # Ambient soundtrack (Married_Life.mp3)
│   ├── basis/               # Basis transcoder WASM & JS
│   ├── draco/               # Draco 3D geometry decoder WASM & JS
│   ├── fonts/               # 44 localized typography files (woff2)
│   ├── media/               # Favicons, webmanifest, OpenGraph imagery
│   ├── models/              # Room.glb, Hitboxes.glb
│   └── textures/            # Day & night texture maps (webp/ktx2)
├── src/
│   ├── components/
│   │   ├── BackButton.tsx         # Reset camera view button
│   │   ├── CanvasExperience.tsx   # WebGL canvas wrapper with lifecycle cleanup
│   │   ├── Preloader.tsx          # Interactive intro with percent counter
│   │   └── TopControls.tsx        # Day/Night toggle & Info modal triggers
│   ├── engine/
│   │   ├── experienceEngine.js    # Modular Three.js WebGPU / WebGL2 engine
│   │   └── experienceEngine.d.ts  # TypeScript declarations
│   ├── styles/
│   │   └── globals.css            # 100% localized design system
│   ├── App.tsx                    # Root orchestrator
│   └── main.tsx                   # React root entry
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/hiiD4vd/promptedsite-template-20.git
cd promptedsite-template-20

# Install dependencies
npm install
```

### Development

```bash
# Run local development server
npm run dev
```

Open `http://localhost:3001/` in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## License

MIT © PrompTedSite
