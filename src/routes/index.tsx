import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/lib/components/Nav'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="items-center justify-center text-center flex flex-col h-dvh w-dvw gap-4">
      <Nav />

      <h1 className="text-2xl font-black">Main</h1>
    </div>
  )
}
