import { useEffect, useState, useRef } from 'react'

function ToDo() {
  const [todo, setTodo] = useState('')
  const [loading, setLoading] = useState(true)
  const isMounted = useRef(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data)
          setLoading(false)
        }, 2000)
      })
  }, [])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTimeout(() => {
  //         if (isMounted.current) {
  //           setTodo(data)
  //           setLoading(false)
  //         }
  //       }, 2000)
  //     })

  //   return () => {
  //     isMounted.current = false
  //   }
  // }, [isMounted])

  return <div>{loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>}</div>
}
export default ToDo
