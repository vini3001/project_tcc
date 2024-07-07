import { styled } from "@stitches/react";


export const ModalProfileContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    right: '0',
    position: 'absolute',
    marginTop: '42px',
    alignItems: 'end',
    width: '100%',
    inset: '0',
    zIndex: '1'
})

export const ModalProfileContent = styled('div', {
    display: 'flex',
    padding: '10px',
    justifyContent: 'stretch',
    gap: '10px',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})

export const ModalProfileSurrounding = styled('div', {
    width: '100px',
    backgroundColor: 'white',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
})

export const ExitIcon = styled('img', {
    width: '20px',
    height: '20px',
    cursor: 'pointer'
})

export const ProfileIcon = styled('img', {
    width: '20px',
    height: '20px',
    cursor: 'pointer'
})