import { toast } from 'react-toastify'

export function toastError(message: string) {
  return toast.error(message, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: false,
    progress: undefined,
    theme: 'colored',
  })
}

export function toastSuccess(message: string) {
  return toast.success(message, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    closeButton: false,
    draggable: true,
    progress: undefined,

    theme: 'colored',
  })
}

export function toastInfo(message: string) {
  return toast.info(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    closeButton: false,
    draggable: true,
    progress: undefined,

    theme: 'colored',
  })
}