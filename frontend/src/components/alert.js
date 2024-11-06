import Swal from 'sweetalert2';

const errorAlert =({title, message}) => {
    let titleText;
    if(!title){
        titleText = "Error!";
    } else {
        titleText = title;
    }
    Swal.fire({
        titleText: titleText,
        text: message,
        icon: 'error',
        toast: true,
        width: '30rem',
        timer: 2000,
        position: 'top',
        padding: '1rem 2rem',
        showConfirmButton: false
    });
}

const successAlert = ({title, message}) => {
    let titleText;
    if(!title){
        titleText = "Success!";
    }else {
        titleText = title;
    }

    Swal.fire({
        titleText: titleText,
        text: message,
        icon: 'success',
        toast: true,
        width: '30rem',
        timer: 2000,
        position: 'top',
        padding: '1rem 2rem',
        showConfirmButton: false,
        showCloseButton: true
    })
}

export {
    errorAlert,
    successAlert
}