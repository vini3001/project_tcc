import { keyframes, styled } from "@stitches/react";

const scaleUp = keyframes({
    '0%': {
        transform: 'scale(0.9)'
    },

    '100%': {
        transform: 'scale(1)'
    }
})

export const HomeContainer = styled('section', {
    width: '100%',
    maxHeight: '77vh',
    gap: '20px',
    overflow: 'auto',
    borderRadius: '5px',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    animation: `${scaleUp} 700ms`,

    '&:hover': {
        cursor: 'pointer',
        boxShadow: '0 4px 10px 4px rgb(0 0 0 / 0.1), 0 10px 6px -20px rgb(0 0 0 / 0.1)',
    }
})

export const HomeHeader = styled('div', {
    display: 'flex',
    width: '100%',
    marginBottom: '20px',
    justifyContent: 'space-between',

    'h2': {
        fontWeight: 400
    }
})

export const HeaderDashboard = styled('div', {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    backgroundColor: '#3b72ae',
    color: 'white',

    'h3': {
        margin: 0,
        padding: '3px',
        fontWeight: 400,
    }
})