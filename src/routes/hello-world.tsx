import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/lib/components/Nav'

export const Route = createFileRoute('/hello-world')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="items-center justify-center text-center flex flex-col h-dvh w-dvw gap-4">
      <Nav />
      Hello "/hello-world"!
    </div>
  )
}
