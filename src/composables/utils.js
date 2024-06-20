import { toast } from "vue3-toastify";

const showToastMessage = (type, mensaje) => {
  toast[type](mensaje, {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "colored",
    autoClose: 3500,
  });
}

export const toastSuccessMessage = (mensaje) => {
  showToastMessage("success", mensaje);
};

export const toastErrorMessage = (mensaje) => {
  showToastMessage("error", mensaje);
};

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1000) + 1;
};
