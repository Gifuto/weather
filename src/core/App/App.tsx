import { Routes, Route, Navigate } from "react-router-dom"

import { Main, Weather } from "../../screens"
import { Container } from "./styled"

export const App = () => {

  
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weather/:id" element={<Weather />} /> 
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </Container>
  )
}
