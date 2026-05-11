import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../store/actions';

export default function ModalButton({ labelOpen, labelClose }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.open);

  return (
    <button
      type="button"
      className="modal-toggle-button"
      onClick={() => dispatch(toggleModal())}
      aria-expanded={isOpen}
      aria-controls="modal-dialog-region"
    >
      {isOpen ? labelClose : labelOpen}
    </button>
  );
}

ModalButton.propTypes = {
  labelOpen: PropTypes.string,
  labelClose: PropTypes.string,
};

ModalButton.defaultProps = {
  labelOpen: 'Показать модальное окно',
  labelClose: 'Скрыть модальное окно',
};
