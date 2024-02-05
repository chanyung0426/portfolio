import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import career01 from '../img/career01.jpg';
import career02 from '../img/career02.jpg';

function Recruit() {
    return (
        <Container>
            <div className='inner01'>
                <Outbox></Outbox>
                <div className='txt_inner01'>
                <p className='txt'>
                맥도날드의 시간제(Part Time) 근무자를<br/> 우리는 크루(Crew) 라고 부릅니다.<br/>
                즐거운 일터에서 함께 일하며 경험을 쌓고, 다양한 혜택과 매니저로 성장할 수 
                있는 최고의 기회를 누려보세요!
                </p>
                <Link className='submit1' to='https://mcdonalds.recruiter.co.kr' target='_blank'>크루지원하기</Link>
                </div>
            </div>

            <div className='inner02'>
                <Outbox2></Outbox2>
                <div className='txt_inner02'>
                <p className='txt02'>
                사회인으로 첫 발을 내딛는 지금,<br/> 당신은 중요한 선택의 순간에 서 있습니다.<br/>
                당신의 첫번째 선택이 맥도날드가 되기를 희망합니다. 
                늘 현명한 선택으로 성공을 창조해 온 맥도날드, 이곳에서 당신의 소중한 꿈을 펼쳐보세요!
                </p>
                <Link className='submit2' to='https://mcdonalds.recruiter.co.kr' target='_blank'>레스토랑 매니저 / 본사 직원 지원하기</Link>
                </div> 
            </div>
        </Container>
    )
}

export default Recruit

const Container = styled.div`
width: 1168px;
margin: 0 auto;
margin-top: 150px;
padding: 30px 0 5%;
.inner02{
    width:100%;
    margin-top: 70px;
    float: left;
}
.txt{
    float: left;
    width: 45%;
    margin-top: 60px;
    padding-left: 20px;
    color: #808080;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.9;
}
.txt02{
    float: left;
    width: 45%;
    margin-top: 80px;
    color: #808080;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.9;
}
.submit1{
    min-height: 72px;
    padding: 0 38px;
    margin-top: 30px;
    font-size: 15px;
    line-height: 70px;
    border-radius: 70px;
    
    display: inline-block;
    color: #292929;
    font-weight: bold;
    background: #ffbc0d;
}
.submit2{
    min-height: 72px;
    padding: 0 38px;
    margin-top: 30px;
    font-size: 15px;
    line-height: 70px;
    border-radius: 70px;
    
    display: inline-block;
    color: #292929;
    font-weight: bold;
    background: #ffbc0d;
}
`

export const Outbox = styled.div`
    float: left;
    width: 50%;
    height: 450px;
    background: url(${career01}) no-repeat;
`
export const Outbox2 = styled.div`
    float: right;
    width: 50%;
    height: 450px;
    background: url(${career02}) no-repeat;
`