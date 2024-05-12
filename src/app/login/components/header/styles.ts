import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: '10px',
})

export const HeaderText = styled('h2', {
    fontSize: 'larger',
    color: 'White'
})