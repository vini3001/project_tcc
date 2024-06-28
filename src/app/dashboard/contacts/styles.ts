import { styled } from "@stitches/react";

export const ContactContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    width: '100%',
})

export const ContactHeader = styled('div', {
    display: 'flex',
    width: '100%',
    marginBottom: '20px',
    justifyContent: 'space-between',

    'h2': {
        fontWeight: 400
    }
})

export const ContactContent = styled('section', {
    display: 'flex',
    overflow: 'auto',
    gap: '20px'
})

export const ContactCard = styled('div', {
    display: 'flex',
    gap: '10px',
    padding: '10px',
    cursor: 'pointer',
    minWidth: '200px',
    flexDirection: 'column',
    borderRadius: '10px',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    '&:hover': {
        border: '2px solid rgba(0, 0, 255, 0.2)',
        boxShadow: '0 10px 15px -3px rgb(0 0 255 / 0.1), 0 4px 6px -4px rgb(0 0 255 / 0.1)'
    },

    'h5': {
        fontSize: '1rem',
        color: 'black'
    }
})