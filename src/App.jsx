import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Dashboard from "./pages/admin";
import AdminLayout from "./layouts/admin";
import AdminBooks from "./pages/admin/books/index.jsx";
import BookCreate from "./pages/admin/books/create.jsx";
import BookEdit from "./pages/admin/books/edit.jsx";
import AdminGenres from "./pages/admin/genres/index.jsx";
import GenreCreate from "./pages/admin/genres/create.jsx";
import AdminAuthors from "./pages/admin/authors/index.jsx";
import AuthorCreate from "./pages/admin/authors/create.jsx";
import GenreEdit from "./pages/admin/genres/edit.jsx";
import AuthorEdit from "./pages/admin/authors/edit.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="/books" element={<Books />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<BookCreate />} />
              <Route path="edit/:id" element={<BookEdit />} />
            </Route>

            <Route path="genres">
              <Route index element={<AdminGenres />} />
              <Route path="create" element={<GenreCreate />} />
              <Route path="edit/:id" element={<GenreEdit />} />
            </Route>

            <Route path="authors">
              <Route index element={<AdminAuthors />} />
              <Route path="create" element={<AuthorCreate />} />
              <Route path="edit/:id" element={<AuthorEdit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}