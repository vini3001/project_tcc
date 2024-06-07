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
    fontSize: '18px',
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

export const MainIconForm = styled(Image, {
    width: '80px',
    height: '80px'
})

export const MenuIconForm = styled(Image, {
    width: '30px',
    height: '30px'
})

export const DashboardHeader = styled('div', {
    display: 'grid',
})