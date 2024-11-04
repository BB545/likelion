import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

const RoadMap = () => {
    return (
        <main id='road_map_container'>
            <div id="map_inner">
                <div id="map_inner_location">
                    <span>오시는 길</span>
                </div>
                <h3 id='map_inner_title'>토스뱅크 역삼</h3>
                <article id='map_inner_content'>
                    <dl>
                        <dt>주소</dt>
                        <dd>서울특별시 강남구 테헤란로 131, 한국지식재산센터 11층 토스뱅크 대면지원센터</dd>
                    </dl>
                    <dl>
                        <dt>전화번호</dt>
                        <dd>1661-7654(컨택센터)</dd>
                    </dl>
                </article>
                <div id="map_inner_kakao_map">
                    <Map
                        center={{ lat: 37.5000287, lng: 127.0329141 }}
                        style={{ width: '100%', height: '100%' }}
                        level={4}
                    >
                        <MapMarker position={{ lat: 37.5000287, lng: 127.0329141 }}></MapMarker>
                    </Map>
                </div>
            </div>
        </main>
    )
}

export default RoadMap