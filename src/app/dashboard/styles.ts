import { styled } from "../../../stitches.config";
import Link from "next/link";

export const DashboardSideMenu = styled('section', {
    overflowY: 'hidden',
    width: 'fit-content',
    height: '100vh',
    backgroundColor: '#1b2430',

    variants: {
        menu: {
            closed: {
                width: 'fit-content'
            },
            opened: {
                width: 'fit-content'
            }
        }
    }
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

export const DashboardTextContainer = styled(Link, {
    display: 'flex',
    textDecorationLine: 'unset',
    color: 'White',
    width: 'fit-content',
    padding: '5px',
    borderRadius: '14px',
    gap: '10px',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
        color: '#4a77f0'
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
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})

export const DashboardHeader = styled('div', {
    display: 'grid',
    alignItems: 'center'
})