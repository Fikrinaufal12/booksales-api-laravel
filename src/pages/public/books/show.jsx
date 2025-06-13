import { useEffect, useState } from "react";
import { showBook } from "../../../services/books";
import { useParams } from "react-router-dom";
import { bookImageStorage } from "../../../_api";

export default function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const [bookData] = await Promise.all([showBook(id)]);
      setBook(bookData);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full h-auto dark:hidden"
                src={bookImageStorage(book.image)}
                alt={book.title}
              />
              <img
                className="w-full h-auto hidden dark:block"
                src={bookImageStorage(book.image)}
                alt={book.title}
              />
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                {book.title}
              </h1>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Penulis: {book.author}
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Penerbit: {book.publisher}
              </p>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Tahun Terbit: {book.year}
              </p>
              <p className="mt-6 text-base text-gray-700 dark:text-gray-400">
                {book.description}
              </p>
              <p className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Rp{book.price}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
