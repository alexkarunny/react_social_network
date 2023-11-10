import React, {useState} from 'react';
import s from './paginator.module.css';

type PropsType = {
    totalItemsNumber: number
    pageSize: number
    currentPage: number
    changeCurrentPageCallback: (page: number) => void
    portionSize: number
}

export const Paginator: React.FC<PropsType> = ({
                                                   totalItemsNumber,
                                                   pageSize,
                                                   currentPage,
                                                   changeCurrentPageCallback,
                                                   portionSize
                                               }) => {
    const pagesAmount = Math.ceil(totalItemsNumber / pageSize)
    const pages = []
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }

    const portionAmount = Math.ceil(pagesAmount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const turnPageBackHandler = () =>{
        setPortionNumber(portionNumber - 1)
        changeCurrentPageCallback((portionNumber - 2) * portionSize + 1)
    }
    const turnPageUpHandler = () => {
        setPortionNumber(portionNumber + 1)
        changeCurrentPageCallback( portionNumber  * portionSize + 1)
    }
    const leftSide = (portionNumber - 1) * portionSize + 1
    const rightSide = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1
                && <button onClick={turnPageBackHandler}>back</button>
            }
            {
                pages
                    .filter(p => p >= leftSide && p <= rightSide)
                    .map((p, index) => {

                    const finalPageClassName = `
                        ${s.pageNumber}
                        ${p === currentPage ? s.activePageNumber : ' '}
                        `
                    const changeCurrentPageHandler = () => {
                        changeCurrentPageCallback(p)
                    }

                    return <span key={index} className={finalPageClassName}
                                 onClick={changeCurrentPageHandler}>{p}</span>
                })
            }
            {portionNumber < portionAmount
                && <button onClick={turnPageUpHandler}>next</button>
            }
        </div>
    )
};



