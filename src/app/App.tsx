import { Suspense } from 'react'
import { LoginForm } from '@/features/auth/ui/login-form'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-background p-8">
        <main className="container space-y-8">
          <h1 className="text-4xl font-bold">Welcome to React + FSD</h1>
          <p className="text-muted-foreground">
            This project is set up with Feature Sliced Design, Tailwind CSS, shadcn/ui, and form handling
          </p>

          <div className="py-8">
            <LoginForm />
          </div>
        </main>
      </div>
    </Suspense>
  )
}

export default App
