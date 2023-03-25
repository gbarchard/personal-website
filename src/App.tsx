import Header from './components/Header'
import { pages } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FooterSection from './components/Footer'
import { ToastContextProvider } from './components/Toast'

export default function App() {
  return (
    <BrowserRouter>
      <ToastContextProvider>
        <div className="dark:bg-gray-900 grow flex flex-col overflow-hidden">
          <Header />
          <div className="grow overflow-scroll flex flex-col">
            <div className="grow flex flex-col px-8 py-6 lg:py-2">
              <Routes>
                {pages.map((page) => (
                  <Route
                    element={page.component}
                    key={page.path}
                    path={page.path}
                  />
                ))}
              </Routes>
            </div>
            <FooterSection />
          </div>
        </div>
      </ToastContextProvider>
    </BrowserRouter>
  )
}
