import { keyframes, styled } from "@stitches/react";

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

const colorUp = keyframes({
    '0%': {
        borderBottom: '2px solid rgba(0, 0, 0, 0.2)'
    },

    '100%': {
        borderBottom: '2px solid #007bff'
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

export const InputLabel = styled('a', {
    color: 'rgba(0, 0, 0, 0.5)',
})

export const LoginForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'center',
    padding: '25px',
    borderRadius: '5px',
    backgroundColor: 'White',

    animation: `${scaleUp} 700ms`,

})

export const InputCustom = styled('input', {
    borderBottom: '2px solid rgba(0, 0, 0, 0.2)',
    padding: '5px',
    paddingLeft: '3px',

    '&:focus': {
        borderBottom: '2px solid #007bff',
        animation: `${colorUp} 500ms`,
    },
})

export const InputButton = styled('input', {
    marginTop: '10px',
    padding: '8px',
    color: 'White',
    borderRadius: '5px',
    backgroundColor: '#007bff'
})