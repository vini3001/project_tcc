import { keyframes, styled } from "@stitches/react";

const colorUp = keyframes({
    '0%': {
        backgroundColor: 'blue'
    },

    '100%': {
        backgroundColor: 'red'
    }
})

export const DashboardSideMenu = styled('section', {
    overflow: 'hidden',
    width: 'fit-content',
    height: '100vh',
    backgroundColor: '#1b2430',
})

export const DashboardMainText = styled('a', {
    all: 'unset',
    fontSize: 'large',
    lineHeight: '20px',
    color: 'White',
    
})

export const DashboardMenuText = styled('a', {
    all: 'unset',
    fontSize: 'medium',
    lineHeight: '20px',
    color: 'White',
    
})

export const DashboardTextContainer = styled('div', {
    display: 'flex',
    width: 'fit-content',
    padding: '5px',
    borderRadius: '14px',
    gap: '10px',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.6)'
    }
})

export const MainIconForm = styled('img', {
    width: '64px',
    height: '64px'
})

export const MenuIconForm = styled('img', {
    width: '23px',
    height: '23px',
    borderRadius: '5px',
    
    '&:hover': {
        color: 'red',
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})

export const DashboardHeader = styled('div', {
    display: 'grid',
    alignItems: 'center'
})