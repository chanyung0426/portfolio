import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const mcdonaldsLocations = [
  { name: '청담DT점', location: '서울 강남구 도산대로 407', call: '02-6207-1800'},
  { name: '압구정CGV점', location: '서울 강남구 논현로 848 1층', call: '02-6207-2700'},
  { name: '신사역점', location: '서울 강남구 도산대로 123 2층', call: '02-6203-6400'},
  { name: '강남구청점', location: '서울 강남구 선릉로 667', call: '02-6204-6400'},
  { name: '학동역점', location: '서울 강남구 논현로 667', call: '02-6203-5400'},
  { name: '선릉점', location: '서울 강남구 테헤란로 326 아이타워 1층 103호', call: '02-6207-9100'},
  { name: '코엑스점', location: '서울 강남구 영동대로 513 지하1층 A102호', call: '02-6743-3700'},
  { name: '삼성역점', location: '서울 강남구 삼성로92길 29 도일빌딩 1층', call: '02-6203-4600'},
  { name: '강남 2호점', location: '서울 강남구 테헤란로 107 메디타워2층', call: '02-6205-6400' },
  { name: '서초뱅뱅점', location: '서울 서초구 강남대로 305, 101호(서초 현대렉시온)', call: '02-6227-4500' }, 
  { name: '서울교대점', location: '서울 서초구 서초대로 316(서초동)', call: '02-6242-6400' },
  { name: '양재점', location: '서울 서초구 강남대로 213', call: '02-6242-2100' },
];

function McDonaldsStoreList() {
  const [infoWindows, setInfoWindows] = useState([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=cbad930b23de0be4f69ac3c477803db7&libraries=services';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Kakao 객체를 window에 할당하여 Kakao.maps에 접근할 수 있도록 함
      window.kakao.maps.load(() => {
        initMap();
      });
    };
  }, []);

  const initMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.498661, 127.028741), // 초기 지도 중심 좌표
      level: 3, // 초기 줌 레벨
    };
    const map = new window.kakao.maps.Map(container, options);

    // 맥도날드 매장 위치에 마커 추가
    mcdonaldsLocations.forEach((store) => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(store.location, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(result[0].y, result[0].x),
            map: map,
            title: store.name,
          });

          const infowindow = new window.kakao.maps.InfoWindow({
            content:`
            <div style="
            padding: 5px;
            font-size: 20px;
            font-weight: 600;
            color: #ff7f00;
            ">
            ${store.name}
            </div>
            `,
          });

          window.kakao.maps.event.addListener(marker, 'click', function () {
            // Close all other info windows before opening a new one
            infoWindows.forEach((iw) => iw.close());
            infowindow.open(map, marker);
          });

          setInfoWindows((prevWindows) => [...prevWindows, infowindow]);
        }
      });
    });
  };


  return (
    <ListContainer>
      <div id="map" style={{ 
           
            }}> 
      </div>
      <List>
        {mcdonaldsLocations.map((store, index) => (
          <li key={index}>
          <strong>{store.name}</strong> : {store.location} : {store.call}
          </li>
        ))}
      </List>
    </ListContainer>
  );
}

export default McDonaldsStoreList;

const ListContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px 0 60px;
  #map{ 
    height: 600px;
    width: 1168px; 
    margin-top: 100px;
    border-radius: 10px;
  }
  @media (max-width:1280px){
      width: 91.25%;
      #map{
        width: 100%;
        margin-top: 70px;
      }
  }
`
const List = styled.ul`
  margin: 0 auto;
  padding-top: 80px;  
  li{
    padding: 15px;
    color: #808080;
    border-bottom: 1px solid #000;
    strong{
      font-size: 16px;
      font-weight: 600;
      color: #000;
    }
  }
  @media (max-width:768px){
    li{
      font-size: 14px;
    }
  }
`