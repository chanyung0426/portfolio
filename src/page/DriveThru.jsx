import React from 'react'
import styled from 'styled-components'

function DriveThru() {
    return (
        <DriveThruContainer>

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
  position: absolute;
  margin-top: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30%;
  z-index: -9999;
p{
  position: absolute;
  top: -10%;
  left: 25%;
  margin-top: 250px;
  font-weight: 600;
  line-height: 1.5;
  color: #808080;
}
.driveVideo{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 1168px;
  height: 657px;
  margin-top: 60px;
  border-radius: 10px;
  background: #f8f8f8;
  padding: 30px;
}

`