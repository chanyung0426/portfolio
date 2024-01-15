import React from 'react'
import { Link } from 'react-router-dom'

function Store() {
    return (
        <div>

        <ul>
          <li><Link to='/store/find'>매장 찾기</Link></li>
          <li><Link to='/store/delivery'>맥딜리버리</Link></li>
          <li><Link to='/store/drive-thru'>맥드라이브</Link></li>
          <li><Link to='/store/inquiry'>임차문의</Link></li>
        </ul>
      
      </div>
    )
}

export default Store
