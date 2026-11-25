
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'

export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products/:categoryId', element: <Products /> },
      { path: 'cart', element: <Cart /> }
    ]
  }
])

function App() {
  return  <RouterProvider router={myRouter}/>
}

export default App
