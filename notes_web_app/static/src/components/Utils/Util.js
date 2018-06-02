import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify= (err,type) => toast[type](err, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 100
});