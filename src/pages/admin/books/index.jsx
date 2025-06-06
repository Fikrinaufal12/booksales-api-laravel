import { getBooks } from "../../../_services/books";
import { getGenres } from "../../../_services/genres";
import { deleteBook } from "../../../_services/books"; 
import { useEffect, useState, useRef } from "react";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [booksData, genresData] = await Promise.all([
          getBooks(),
          getGenres(),
        ]);
        setBooks(booksData);
        setGenres(genresData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Event handleClickOutside dihapus supaya dropdown tidak otomatis close saat klik di luar atau scroll
    /*
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownVisible(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    */
  }, []);

  const getGenreName = (id) => {
    const genre = genres.find((g) => g.id === id);
    return genre ? genre.name : "Unknown Genre";
  };

  const handleDropdownToggle = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );

    if (confirmDelete) {
      await deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button
              type="button"
              className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
            >
              <svg
                className="h-3.5 w-3.5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Add product
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3 w-[300px]">Product name</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Genres</th>
                  <th className="px-4 py-3">AUTHORS</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(books) && books.length > 0 ? (
                  books.map((book) => (
                    <tr className="border-b dark:border-gray-700" key={book.id}>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-normal w-[300px] dark:text-white"
                      >
                        {book.title}
                      </th>
                      <td className="px-4 py-3">{book.price}</td>
                      <td className="px-4 py-3">{book.stock}</td>
                      <td className="px-4 py-3">{book.cover_photo}</td>
                      <td className="px-4 py-3">
                        {getGenreName(book.genre_id)}
                      </td>
                      <td className="px-4 py-3">{book.author_id}</td>
                      <td className="px-4 py-3 flex items-center justify-end relative z-10">
                        <button
                          ref={buttonRef}
                          onClick={() => handleDropdownToggle(book.id)}
                          className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                          type="button"
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>
                        {dropdownVisible === book.id && (
                          <div
                            ref={dropdownRef}
                            id={`dropdown-${book.id}`}
                            className="z-50 w-44 bg-white border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-600 dark:border-gray-700 absolute right-0 top-full mt-2"
                          >
                            <ul
                              className="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </a>
                              </li>
                            </ul>
                            <div className="py-1">
                              <button
                                on
                                onClick={() => handleDelete(book.id)}
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      Data Tidak Ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}