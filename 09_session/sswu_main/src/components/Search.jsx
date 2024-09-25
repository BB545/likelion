import React, { useRef, useState } from 'react';
import search_btn from '../assets/img/icon/search.svg';
import Slider from './Section/Slider';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import list from '../assets/img/icon/list.svg';
import like from '../assets/img/icon/like.svg';

const { kakao } = window;

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [places, setPlaces] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const mapRef = useRef();

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearch = () => {
        const ps = new kakao.maps.services.Places();
        const map = mapRef.current;

        ps.keywordSearch(keyword, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                setPlaces(data);
                const bounds = new kakao.maps.LatLngBounds();

                data.forEach(place => {
                    bounds.extend(new kakao.maps.LatLng(place.y, place.x));
                });
                map.setBounds(bounds);
            } else {
                setPlaces([]);
            }
        });
    };

    const handlePlaceClick = (place) => {
        setSelectedPlace(place);
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='Search_wrap container'>
            <Slider />
            <div className="search_input_box">
                <input type="text"
                    className='search_input'
                    onChange={handleInputChange}
                    placeholder='장소를 검색해주세요!'
                />
                <img src={search_btn} alt="search_btn"
                    className='search_btn'
                    onClick={handleSearch}
                />
            </div>
            <div className="search_map_box">
                <div className="search_map_list" onClick={handleModalToggle}>
                    목록보기
                    <img src={list} alt={list} className="list_icon" />
                </div>
                <Map
                    center={{ lat: 37.5925, lng: 127.0164 }}
                    style={{ width: '336px', height: '336px' }}
                    level={3}
                    className='search_map'
                    ref={mapRef}
                >
                    {places.map((place) => (
                        <MapMarker
                            key={place.id}
                            position={{ lat: place.y, lng: place.x }}
                            clickable={true}
                            onClick={() => handlePlaceClick(place)}
                        >
                        </MapMarker>
                    ))}
                </Map>
            </div>
            {isModalOpen && (
                <div className="modal" onClick={handleModalToggle}>
                    <div className="modal_content slide-down" onClick={(e) => e.stopPropagation()}>
                        <div className="bar" onClick={handleModalToggle}></div>
                        <div className="modal_title">
                            "{keyword}" 주변에 있는 곳
                        </div>
                        <ul>
                            {places.map((place) => (
                                <li key={place.id} className='modal_list_item' onClick={() => handlePlaceClick(place)}>
                                    {place.place_name.length > 15
                                        ? `${place.place_name.substring(0, 15)}...`
                                        : place.place_name}
                                    <img src={like} alt={like} className="list_item_like" onClick={() => alert('로그인 후 이용 가능합니다')} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {selectedPlace && (
                <div className="place_info_modal" onClick={() => setSelectedPlace(null)}>
                    <div className="place_modal slide-down" onClick={(e) => e.stopPropagation()}>
                        <div className="bar" onClick={() => setSelectedPlace(null)}></div>
                        <h2>{selectedPlace.place_name}</h2>
                        <p>{selectedPlace.address_name}</p>
                        {selectedPlace.phone && <p>전화번호: {selectedPlace.phone}</p>}
                        {selectedPlace.opening_hours && <p>영업 시간: {selectedPlace.opening_hours}</p>}
                        {selectedPlace.rating && <p>평점: {selectedPlace.rating}</p>}
                        {selectedPlace.review_count && <p>리뷰 수: {selectedPlace.review_count}</p>}
                        {selectedPlace.website && <p><a href={selectedPlace.website} target="_blank" rel="noopener noreferrer">웹사이트 방문</a></p>}
                        {selectedPlace.photos && selectedPlace.photos.map((photo, index) => (
                            <img key={index} src={photo} alt={`Photo of ${selectedPlace.place_name}`} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search