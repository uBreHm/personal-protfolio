import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import { Home } from "../features/home/pages/HomePage"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
