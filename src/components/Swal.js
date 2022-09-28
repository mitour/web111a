import Swal from "sweetalert2";

export const Alert = (type, message) => {
  Swal.fire({
    toast: true,
    position: "bottom-end",
    icon: type,
    timer: 5000,
    timerProgressBar: true,
    showCloseButton: true,
    showConfirmButton: false,
    title: message,
  });
};

export const ModalAlert = (message) => {
  Swal.fire({
    icon: "info",
    showCloseButton: true,
    title: message,
  });
};
