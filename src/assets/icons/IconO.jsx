import React from 'react'

export const IconO = ({color='#00b341'}) => {

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='44'
            height='44'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'            
            viewBox='0 0 24 24'
        >
            <path stroke='none' d='M0 0h24v24H0z'></path>
            <circle cx='12' cy='12' r='9'></circle>
        </svg>
    );
};
