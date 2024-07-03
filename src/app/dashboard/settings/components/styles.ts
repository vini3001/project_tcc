import { styled } from "@stitches/react";
import ReactPaginate from "react-paginate";

export const CustomLabelPaginate = styled(ReactPaginate, {
    display: 'flex',
    borderRadius: '10px',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    padding: '0',
    margin: '0',

    'a': {
        color: 'black',
        fontSize: '20px',
        fontWeight: '400px',
        textDecoration: 'unset'
    },

    'li': {
        display: 'flex',
        border: '2px solid rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        justifyContent: 'center',
        borderRadius: '5px',
        width: '40px',

        '&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.2)'
        },
    }
})