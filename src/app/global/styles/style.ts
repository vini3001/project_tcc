import { globalCss, keyframes } from "@stitches/react";
import { styled } from "../../../../stitches.config";


export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
        fontStyle: 'normal'
    },
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
    all: 'unset',
    fontWeight: 'lighter',
    fontStyle: 'normal'
})

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
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    padding: '2px',
    borderRadius: '9999px',
    
    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})