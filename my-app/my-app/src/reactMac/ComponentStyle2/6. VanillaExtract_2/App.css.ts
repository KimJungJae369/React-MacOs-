import { style } from '@vanilla-extract/css';

export const container = style({
    padding: '2rem',
    margin: '3rem auto',
    maxWidth: '34rem',
    borderRadius: '1rem',
    backgroundColor: '#ffffff',
    color: '#111111',
    textAlign: 'center',
    boxShadow: '0 0 24px rgba(0, 0, 0, 0.18)',
});

export const button = style({
    background: '#bf4f74',
    borderRadius: '0.75rem',
    border: 'none',
    color: '#ffffff',
    margin: '1rem 0 0',
    padding: '0.9em 1.6em',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.25s ease',
    ':hover': {
        backgroundColor: '#9d3d63',
    },
});

export const active = style({
    backgroundColor : "blue",
    border : "2px solid blue",
    color : '#fff'
});