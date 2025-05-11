import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello-world/counter')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hello-world/counter"!</div>
}
