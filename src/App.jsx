import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Authentication from './pages/Authentication';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
