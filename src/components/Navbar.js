import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Lista para leitura</h1>
      <p>Atualmente voce tem {books.length} livros para ler ...</p>
    </div>
  );
};

export default Navbar;
