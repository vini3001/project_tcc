import { styled } from "@stitches/react";


export const UserContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    width: '100%',
})

export const UserHeader = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',

    'h2': {
        fontWeight: 400
    }
})