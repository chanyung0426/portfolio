import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

function StoreFind() {
    const mapStyles = {
        height: '500px',
        width: '100%'
      };
      
    const defaultCenter = {
        lat: 37.7749, // 맥도날드의 위도
        lng: -122.4194 // 맥도날드의 경도
      };
      return (
        <div>
        <h2>매장 찾기 페이지</h2>
        <LoadScript googleMapsApiKey="AIzaSyAo7sJsXy3XAY7r9zyyrr7KTiSfcGLnInk">
          <GoogleMap    
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            {/* 맥도날드의 위치를 마커로 표시 */}
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
        </div>
      );
}

export default StoreFind
