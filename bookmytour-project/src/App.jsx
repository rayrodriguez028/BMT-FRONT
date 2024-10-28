import { Route, Routes } from 'react-router-dom'
import { routes } from './Components/utils/routes'
import Layout from './Layouts/Layout'
import Home from './Routes/Home'
import Administracion from './Routes/Administracion'
import Detalle from './Routes/Detalle'

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.administracion} element={<Administracion />} />
          <Route path="detalle/:id" element={<Detalle />} />
          <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
