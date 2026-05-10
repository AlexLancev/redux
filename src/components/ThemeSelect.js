import { useDispatch } from 'react-redux';
import { setTheme } from '../store/actions';
import { Theme } from '../store/theme';

export default function ThemeSelect() {
  const dispatch = useDispatch();

  return (
    <div className="theme-select" role="group" aria-label="Тема оформления">
      <button type="button" onClick={() => dispatch(setTheme(Theme.Light))}>
        Светлая
      </button>
      <button type="button" onClick={() => dispatch(setTheme(Theme.Dark))}>
        Тёмная
      </button>
    </div>
  );
}
