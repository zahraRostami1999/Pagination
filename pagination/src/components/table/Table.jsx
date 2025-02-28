import React, { useState, useEffect } from 'react';

function Table({ data, headers }) {
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 3;
    const paginationCount = Math.ceil(data.length / recordPerPage);
    const [indexOfLastRecord, setIndexOfLastRecord] = useState(currentPage * recordPerPage);
    const [indexOfFirstRecord, setIndexOfFirstRecord] = useState(indexOfLastRecord - recordPerPage);

    useEffect(() => {
        setIndexOfLastRecord(currentPage * recordPerPage);
        setIndexOfFirstRecord(indexOfLastRecord - recordPerPage)
        }, [currentPage, recordPerPage, indexOfLastRecord]);

        const pageNumbers = [];    
        for(let i = 0; i < paginationCount; i++) {
            pageNumbers.push(i + 1);
        }
    
    const handlePagination = (pageNumber) => {
            setCurrentPage(pageNumber);
    }

    const handlePrePage = ()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = ()=>{
        if(currentPage !== paginationCount){
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className='w-full my-6'>
            <div className='flex justify-center'>
                <table className='border-4 w-1/2'>
                    <thead className='border-b-2 bg-rose-200'>
                        <tr className='h-10'>
                            {
                                headers.map((header) => {
                                    return <th>{header}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody className='text-center bg-rose-50'>
                        {
                            data.slice(indexOfFirstRecord, indexOfLastRecord).map((item) => {
                                return (
                                    <tr className='border-b h-10'>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='flex justify-center'>
                <div className='bg-blue-200 flex justify-center my-3 border w-1/2 py-3'>
                    <ul className='flex space-x-10'>
                        <li>
                            <a href='#' onClick={()=>handlePrePage()}>
                                Pre Page
                            </a>
                        </li>
                        <li className='space-x-6'>
                            {pageNumbers.map(pageNumber => {
                                return (
                                    <a key={pageNumber} className='cursor-pointer' onClick={() => handlePagination(pageNumber)}>
                                        {pageNumber}
                                    </a>
                                )
                            })}
                        </li>
                        <li>
                            <a href='#' onClick={()=>handleNextPage()}>
                                Next Page
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Table;
