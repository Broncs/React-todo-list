import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import Bookdetails from "../components/Bookdetails";

const Booklist = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <Bookdetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Sem livros para ler. </div>
  );
};

export default Booklist;
