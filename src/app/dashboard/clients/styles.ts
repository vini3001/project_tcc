import { styled } from "@stitches/react";


export const ClientContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})

export const ClientHeader = styled('div', {
    display: 'flex',
    width: '100%',
    marginBottom: '20px',
    justifyContent: 'space-between'
})

export const Table = styled('table', {
    width: '100%',
    borderCollapse: 'collapse',

    'thead': {
        backgroundColor: '#dddddd',
    },

    'th': {
        fontWeight: 'bold',
        borderCollapse: 'separate'
    },

    'td, th': {
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px'
    },

    'tr:nth-child(even)': {
        backgroundColor: '#dddddd'
    }
})

export const EditIcon = styled('img', {
    width: '23px',
    height: '23px',
    cursor: 'pointer',
    borderRadius: '5px',
    
    '&:hover': {
        color: 'red',
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})