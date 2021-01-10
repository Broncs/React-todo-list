import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import Bookform from "./components/Bookform";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <Bookform />
      </BookContextProvider>
    </div>
  );
}

export default App;
