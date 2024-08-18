import { styled } from "@stitches/react";

export const HomeContainer = styled('section', {
    width: '100%',
    maxHeight: '77vh',
    alignItems: 'center',
    gap: '20px',
    padding: '10px',
    overflow: 'auto',
    borderRadius: '5px',

    '&:hover': {
        border: '2px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        cursor: 'pointer'
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