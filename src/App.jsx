import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import PublicLayout from "./layouts/public"
import Books from "./pages/public/books"
import BookCreate from "./pages/admin/books/create.jsx"
import Dashboard from "./pages/admin"
import AdminLayout from "./layouts/admin"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import AdminBooks from "./pages/admin/books"

function App() {

return (
    <>
<BrowserRouter>
<Routes>
<Route element={<PublicLayout />}>
<Route index element={<Home />} />
<Route path="books" element={<Books />} />
</Route>

 <Route path="login" element={<Login />} />
 <Route path="register" element={<Register />} />

           <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              
              <Route Route path="books">
                <Route index element={<AdminBooks />} />
                <Route path="create" element={<BookCreate />} />
                </Route>
          </Route>    
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
