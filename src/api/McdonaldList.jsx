import React, { useEffect } from 'react';

const mcdonaldsLocations = [
  { name: '서초뱅뱅점', location: '서울 서초구 강남대로 305, 101호(서초 현대렉시온)' },
  { name: '강남 2호점', location: '서울 강남구 테헤란로 107 메디타워2층' },
  { name: '서울교대점', location: '서울 서초구 서초대로 316(서초동)' },
  { name: '양재점', location: '서울 서초구 강남대로 213' },
  { name: '서초GS점', location: '서울 서초구 효령로49길 52 (서초동)' },
  // 추가적인 맥도날드 매장 정보를 필요에 따라 입력
];

function McDonaldsStoreList() {
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
        }
      });
    });
  };

  return (
    <div>
      <h2>맥도날드 매장 목록</h2>
      <div id="map" style={{ height: '600px', width: '1168px' }}></div>
      <ul>
        {mcdonaldsLocations.map((store, index) => (
          <li key={index}>
            <strong>{store.name}</strong>: {store.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default McDonaldsStoreList;