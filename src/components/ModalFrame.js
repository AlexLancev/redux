import PropTypes from 'prop-types';

export default function ModalFrame({ isOpen, onClose, titleId, children }) {
  if (!isOpen) return null;

  return (
    <div
      id="modal-dialog-region"
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        className="modal-close"
        type="button"
        onClick={onClose}
        aria-label="Закрыть модальное окно"
      >
        ×
      </button>
      <div className="modal-content">{children}</div>
    </div>
  );
}

ModalFrame.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  titleId: PropTypes.string,
  children: PropTypes.node,
};

ModalFrame.defaultProps = {
  titleId: 'modal-title',
  children: null,
};
