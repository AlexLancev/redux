import ThemeSelect from "./ThemeSelect";
import Menu from "./Menu";
import Button from "./Button";
import Search from "./Search";

export default function Header() {

  return (
    <header className="app-header">
      <h1 className="app-title">Shop</h1>
      <Menu />
      <Button />
      <Search />
      <ThemeSelect />
    </header>
  )
}