import { styled } from "@stitches/react"

export const ModalGroupContainer = styled('div', {
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

export const ModalGroupContent = styled('div', {
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

export const ModalGroupSurrounding = styled('div', {
    width: 'fit-content',
    backgroundColor: 'white',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
})