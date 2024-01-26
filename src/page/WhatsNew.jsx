import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>
            <li><Link to='/new/promotion'>프로모션</Link></li>
            <li><Link to='/new/news'>이달의 소식</Link></li>
            <li><Link to='/new/happymeal'>이달의 해피밀</Link></li>
        </div>
    )
}

export default New