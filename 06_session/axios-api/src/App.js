import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "http://apis.data.go.kr/6260000/FoodService/getFoodKr";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 10,
          pageNo: 1,
          resultType: 'json'
        }
      });
      console.log(URL);
      console.log(response);
      setData(response.data.getFoodKr);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  const items = data.item;

  if (!items || items.length === 0) return <div>No data found</div>;

  return (
    <div className="App">
      {items.map((item, index) => (
        <div key={index}>
          <p>식당명 : {item.PLACE}</p>
          <p>홈페이지 : <a href={item.HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">{item.HOMEPAGE_URL}</a></p>
          <p>주소 : {item.ADDR1}</p>
          <p>연락처 : {item.CNTCT_TEL}</p>
          <p>운영 시간 : {item.USAGE_DAY_WEEK_AND_TIME}</p>
          <p>대표 메뉴 : {item.RPRSNTV_MENU}</p>
          <img src={item.MAIN_IMG_NORMAL} alt='맛집 사진' />
        </div>
      ))}
    </div>
  );
};

export default App;
