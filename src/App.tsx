import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BackOfficePage from '@/pages/BackOffice'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="back-office" element={<BackOfficePage />} />
      </Routes>
    </BrowserRouter>
  )
}
