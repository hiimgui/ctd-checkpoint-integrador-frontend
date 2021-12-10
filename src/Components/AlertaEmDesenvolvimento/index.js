import Swal from "sweetalert2";

const AlertaEmDesenvolvimento = () => {

    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        heightAuto: false,
        text: 'Funcionalidade em desenvolvimento',
    })
}

export default AlertaEmDesenvolvimento;