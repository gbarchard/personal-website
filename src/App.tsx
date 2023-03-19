import Header from './components/Header'
import { pages } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="dark:bg-gray-900 grow">
        <Header />
        <div className="mx-8 my-6 lg:my-2">
          <Routes>
            {pages.map(page =>
              <Route element={page.component} key={page.path} path={page.path} />
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
