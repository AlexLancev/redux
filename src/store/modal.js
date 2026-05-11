export const MODAL_STORAGE_KEY = 'app-modal';

export function readStoredModalOpen() {
  try {
    const raw = localStorage.getItem(MODAL_STORAGE_KEY);
    if (raw === 'true') return true;
    if (raw === 'false') return false;
    if (raw === 'visible') return true;
    if (raw === 'hidden') return false;
  } catch {}
  return false;
}

export function writeStoredModalOpen(open) {
  try {
    localStorage.setItem(MODAL_STORAGE_KEY, open ? 'true' : 'false');
  } catch {}
}
