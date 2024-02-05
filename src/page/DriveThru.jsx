import React from 'react'
import styled from 'styled-components'

function DriveThru() {
    return (
        <DriveThruContainer>
        <h2>맥드라이브는 어떻게 이용하나요?</h2>
        <p>운전 중에도 24시간 간편하고 빠르게!<br/>
        차 안에서 주문하고, 차 안에서 바로 받아 맛있는 맥도날드를 즐겨보세요.
        </p> 
        <div className='driveVideo'>
        <iframe width="100%" height="657" src="https://www.youtube.com/embed/BiMkqfVNmnk?si=gPPP6EIDHliXbB_k" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
        </div>
        </DriveThruContainer>
    )
}

export default DriveThru

const DriveThruContainer = styled.div`
  width: 1168px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 30px 0 60px;
  h2{
    display: block;
    color: #292929;
    margin: 0 0 30px;
    font-size: 30px;
    font-weight: 600;
    line-height: 1;
  }  
p{
  margin-top: 50px;
  font-weight: 600;
  line-height: 1.5;
  color: #808080;
}
.driveVideo{
  margin: 0 auto;
  margin-top: 50px;
  width: 1168px;
  height: 657px;
  border-radius: 10px;
  background: #f8f8f8;
  padding: 30px;
}

`