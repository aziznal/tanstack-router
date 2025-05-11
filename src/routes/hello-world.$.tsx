import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello-world/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hello-world/$"!</div>
}
