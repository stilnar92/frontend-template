# React Feature Sliced Design Template

A modern React application template built with Feature Sliced Design architecture, incorporating best practices and popular tools for React development.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (New York style)
- **Architecture:** Feature Sliced Design
- **Code Quality:** ESLint, Prettier
- **Type Checking:** TypeScript

## Features

- ⚡️ Fast development and build times with Vite
- 🎨 Modern UI with shadcn/ui components
- 🎯 Type-safe development with TypeScript
- 📐 Feature Sliced Design architecture
- 🎭 Consistent code style with ESLint and Prettier
- 📱 Responsive design with Tailwind CSS
- 🔍 Import aliases for clean imports (@/*)

## Project Structure

The project follows Feature Sliced Design methodology with the following layers:

```
src/
├── app/          # Application initialization layer
│   ├── providers/    # Application providers
│   ├── styles/      # Global styles
│   └── App.tsx     # Entry point component
├── processes/    # Complex business processes
├── pages/        # Application pages
├── widgets/      # Complex UI blocks
├── features/     # User interactions
├── entities/     # Business entities
└── shared/       # Reusable infrastructure
    ├── api/         # API interfaces
    ├── config/      # Configuration
    ├── lib/         # Utility libraries
    └── ui/          # UI components
        └── components/  # shadcn/ui components
```

## Available Components

The project comes with pre-configured shadcn/ui components:

- **Button**: Primary and secondary variants
- **Card**: With header, content, and footer sections
- **Input**: Text input with styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## Adding New Components

To add more shadcn/ui components, use the following command:

```bash
npx shadcn@latest add [component-name]
```

Available components can be found in the [shadcn/ui documentation](https://ui.shadcn.com/docs/components).

## Development Guidelines

1. Follow Feature Sliced Design principles when organizing code
2. Use TypeScript for type safety
3. Follow ESLint and Prettier rules
4. Write meaningful commit messages
5. Keep components small and focused
6. Use Tailwind CSS for styling
7. Utilize shadcn/ui components when possible
8. Use import aliases (@/*) for cleaner imports

## Project Configuration

- **TypeScript**: Configured with strict mode and path aliases
- **Tailwind**: Set up with shadcn/ui theme and custom configurations
- **ESLint**: Configured with TypeScript and React rules
- **Prettier**: Set up with consistent code formatting rules
- **Vite**: Configured with path aliases and React support

## License

MIT
