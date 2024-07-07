import { styled } from "@stitches/react";

export const ProfileContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
})

export const ProfileContent = styled('form', {
    display: 'flex',
    padding: '10px',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '15px',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    'h4': {
        fontWeight: 400,
        fontSize: '1.1rem'
    },

    'input': {
        width: '100%',
        borderRadius: '10px',
        padding: '5px',
        paddingLeft: '3px',
        border: '2px solid rgba(0, 0, 0, 0.1)',

        '&:focus': {
            border: '0px',
            boxShadow: '0px 0px 4px #007bff'
        },
    }
})