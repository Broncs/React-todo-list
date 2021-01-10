import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { AiOutlinePlus } from "react-icons/ai";

const Bookform = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titulo do livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button className="icon" type="submit">
        <AiOutlinePlus className="i" />
      </button>
    </form>
  );
};

export default Bookform;
