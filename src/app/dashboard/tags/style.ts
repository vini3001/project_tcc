import { styled } from "@stitches/react";

export const TagsBox = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%'
})

export const TagsContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    width: '100%',
})

export const TagsHeader = styled('div', {
    display: 'grid',
    width: '100%',
    marginBottom: '20px',

    'h2': {
        fontWeight: 400
    }
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

export const TagsContent = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    width: '100%',
})

export const TableContainer = styled('div', {
    width: '100%',
    maxHeight: '77vh',
    tableLayout: 'fixed',
    overflow: 'auto',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
})

export const Table = styled('table', {
    borderCollapse: 'collapse',
    width: '100%',

    'tbody': {
        borderBottom: '1px solid #dddddd'
    },

    'th': {
        fontWeight: 600,
        fontSize: '0.8rem',
        borderBottom: '1px solid #dddddd',
    },

    'td': {
        whiteSpace: 'nowrap'
    },

    'td, th': {
        borderRight: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px'
    },
})

export const EditIcon = styled('img', {
    width: '23px',
    height: '23px',
    cursor: 'pointer',
    borderRadius: '5px',
    
    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})

export const DeleteIcon = styled('img', {
    width: '23px',
    height: '23px',
    cursor: 'pointer',
    borderRadius: '5px',
    
    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})