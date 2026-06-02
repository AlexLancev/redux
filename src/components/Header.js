import ThemeSelect from "./ThemeSelect";
import Menu from "./Menu";
import Search from "./Search";

export default function Header() {

  return (
    <header className="app-header">
      <h1 className="app-title">Shop</h1>
      <Menu />
      <Search />
      <ThemeSelect />
    </header>
  )
}