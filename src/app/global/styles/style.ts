import { globalCss, keyframes } from "@stitches/react";
import { styled } from "../../../../stitches.config";
import ReactPaginate from "react-paginate";


export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
        fontStyle: 'normal'
    },
})

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

export const HeaderText = styled('h2', {
    fontWeight: 400,
})

// FORMS

export const InputLabel = styled('a', {
    all: 'unset',
    color: 'white',
    marginLeft: '5px'
})

export const InputButton = styled('button', {
    height: 'fit-content',
    marginTop: '20px',
    padding: '8px',
    color: 'White',
    borderRadius: '5px',
    backgroundColor: '#007bff'
})

export const InputCustom = styled('input', {
    width: '100%',
    borderBottom: '2px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    padding: '5px',
    paddingLeft: '3px',

    '&:focus': {
        borderBottom: '2px solid #007bff',
        animation: `${colorUp} 900ms`,
    },
})

export const SelectStyle = styled('select', {
    width: '100%',
    borderBottom: '2px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    padding: '5px',
    paddingLeft: '3px',

    '&:focus': {
        borderBottom: '2px solid #007bff',
        animation: `${colorUp} 900ms`,
    },
})

export const RegisterButton = styled('button', {
    backgroundColor: '#28a745',
    height: 'fit-content',
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: '10px',
    color: 'white'
})

export const GoBackIcon = styled('img', {
    width: '45px',
    height: '40px',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '9999px',
    
    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})

//  MODAL

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