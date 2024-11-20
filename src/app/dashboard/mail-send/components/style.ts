import { keyframes, styled } from "@stitches/react"

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

export const ModalGroupContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    top: '5rem',
    right: '0',
    position: 'absolute',
    alignItems: 'end',
    width: 'fit-content'
})

export const TagGroupForm = styled('div', {
    display: 'flex',
    position: 'relative',
    height: 'fit-content',
    flexDirection: 'column',
    padding: '25px',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fdfdfd',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    animation: `${scaleUp} 700ms`,
})

export const AddTagButton = styled('button', {
    backgroundColor: '#28a745',
    height: 'fit-content',
    width: 'fit-content',
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: '10px',
    color: 'white'
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