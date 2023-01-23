import LinkedLists from './LinkedLists'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/linked_lists" element={<LinkedLists />} />
      </Routes>
    </BrowserRouter>
  )
}
