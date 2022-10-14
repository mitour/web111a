import Swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-link d-none",
  },
  buttonsStyling: false,
});

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

export const ModalAlert = (message, email) => {
  swalWithBootstrapButtons.fire({
    icon: "info",
    showCloseButton: true,
    title: message,
    confirmButtonText: "Didn't received? Resend",
    showLoaderOnConfirm: true,
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      setTimeout(() => {
        confirmButton.classList.remove("d-none");
      }, 5000);
    },
    preConfirm: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_USER_API}/register/resend/${email}`
      );
      const data = await res.json();
      const { status } = res;
      const { message } = data;
      if (status === 200) {
        Swal.showValidationMessage(`${message}`);
      } else if (status === 404 || status === 500) {
        Swal.showValidationMessage(`Request failed: ${message}`);
      }
    },
  });
};
