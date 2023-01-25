import { IPauseProps } from '../model/types';

export const Pause = ({ onClick }: IPauseProps) => {
    return (
        <svg
            onClick={onClick}
            xmlns='http://www.w3.org/2000/svg'
            fill='#979797'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 5.25v13.5m-7.5-13.5v13.5' />
        </svg>

    );
};