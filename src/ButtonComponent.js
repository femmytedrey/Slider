import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const ButtonComponent = ({onClickPrev, onClickNext}) => {
    return(
        <div>
            <button className='prev' onClick={onClickPrev}>
                <FiChevronLeft />
            </button> 
            <button className='next' onClick={onClickNext}>
                <FiChevronRight />
            </button>
        </div>
    )

}

export default ButtonComponent