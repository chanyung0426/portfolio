import React from 'react'

function New() {
    return (
        <div>
            <li><Link to='/new/promotion'>프로모션</Link></li>
            <li><Link to='/new/news'>새로운 소식</Link></li>
            <li><Link to='/new/happymeal'>이달의 해피밀</Link></li>
        </div>
    )
}

export default New