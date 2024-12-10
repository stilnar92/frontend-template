# Frontend Template

A modern React application template built with Feature Sliced Design architecture, incorporating best practices and popular tools for React development.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + CSS Variables
- **UI Components:** shadcn/ui (New York style)
- **Form Handling:** React Hook Form + Zod
- **HTTP Client:** Axios
- **Architecture:** Feature Sliced Design
- **Code Quality:** ESLint, Prettier
- **Type Checking:** TypeScript
- **Package Manager:** npm

## Features

- ⚡️ Fast development and build times with Vite
- 🎨 Modern UI with shadcn/ui components
- 🎯 Type-safe development with TypeScript
- 📐 Feature Sliced Design architecture
- 🎭 Consistent code style with ESLint and Prettier
- 📱 Responsive design with Tailwind CSS
- 🔍 Import aliases for clean imports (@/*)
- 📝 Type-safe form handling with React Hook Form and Zod
- 🔒 Built-in form validation
- 🎁 Pre-configured components and utilities
- 🔌 API layer with Axios and interceptors
- 🎭 Mock API for development

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
│   └── auth/        # Authentication feature
│       └── ui/         # Auth UI components
├── entities/     # Business entities
└── shared/       # Reusable infrastructure
    ├── api/         # API interfaces
    ├── config/      # Configuration
    ├── lib/         # Utility libraries
    └── ui/          # UI components
        └── components/  # shadcn/ui components
```

## API Layer

The project includes a pre-configured API layer with Axios:

### Base Configuration

```typescript
// shared/api/base.ts
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
```

### API Services

```typescript
// Example auth service
export const authApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post('/auth/login', data)
    return response.data
  }
}
```

### Features

- **Interceptors**: Automatic token handling and error processing
- **Type Safety**: Full TypeScript support for requests and responses
- **Mock API**: Development-ready mock implementations
- **Error Handling**: Centralized error processing
- **Authentication**: Built-in token management

### Mock API for Development

```typescript
// Example mock auth service
export const mockAuthApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return { user, token }
  }
}
```

### Usage Example

```typescript
try {
  const response = await authApi.login({ 
    email: 'user@example.com', 
    password: 'password' 
  })
  // Handle successful login
} catch (error) {
  // Handle error
}
```

## Form Handling

The project uses React Hook Form with Zod for type-safe form validation:

### Schema Definition

```typescript
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Must be a valid email'),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
})

type FormValues = z.infer<typeof formSchema>
```

### Form Setup

```typescript
const form = useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    email: '',
    password: ''
  }
})
```

### Form Component Example

```typescript
<form onSubmit={handleSubmit(onSubmit)}>
  <Input {...register('email')} />
  {errors.email && <p>{errors.email.message}</p>}
  
  <Input type="password" {...register('password')} />
  {errors.password && <p>{errors.password.message}</p>}
  
  <Button type="submit">Submit</Button>
</form>
```

### Key Features

- **Type Safety**: Full TypeScript support with inferred types
- **Validation**: Built-in form validation with custom error messages
- **Error Handling**: Comprehensive error display and management
- **State Management**: Efficient form state handling
- **Async Support**: Built-in async submission handling
- **UI Integration**: Seamless integration with shadcn/ui components

## Components and Styling

### Available Components

The project comes with pre-configured shadcn/ui components:

- **Button**: Multiple variants (primary, secondary, outline)
- **Card**: Flexible card layouts with header, content, and footer
- **Input**: Text input with validation states
- **Form Components**: Integrated with React Hook Form

### Styling System

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Theme customization via CSS variables
- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: Built-in dark mode support

## Step-by-Step Setup Guide

### 1. Create Project

```bash
# Create new Vite project with React and TypeScript
npm create vite@latest my-app -- --template react-ts

# Navigate to project directory
cd my-app

# Install dependencies
npm install
```

### 2. Install Required Dependencies

```bash
# UI and Styling
npm install tailwindcss postcss autoprefixer
npm install @radix-ui/react-slot clsx tailwind-merge class-variance-authority
npm install @types/node

# Form Handling
npm install react-hook-form @hookform/resolvers zod

# API and HTTP
npm install axios

# Development Dependencies
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D eslint-plugin-react eslint-plugin-react-hooks
npm install -D eslint-plugin-import eslint-config-prettier eslint-plugin-prettier
npm install -D prettier
```

### 3. Configure Tailwind CSS

```bash
# Initialize Tailwind CSS
npx tailwindcss init -p
```

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ... theme configuration
    },
  },
  plugins: [],
}
```

### 4. Configure TypeScript

Create or update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 5. Configure Vite

Update `vite.config.ts`:
```typescript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### 6. Setup Project Structure

Create the Feature Sliced Design directory structure:
```bash
mkdir -p src/{app/{providers,styles},processes,pages,widgets,features,entities,shared/{api,config,lib,ui/components}}
```

### 7. Configure ESLint

Create `.eslintrc.json`:
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### 8. Configure Prettier

Create `.prettierrc`:
```json
{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}
```

### 9. Setup Global Styles

Create `src/app/styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Add your CSS variables here */
  }
}
```

### 10. Configure shadcn/ui

Create `components.json`:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/shared/ui/components",
    "utils": "@/shared/lib/utils"
  }
}
```

### 11. Create Utility Functions

Create `src/shared/lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 12. Setup API Layer

Create base API configuration in `src/shared/api/base.ts`:
```typescript
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.VITE_API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add interceptors...
```

### 13. Update Package Scripts

Update `package.json` scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "preview": "vite preview",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
    "type-check": "tsc --noEmit"
  }
}
```

### 14. Start Development

```bash
# Start development server
npm run dev
```

### Verification Steps

1. Check if the development server starts without errors
2. Verify hot module replacement is working
3. Confirm TypeScript compilation is successful
4. Test ESLint and Prettier configurations
5. Verify import aliases are working
6. Test API endpoints with mock data
7. Confirm form validation is working

### Common Issues and Solutions

1. **Import Aliases Not Working**
   - Verify `tsconfig.json` and `vite.config.ts` paths configurations
   - Restart the development server

2. **Tailwind Classes Not Working**
   - Check if `globals.css` is imported in the main entry file
   - Verify Tailwind configuration content paths

3. **TypeScript Errors**
   - Run `npm run type-check` to identify issues
   - Ensure all dependencies have proper type definitions

4. **ESLint/Prettier Conflicts**
   - Verify the order of extends in `.eslintrc.json`
   - Run `npm run lint:fix` to automatically fix issues

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

## Development Guidelines

1. Follow Feature Sliced Design principles when organizing code
2. Use TypeScript for type safety
3. Follow ESLint and Prettier rules
4. Write meaningful commit messages
5. Keep components small and focused
6. Use Tailwind CSS for styling
7. Utilize shadcn/ui components when possible
8. Use import aliases (@/*) for cleaner imports
9. Implement form validation using Zod schemas
10. Follow the established project structure

## Project Configuration

- **TypeScript**: Strict mode with path aliases
- **Tailwind**: Custom theme with shadcn/ui integration
- **ESLint**: TypeScript and React rules
- **Prettier**: Consistent code formatting
- **Vite**: Fast build tool with path aliases
- **React Hook Form**: Form handling configuration
- **Zod**: Schema validation setup

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
