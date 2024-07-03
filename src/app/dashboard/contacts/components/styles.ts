import { keyframes, styled } from "@stitches/react";
import ReactPaginate from "react-paginate";

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

export const CustomLabelPaginate = styled(ReactPaginate, {
    display: 'flex',
    borderRadius: '10px',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    padding: '0',
    margin: '0',

    'a': {
        color: 'black',
        fontSize: '20px',
        fontWeight: '400px',
        textDecoration: 'unset'
    },

    'li': {
        display: 'flex',
        border: '2px solid rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        justifyContent: 'center',
        borderRadius: '5px',
        width: '40px',

        '&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.2)'
        },
    }
})

export const RegisterBox = styled('div', {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backdropFilter: 'blur(2px)',
    inset: '0',
    zIndex: '1'
})

export const RegisterForm = styled('form', {
    display: 'flex',
    position: 'relative',
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