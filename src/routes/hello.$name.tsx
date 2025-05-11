import { Nav } from '@/lib/components/Nav'
import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/hello/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = useParams({
    from: Route.to,
  })

  return (
    <div className="items-center justify-center text-center flex flex-col h-dvh w-dvw gap-4">
      <Nav />

      <h1 className="text-2xl font-black">Hello {params.name}!</h1>
    </div>
  )
}
