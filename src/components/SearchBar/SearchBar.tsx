import toast from "react-hot-toast";
import { TiHeart } from "react-icons/ti";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (userWord: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const userWord = input.value.trim();

    if (!userWord) {
      toast.error("Enter text before search", { position: "top-right" });
      return;
    }

    onSearch(userWord);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btn}>
          <TiHeart size={25} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;