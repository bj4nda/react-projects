import React, {useState, useEffect} from "react"
import Loading from "./Loading"
import Tours from "./Tours"
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project"
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const getTours = async () => {
    setLoading(true)

    try {
      const res = await fetch(url)
      const tours = await res.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>no Tours left</h2>
        <button className="btn" onClick={() => getTours()}>
          {" "}
          refresh{" "}
        </button>
      </div>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
