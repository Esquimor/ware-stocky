"use client"

import { Button } from "shared-ui/Button"

export default function Test() {
  const handleClick = () => {
    alert("hello world")
  }

  return (
    <main>
      <Button onClick={handleClick}>Click Me</Button>
    </main>
  )
}
