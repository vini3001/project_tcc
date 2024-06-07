import { styled } from "@stitches/react";
import { Image } from "../components/Image";

export const DashboardSideMenu = styled('section', {
    overflow: 'hidden',
    width: '20vw',
    height: '100vh',
    backgroundColor: '#1b2430'
})

export const DashboardText = styled('a', {
    all: 'unset',
    fontSize: 'medium',
    lineHeight: '20px',
    color: 'White',
    
})

export const DashboardTextContainer = styled('div', {
    marginLeft: '80px',
    display: 'flex',
    width: '100%',
    gap: '10px',
    alignItems: 'center',
    cursor: 'pointer',
})

export const MainIconForm = styled('img', {
    width: '64px',
    height: '64px'
})

export const MenuIconForm = styled('img', {
    width: '23px',
    height: '23px'
})

export const DashboardHeader = styled('div', {
    display: 'grid',
    alignItems: 'center'
})