import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>
            <li><Link to='/new/promotion'>프로모션</Link></li>
            <li>새로운 소식</li>
            <li>이달의 해피밀</li>
        </div>
    )
}

export default New