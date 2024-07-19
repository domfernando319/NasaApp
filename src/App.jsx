import { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }
  // in react, api querys are fetched with useEffect hooks
  // arrow function input, and dependency array
  useEffect( () => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' +
        `?api_key=${NASA_KEY}`

        //cache - local storage
        const today = (new Date()).toDateString()
        const localKey = `NASA-${today}`
        if (localStorage.getItem(localKey)) {
          const apiData = JSON.parse(localStorage.getItem(localKey))
          setData(apiData)
          console.log('Fetched from cache today.')
          return 
          //return out of the function
        }
        localStorage.clear()


        try {
          const response = await fetch(url)
          const apiData = await response.json()
          localStorage.setItem(localKey, JSON.stringify(apiData))
          setData(apiData)
          console.log('Fetched from API today.')

        } catch (error) {
          console.log(error.message)
        }
    }

    fetchAPIData()

  }, [])

  return (
    <>
      {data ? (<Main data={data}/>) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
          <p>Loading...</p>
        </div>
      )}
      {showModal && (
          <SideBar data = {data} handleToggleModal= {handleToggleModal}/>
        )
      }
      { data && (<Footer data = {data} handleToggleModal={handleToggleModal}/>)}

    </>
  )
}

export default App
