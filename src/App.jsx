import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieList from "./components/MovieList"
import Header from "./components/Header"
import { useEffect, useState } from "react"

const App = () => {

  const [movieList, setMovieList] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await res.json();
      setMovieList(data);
      // console.log(data)
    }

    fetchData()
  },[])

  // console.log(movieList)

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList movieList={movieList}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App