import React from 'react'
import { Link } from 'react-router-dom'

function Story() {
    return (
        <div>
            <li><Link to='/story/brand'>브랜드 소개</Link></li>
            <li>사회적 책임과 지원</li>
            <li>맥도날드 품질 이야기</li>
            <li>맥도날드 사람들</li>
        </div>
    )
}

export default Story
