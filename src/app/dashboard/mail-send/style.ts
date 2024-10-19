import { styled } from "@stitches/react";


export const MailSendContainer = styled('div', {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    padding: '10px',
    width: '30vw',
    height: 'fit-content'
})

export const MailSendContent = styled('div', {
    display: 'flex',
    position: 'relative',
    overflowX: 'hidden',
    maxHeight: '100vh',
    width: '100%',
    flexDirection: 'column',
    //padding: '10px',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
})

export const MailSendChatSideContent = styled('div', {
    display: 'flex',
    overflowX: 'hidden',
    maxHeight: '100vh',
    width: '45%',
    flexDirection: 'column',
    //padding: '10px',
    //border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
})

export const MailSendHeader = styled('div', {
    display: 'flex',
    position: 'relative',
    padding: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    'h3': {
        fontWeight: 400,
        marginBottom: '0',
        marginLeft: '5px'
    }
})

export const MailSendChatBox = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    gap: '2px',
    backgroundColor: 'white',
    padding: '10px',
    height: '50vh',
    maxHeight: '50vh' 
})

export const MailSendChatMessage =styled('div', {
    display: 'flex',
    alignItems: 'end',
    backgroundColor: 'green',
    borderRadius: '15px',
    overflowWrap: 'break-word',
    maxWidth: '50%',
    color: 'white',
    padding: '5px'
})

export const MailSendChatSend = styled('div', {
    display: 'flex',
    margin: '10px',
    flexDirection: 'row',
    height: '35px',
    justifyItems: 'center',
    //justifyContent: 'space-between',

    'input': {
        width: '80%',
        marginLeft: '15px',
        padding: '10px',
        border: '2px solid rgba(0, 0, 0, 0.3)',
        borderRadius: '30px'
    },

    'button': {
        marginLeft: '15px',
        padding: '5px',
        backgroundColor: 'green',
        borderRadius: '99999px',
        width: 'fit-content',
        height: 'fit-content',
    }
})

export const ThreeDots = styled('img', {
    padding: '5px',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    borderRadius: '99999px',
    
    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
    }
})