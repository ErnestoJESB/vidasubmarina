import React from 'react';

export const Pagination = ({ condominiosPerPage, totalCondominios, currentPage, setCurrentPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCondominios / condominiosPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }
    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (

        /* haz que el número que presione se quede seleccionado con la clase button_especific*/
        <div className="cont">
            <div className="pagination">
                <button className="pagination__button" onClick={onPreviousPage} disabled={currentPage === 1}>Anterior</button>
                {pageNumbers.map((number) => (
                    <button className={`pagination__button ${currentPage === number ? 'button_especific' : ''}`} key={number} onClick={() => onSpecificPage(number)}>{number}</button>
                ))}
                <button className="pagination__button" onClick={onNextPage} disabled={currentPage === pageNumbers.length}>Siguiente</button>
            </div>
        </div>

    )
}

