import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FooterSection from './components/Footer'
import { ToastContextProvider } from './components/Toast'
import Contact from './components/Contact'
import { pages } from './pages'

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ToastContextProvider>
        <div className="dark:bg-gray-900 grow flex flex-col overflow-hidden">
          <Header />
          <div className="grow overflow-scroll flex flex-col">
            <div className="grow flex flex-col px-4 sm:px-12 md:px-32 lg:px-48 py-2 lg:py-6">
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
            <Contact />
            <FooterSection />
          </div>
        </div>
      </ToastContextProvider>
    </BrowserRouter>
  )
}
