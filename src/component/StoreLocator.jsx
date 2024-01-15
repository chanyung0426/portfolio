// StoreLocator.jsx
import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { fetchStoreLocations } from '../api/api'; // 위에서 생성한 서버 통신 함수



const StoreLocator = () => {
  const [storeLocations, setStoreLocations] = useState([]);
  const mapStyles = {
    height: '500px',
    width: '100%'
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 서버에서 매장 정보를 가져와 state에 설정
    const getStoreLocations = async () => {
      const locations = await fetchStoreLocations();
      setStoreLocations(locations);
    };

    getStoreLocations();
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAo7sJsXy3XAY7r9zyyrr7KTiSfcGLnInk">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={storeLocations.length > 0 ? storeLocations[0].location : { lat: 0, lng: 0 }}
      >
        {/* 서버에서 받아온 매장 위치 정보를 마커로 표시 */}
        {storeLocations.map((location) => (
          <Marker key={location.id} position={location.location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default StoreLocator;