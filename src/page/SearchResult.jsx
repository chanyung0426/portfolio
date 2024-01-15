import React from 'react'
import Search from '../component/Search'
import { Route } from 'react-router-dom'


function SearchResult() {
    return (
        <div>
            <Route path="/search" component={Search} />
        </div>
    )
}

export default SearchResult