export const fetchStoreLocations = async () => {
    try {
      const response = await fetch('/api/store-locations'); // 서버 API 엔드포인트
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching store locations:', error);
      return [];
    }
  };
  
  