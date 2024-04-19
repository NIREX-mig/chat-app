import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successToast = (response) => {
    return toast.success(response.data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });
}

const errorToast = (error) => {
    return toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
}

export {
    successToast,
    errorToast
}