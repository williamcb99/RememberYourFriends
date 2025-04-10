import { LandingPage, HomePage } from "./components/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
