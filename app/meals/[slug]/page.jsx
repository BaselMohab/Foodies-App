"use client"

import { useParams } from "next/navigation"

export default function MealPage() {

    const { slug } = useParams()

  return (
    <div>
      <h1>This is Meal Number {slug} </h1>
    </div>
  )
}
