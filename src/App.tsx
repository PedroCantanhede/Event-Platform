import { useEffect } from "react"
import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )

  return (
    <h1 className="text-5xl font-bold text-violet-500">Hello, World!</h1>
  )
}

export default App
