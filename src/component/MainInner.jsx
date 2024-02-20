import React from 'react'
import styled from 'styled-components'

function MainInner() {
    return (
        <Container>
            <h2>McDonald's LIVE</h2>
            <ul className='menuList'>
                <li>
                    <div className='tmb'>
                        <img src ='https://www.mcdonalds.co.kr/upload/main/card/1706071370262.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        고기 맛은 두께다!
                        <br/>
                        더블 쿼터파운더 치즈
                        </strong> 
                    </div>
                </li>
                <li>
                    <div className='tmb'>
                        <img src='https://www.mcdonalds.co.kr/upload/main/card/1706688387408.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        단짠촉촉 맥그리들로
                        <br/>
                        따뜻하게 채우는 아침
                        </strong> 
                    </div>
                </li>
                <li>
                    <div className='tmb'>
                        <img src='https://www.mcdonalds.co.kr/upload/main/card/1705290321654.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        가성비 간식 맛집, 
                        <br/>
                        맥도날드 해피스낵!
                        </strong> 
                    </div>
                </li>
                <li>
                    <div className='tmb'>
                        <img src='https://www.mcdonalds.co.kr/upload/main/card/1700726134574.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        신선한 토마토와 매콤한 소스의 만남!
                        </strong>
                        <br/> 
                    </div>
                </li>
                <li>
                    <div className='tmb'>
                        <img src='https://www.mcdonalds.co.kr/upload/main/card/1696769345457.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        맥도날드 M오더
                        
                        </strong>
                        <br/>
                    </div>
                </li>
                <li>
                    <div className='tmb'>
                        <img src='https://www.mcdonalds.co.kr/upload/main/card/1690789474433.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        빠삭하게 빠져드는 맛,
                        <br/>
                        맥크리스피!
                        </strong> 
                    </div>
                </li>
                <li>
                    <div className='tmb'>
                        <img src='https://www.mcdonalds.co.kr/upload/main/card/1677684764973.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        갓 구워내 따뜻하고 신선한
                        <br/>
                        베이컨 토마토 에그 머핀!
                        </strong>
                    </div>
                </li>
                <li>
                    <div className='tmb'>
                        <img src='https://www.mcdonalds.co.kr/upload/main/card/1704174329024.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        상큼함과 부드러움의 역대급 조합!
                        <br/>
                        </strong> 
                    </div>
                </li>
                <li>
                    <div className='tmb'>
                        <img src='https://www.mcdonalds.co.kr/upload/main/card/1680590534707.jpg'/>
                    </div>
                    <div className='con'>
                        <strong>
                        상콤달콤!
                        <br/>
                        NEW 자두 천도복숭아 칠러 출시!
                        </strong> 
                    </div>
                </li>
            </ul>
        </Container>
    )
}

export default MainInner

const Container = styled.div`
    width: 1168px;
    margin: 0 auto;
    padding-top: 150px;
    h2{
        margin: 0 0 60px;
        color: #292929;
        font-size: 40px;
        font-weight: 600;
        line-height: 1;
    }
    .menuList{
        margin: 0 0 -35px -35px;
    }
    .menuList li{
        float: left;
        width: 366px;
        height: 438px;
        margin: 0 0 35px 35px;
        display: block;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 3px 4px rgba(0,0,0,.1);
    }
    img{
        margin: 0;
        padding: 0;
        line-height: 0;
        vertical-align: top;
    }
    .con{
        padding: 24px 30px;
        height: 100%;
    }
    strong{
        max-height: 118px;
        overflow: hidden;
        font-size: 18px;
        color: #292929;
        font-weight: 600;
        line-height: 1.7;
    }

   @media (max-width: 1280px){
    width: 91.25%;
    h2{
        font-size: 30px;
        padding-left: 18px;
    }
    .menuList{
        margin: 0 auto;
    }
    .menuList li{
        width: 31.33%;
        margin: 0 0 35px 20px;
    }
   } 
   @media (max-width: 1024px){
    margin: 0 auto;
    .menuList li{
        width: 45%; 
        margin-right: 10px;
    }
    .menuList li:last-child{
        display: none;
    }
    }
    /* @media (max-width:375px){

    } */
`