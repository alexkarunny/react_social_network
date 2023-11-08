import React from 'react';
import s from './paginator.module.css';

type PropsType = {
    totalUsersNumber: number
    pageSize: number
    currentPage: number
    changeCurrentPageCallback: (page: number) => void
}

export const Paginator: React.FC<PropsType> = ({
                                                   totalUsersNumber,
                                                   pageSize,
                                                   currentPage,
                                                   changeCurrentPageCallback
                                               }) => {
    const pagesAmount = Math.ceil(totalUsersNumber / pageSize)

    const pages = []

    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((p, index) => {

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
        </div>
    )
};



