import React from 'react'
import { useStateValue } from "../StateProvider";

function SearchPage() {
    const [{ term }, ] = useStateValue();

    return (
        <div className="searchPage">
            <div className='searchPage__header'>
                <h1>{term}</h1>
            </div>
            <div className='searchPage__results'>

            </div>
        </div>
    )
}

export default SearchPage
