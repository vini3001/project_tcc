import { styled } from "../../../stitches.config";
import Link from "next/link";

export const DashboardSideMenu = styled('section', {
    overflowY: 'hidden',
    height: '100vh',
    backgroundColor: '#1b2430',
    zIndex: '10',

    variants: {
        minSize: {
            minimize: {
                minWidth: 'fit-content'
            },
            maximize: {
                minWidth: '220px'
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
    zIndex: '20',
    
    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})

export const DashboardHeader = styled('div', {
    display: 'grid',
    position: 'relative',
    alignItems: 'center'
})