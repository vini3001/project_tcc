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

export const RegisterBox = styled('div', {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    inset: '0',
    zIndex: '1'
})

export const RegisterForm = styled('form', {
    display: 'flex',
    position: 'relative',
    width: '55vw',
    height: 'fit-content',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'center',
    padding: '25px',
    borderRadius: '10px',
    backgroundColor: '#231f20',

    animation: `${scaleUp} 700ms`,

})

export const CloseButton = styled('img', {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '10px'
})