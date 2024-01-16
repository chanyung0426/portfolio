import React, { useEffect } from 'react'

const {kakao} = window;

function Kakao() {

    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.498661, 127.028741), //지도의 중심좌표
            level: 3
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        // 마커가 표시될 위치
        const markerPosition  = new kakao.maps.LatLng(37.498661, 127.028741); 

        // 마커를 생성         
        const marker = new kakao.maps.Marker({
        position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);
    },[])
    
    return (
        <div id='map' style={{
            width: '1168px',
            height: '600px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}></div>
    )
}

export default Kakao
