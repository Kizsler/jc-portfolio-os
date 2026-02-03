# JC Portfolio OS

**Interactive Desktop Portfolio with Retro DOS Emulation**

A creative portfolio website designed as a fully-functional desktop operating system. Features a retro-inspired interface with window management, embedded applications, and playable DOS games via js-dos emulator.

![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.6-3178C6?logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-6-FF0050)
![js-dos](https://img.shields.io/badge/js--dos-7.3-green)

## Features

- **Desktop Environment** - Authentic OS-style interface with taskbar and icons
- **Window Management** - Draggable, resizable, minimizable windows
- **DOS Emulator** - Play classic DOS games in-browser via js-dos
- **Wordle Clone** - Built-in word puzzle game
- **Showcase Section** - Portfolio projects and skills display
- **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **Framework**: React 17 with TypeScript
- **Animations**: Framer Motion for smooth transitions
- **DOS Emulation**: js-dos (DOSBox in WebAssembly)
- **Routing**: React Router v6
- **Styling**: CSS with custom properties
- **Bundler**: Create React App

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Kizsler/jc-portfolio-os.git
cd jc-portfolio-os

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── os/              # Desktop, taskbar, window management
│   ├── applications/    # Individual app components
│   ├── dos/             # DOS emulator integration
│   ├── wordle/          # Wordle game clone
│   ├── showcase/        # Portfolio sections
│   └── general/         # Shared UI components
├── hooks/               # Custom React hooks
├── constants/           # App configuration
├── assets/              # Images, icons, sounds
└── App.tsx              # Root component
```

## Embedded Applications

| Application | Description |
|-------------|-------------|
| **DOS Games** | Classic games running via js-dos WebAssembly |
| **Wordle** | Word guessing game clone |
| **Showcase** | Portfolio projects viewer |
| **About** | Personal info and skills |

## Scripts

```bash
npm start    # Development server
npm build    # Production build
npm test     # Run tests
```

## Customization

### Adding New Applications

1. Create a component in `src/components/applications/`
2. Register in the window manager
3. Add icon to the desktop

### Theming

Modify CSS custom properties in `src/index.css` to change colors and styling.

## License

MIT
