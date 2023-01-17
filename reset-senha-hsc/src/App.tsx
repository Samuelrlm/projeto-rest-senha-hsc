import { ToastContainer } from 'react-toastify'
import { Mainpage } from './pages/Main'
import { GlobalStyles } from './styles/global'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Sucesspage } from './pages/Success'
import { Errorpage } from './pages/Erro'

function App() {

  return (
    //rotas
    <>
      <GlobalStyles />
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
      <Router>
          <Routes>
              <Route path='/' element={<Mainpage />}/>
              <Route path='/success' element={<Sucesspage />}/>
              <Route path='/erro' element={<Errorpage />}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
