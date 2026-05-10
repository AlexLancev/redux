import { useSelector } from 'react-redux';
import Button from './components/Button';
import Todos from './components/Todos';
import ThemeSelect from './components/ThemeSelect';

function App() {
  const { data, error } = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`app-root app-root--${theme}`}>
      <header className="app-header">
        <h1 className="app-title">Todos + Redux Saga</h1>
        <ThemeSelect />
      </header>
      <main className="app-main">
        <Button />
        <Todos data={data} error={error} />
      </main>
    </div>
  );
}

export default App;
