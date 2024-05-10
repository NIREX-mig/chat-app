"use client";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successToast = (data) => {
    return toast.success(data?.message, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });
}

const errorToast = (error) => {
    return toast.error(error.response?.data.message, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
}
const messageToast = (message) => {
    return toast.error(message, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
}

export {
    successToast,
    errorToast,
    messageToast,
}