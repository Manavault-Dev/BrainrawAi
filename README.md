# 🧠 Brainrow

> **AI-powered whiteboard that turns your ideas into synchronized drawings and voice explanations**

---

## 📋 Overview

**Brainraw** is an intelligent visual communication tool that transforms simple text prompts into rich, animated storyboards with synchronized AI voice narration. Perfect for explaining complex concepts, creating engaging presentations, or visualizing ideas instantly.

### Key Features

- 🎨 **AI Storyboard Generation** - Transform any prompt into a multi-step visual storyboard
- 🎤 **Synchronized Voice Narration** - AI-generated explanations that sync with canvas animations
- 🖌️ **Interactive Canvas** - Real-time drawing animations with pen, shapes, text, and arrows
- 🔗 **Shareable Links** - Generate instant links to share your storyboards
- 📱 **Responsive Design** - Works seamlessly across devices

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React** - UI library

### Backend
- **Node.js** - Runtime environment
- **Express** - Web server framework
- **OpenAI GPT-4o** - AI storyboard generation
- **TypeScript** - Type-safe APIs

### Infrastructure
- **Turborepo** - Monorepo build system
- **npm workspaces** - Package management
- **Firebase** (future) - User authentication & storage

---

## 📁 Architecture

```
brainrow/
├── apps/
│   ├── web/              # Next.js frontend application
│   │   ├── app/          # App router pages & layouts
│   │   ├── components/   # React components
│   │   └── public/       # Static assets
│   │
│   └── backend/          # Express backend API
│       ├── src/
│       │   ├── routes/   # API route handlers
│       │   └── services/ # Business logic & OpenAI integration
│       └── dist/         # Compiled TypeScript output
│
└── packages/
    └── types/            # Shared TypeScript types
        └── index.ts      # Storyboard, DrawCommand types
```

### Monorepo Structure

- **`apps/web`** - Next.js frontend with Tailwind CSS
- **`apps/backend`** - Express server with OpenAI integration
- **`packages/types`** - Shared TypeScript definitions
- **Turborepo** - Manages build pipeline and caching

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20 or higher
- **npm** v10 or higher
- **OpenAI API key** ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manavault-Dev/BrainrawAi.git
   cd BrainrawAi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create `apps/backend/.env`:
   ```env
   PORT=4000
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This starts both applications:
   - 🌐 **Frontend**: http://localhost:3000
   - 🔧 **Backend**: http://localhost:4000

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all apps in development mode |
| `npm run build` | Build all apps for production |
| `npm run lint` | Lint all workspace packages |
| `npm run format` | Format code with Prettier |

---

## 📚 Documentation

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guide for contributing to Brainrow
- **[ROADMAP.md](./ROADMAP.md)** - Product roadmap and future plans

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:

- Setting up your development environment
- Our coding standards and conventions
- Branch strategy and pull request process
- Code of conduct

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 👥 Built by Manavault

**Brainrow** is part of the **Manavault** AI products ecosystem — building the future of intelligent tools and user experiences.

---

## 🌟 Show Your Support

Give us a ⭐ on [GitHub](https://github.com/Manavault-Dev/BrainrawAi) if you find Brainrow helpful!

---

*Made with ❤️ by the Manavault team*

