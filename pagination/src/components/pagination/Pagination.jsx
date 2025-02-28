import React, { useState } from 'react';

function Pagination({count}) {
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1);

    for(let i = 0; i < count; i++) {
        pageNumbers.push(i + 1);
    }

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
        localStorage.setItem('currentPage', pageNumber);
    }

    return (
        <div className='bg-blue-200 flex justify-center my-3 border w-1/2 py-3'>
            <ul className='flex space-x-10'>
                <li>
                    <a href='#'>
                        Pre Page
                    </a>
                </li>
                <li className='space-x-6'>
                    {pageNumbers.map(pageNumber => {
                        return (
                            <a key={pageNumber} className='cursor-pointer' onClick={()=> handlePagination(pageNumber)}>
                                {pageNumber}
                            </a>
                        )
                    })}
                </li>
                <li>
                    <a href='#'>
                        Next Page
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
