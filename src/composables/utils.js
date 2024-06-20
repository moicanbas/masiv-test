import { toast } from 'vue3-toastify';

function showToastMessage(type, mensaje) {
    toast[type](mensaje, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'colored',
        autoClose: 3500,
    });
}

export function toastSuccessMessage(mensaje) {
    showToastMessage('success', mensaje);
}

export function toastErrorMessage(mensaje) {
    showToastMessage('error', mensaje);
}
