import LinkedLists from './LinkedLists'
import '../styles/app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Stacks from './Stack'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/linked_lists" element={<LinkedLists />} />
        <Route path="/stacks" element={<Stacks />} />
      </Routes>
    </BrowserRouter>
  )
}
