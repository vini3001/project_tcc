import Link from "next/link";
import { styled } from "../../../../../stitches.config";

export const DetailsHeader = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',

    'h2': {
        fontWeight: 400
    }
})

export const DetailsContainer = styled('div', {
    flexDirection: 'column',
    width: '100%',
    maxHeight: '77vh',
    gap: '20px',
    padding: '10px',
    overflow: 'auto',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
})

export const DetailsContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})