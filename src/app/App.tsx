import { Suspense } from 'react'
import { Button } from '@/shared/ui/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/shared/ui/components/ui/card'
import { Input } from '@/shared/ui/components/ui/input'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-background p-8">
        <main className="container space-y-8">
          <h1 className="text-4xl font-bold">Welcome to React + FSD</h1>
          <p className="text-muted-foreground">
            This project is set up with Feature Sliced Design, Tailwind CSS, and shadcn/ui
          </p>

          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Example Components</CardTitle>
              <CardDescription>Here are some shadcn/ui components in action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="example-input" className="text-sm font-medium">Example Input</label>
                <Input id="example-input" placeholder="Type something..." />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </Suspense>
  )
}

export default App
