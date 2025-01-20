import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, } from '@react-google-maps/api';

import Hearttoggle from "./Hearttoggle";
import Hearttoggle2 from "./Hearttoggle2";





const MyGmap = ({ filteredStore }) => {

    const mapContainerStyle = {
        width: "100%",
        height: "620px",
        position: "relative",
    };

    const center = { lat: 25.0374865, lng: 121.5647688 };
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAL1d6SxUMHoHTqqWho89i7bL_cLkpnd2s",
        language: 'zh-TW',
        region: 'TW',

    });




    const mapStyles = [

        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#FBF8F1"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dceae0"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.attraction",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f5e6e6"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d9e5d7"
                }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#8f8f8f"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dddddd"
                },
                {
                    "weight": 2
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#D4AB8E"
                },
                {
                    "weight": 4
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#D4AB8E"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#b7d7e6"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

    /* 管理點擊選中的 Marker */
    const [selectedMarker, setSelectedMarker] = useState(null);





    /* 管理地圖中心點狀態 */
    const [mapCenter, setMapCenter] = useState({ lat: 25.04168209885793 , lng: 121.54373580643643 }); // 初始中心点

    /* 點擊marker後更改地圖中心點位置 */
    const handleMarkerClick = (marker) => {
        setMapCenter({ lat: marker.lat, lng: marker.lng }); // 更新地圖中心點狀態
    };


    /* markers hover 狀態 */
    /* 管理目前hover的marker */
    const [hoveredMarker, setHoveredMarker] = useState(null);

    const handleMouseOver = (marker) => {
        setHoveredMarker(marker); // 記錄被 hover 的標記
    };

    const handleMouseOut = () => {
        setHoveredMarker(null); // 清除 hover 標記
    };






    return isLoaded ? (
        <div className="googleMapSection">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={13}



                options={{
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    clickableIcons: false,
                    styles: mapStyles, // 使用內嵌樣式

                }}
            >

                {filteredStore.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        title={marker.storeName}
                        animation={google.maps.Animation.DROP}
                        icon={
                            {
                                url: marker.icon, // "/images/icons-mapPottery.svg",
                                scaledSize: selectedMarker === marker ? new window.google.maps.Size(60, 60) : new window.google.maps.Size(45, 45) && hoveredMarker === marker.id ? new window.google.maps.Size(60, 60) : new window.google.maps.Size(45, 45),
                            }
                        }
                        onClick={() => {

                            setSelectedMarker(marker); // 更新選中的 marker
                            handleMarkerClick(marker);


                        }}

                        onMouseOver={() => handleMouseOver(marker.id)} // 設置 hover 事件
                        onMouseOut={handleMouseOut} // 設置離開事件

                    />

                ))}

                {selectedMarker && (

                    <InfoWindow
                        position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                        options={{
                            pixelOffset: new window.google.maps.Size(-4, -64), // 資訊視窗向上偏移
                        }}
                        onCloseClick={() => { setSelectedMarker(null) }} // 點擊關閉按鈕，隱藏 InfoWindow

                    >
                        <div className="windowInfo">
                            <div className="InfoTag">
                                <div className="InfoStoreDetail">
                                    <p className="InfoLocation">{selectedMarker.location}</p>
                                    <p className={`InfoType  ${selectedMarker.tag === "pottery" ? "pottery" : ""}`} style={{
                                        backgroundImage: `url('./images/tag-${selectedMarker.tag}.svg')`,
                                    }}>{selectedMarker.type}</p>
                                </div>
                                <button onClick={() => { setSelectedMarker(null) }}>
                                    <img src="./images/icons-close.svg" alt="" />
                                </button>
                            </div>
                            <div className="InfoContent">
                                <img src="./images/icons-mapWorkshopLocation.svg" alt="" />
                                <h3><a href="#">{selectedMarker.storeName}</a></h3>
                            </div>

                        </div>
                    </InfoWindow>

                )}


            </GoogleMap>



            <div
                className={`map-overlay ${selectedMarker ? "active" : ""}`}
                style={{
                    position: "absolute",
                    bottom: "32px",
                    left: selectedMarker ? "16px" : "-444px", // 根据状态决定显示或隐藏
                    transition: "left 0.5s ease-in-out", // 滑入效果
                    zIndex: "998",
                }}
            >
                {selectedMarker && (



                    <div className="overlayContent">

                        <img className="storePhoto" src={`./images/store/${selectedMarker.image}`} alt="" />
                        <button
                            onClick={() => setSelectedMarker(null)}
                        >
                            <img src="./images/icons-closeBlack.svg" alt="" className="closeIcon"/>
                        </button>

                        <div className="content-bottom">
                            <div className="storeTitle">
                                <h3><a href="#">{selectedMarker.storeName}</a></h3>
                                {/* <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' /> */}


                                <Hearttoggle2  defaultChecked={false}></Hearttoggle2>



                            </div>

                            <div className="storeDetail">
                                <div className="storeAddress">
                                    <img src="./images/icons-phone.svg" alt="" />
                                    <p>{selectedMarker.phone}</p>
                                </div>
                                <div className="storeTime">
                                    <img src="./images/icons-mapStoreTime.svg" alt="" />
                                    <p>{selectedMarker.time}</p>
                                </div>
                                <div className="storeAddress">
                                    <img src="./images/icons-mapWorkshopLocation.svg" alt="" />
                                    <p >{selectedMarker.address}</p>
                                </div>

                            </div>
                            <p className="storeDescribe">{selectedMarker.detail}</p>
                            <a className="storeBtn" href="#" >前往店家頁 <img src="./images/icons-linkArrow.svg" alt="icon" /></a>
                        </div>
                    </div>
                )}
            </div>

        </div>)
        :

        (
            <>
            </>
        )



};

export default MyGmap

