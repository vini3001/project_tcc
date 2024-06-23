import { keyframes } from "@stitches/react";
import { styled } from "../../../stitches.config";

const scaleUp = keyframes({
    '0%': {
        opacity: 0,
        transform: 'scale(0.9)',
    },

    '100%': {
        opacity: 1,
        transform: 'scale(1)',
    }
})

export const LoginContainer = styled('section', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(/assets/DDMRibeirao-1-1280x720.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
})

export const LoginBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
})

export const LoginForm = styled('form', {
    display: 'flex',
    width: '25vw',
    height: 'fit-content',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'center',
    padding: '25px',
    borderRadius: '10px',
    backgroundColor: '#231f20',

    animation: `${scaleUp} 700ms`,

})

export const IconForm = styled('img', {
    width: '80px',
    height: '100px'
})