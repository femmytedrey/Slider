import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const ButtonComponent = ({onclickPrev, onCLickNext}) => {
    return(
        <div>
            <button className='prev' onClick={onclickPrev}>
                <FiChevronLeft />
            </button> 
            <button className='next' onClick={onCLickNext}>
                <FiChevronRight />
            </button>
        </div>
    )

}

export default ButtonComponent