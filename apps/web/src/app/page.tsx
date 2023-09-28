import Test from "./_components/Test.component"
import { trpc } from "./trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });

  return (
    <main>
      <Test />
      <span className="text-red-700">{greeting}</span>
    </main>
  )
}
