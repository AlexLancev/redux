import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../store/actions';
import ModalFrame from './ModalFrame';

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.open);
  console.log(isOpen)

  return (
    <ModalFrame
      isOpen={isOpen}
      onClose={() => dispatch(closeModal())}
    >
      {children ?? (
        <>
          <strong id="modal-title">Модальное окно</strong>
          <p>Пример контента. Подключи свой JSX через children.</p>
        </>
      )}
    </ModalFrame>
  );
}
