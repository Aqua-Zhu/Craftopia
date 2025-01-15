// GoogleMap.jsx
import { useEffect, useRef } from 'react';

function GoogleMap() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);

  useEffect(() => {
    // 避免重複載入地圖
    if (mapInstance.current) return;

    const loadGoogleMaps = () => {
      // 檢查是否已經有 script 標籤
      if (document.querySelector('script[src*="maps.googleapis.com/maps/api"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA_1pUjaS2e_yjGKVVDxVxlsFwEiemD2FM&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', initMap);
      document.head.appendChild(script);
    };

    function initMap() {
      if (!mapRef.current || mapInstance.current) return;

      // 板橋車站站前廣場的經緯度
      const banqiaoStation = { 
        lat: 25.013885675354178,
        lng: 121.46252007384798 
      };

      // 創建地圖
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: banqiaoStation,
        zoom: 17,
        mapId: 'YOUR_MAP_ID' // 可選，如果您有自訂地圖樣式
      });

      // 使用基本標記替代方案
      markerInstance.current = new google.maps.Marker({
        position: banqiaoStation,
        map: mapInstance.current,
        title: "板橋車站站前廣場"
      });
    }

    // 檢查 Google Maps API 是否已載入
    if (window.google && window.google.maps) {
      initMap();
    } else {
      loadGoogleMaps();
    }

    // 清理函數
    return () => {
      if (markerInstance.current) {
        markerInstance.current.setMap(null);
      }
      mapInstance.current = null;
      markerInstance.current = null;
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}

export default GoogleMap;