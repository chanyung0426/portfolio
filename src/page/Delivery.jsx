import React, { useState } from 'react';
import styled from 'styled-components';

const DeliveryForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 맥딜리버리 주문을 처리하는 로직을 추가할 수 있습니다.
    console.log('맥딜리버리 주문이 완료되었습니다.');
  };

  return (
    <DeliveryContainer>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>맥딜리버리 주문하기</legend>
        <div>
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">주소:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">전화번호:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">주문하기</button>
        </div>
      </fieldset>
    </form>

    <ul className='cheklist'>
      <li>매장 별 무료 배달 주문 금액 및 소액주문비는 다르게 운영될 수 있으며, 주문 시 결제 페이지에서 미리 확인 하실 수 있습니다.</li>
      <li>맥딜리버리 가격은 매장과 상이합니다.</li>
      <li>배달 가능 구역 내에서도 기상조건이나 기타 매장의 사정에 따라 배달 서비스 이용이 어려울 수 있습니다.</li>
      <li>주문이 밀리는 시간대에는 배달이 다소 지연될 수 있습니다. 고객님의 너그러운 이해 부탁 드립니다.</li>
      <li>메뉴 주문 시 제공 되는 케찹류나 기타 물품의 경우 기본 제공 수량 기준으로 배달하여 드립니다.</li>
      <li>맥딜리버리의 운영 시간은 매장과 상이할 수 있습니다.</li>
    </ul>

    </DeliveryContainer>
    
  );
};

export default DeliveryForm;

const DeliveryContainer = styled.div`
  .delivery-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 0 60px;  
}

fieldset {
  width: 50%;
  margin: 0 auto;
  border: 1px solid #ddd;
  padding: 0px 60px;
  margin-top: 250px;
  border: none;
  z-index: -9999;
}

fieldset div{
  padding-top: 16px;
}

legend {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

button {
  background-color: #ffbc0d;
  color: #000;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background-color: #ffbc0d;
}

ul{
  width: 50%;
  margin: 0 auto;
  padding: 100px 0px 0px 30px;
}

ul > li{
    font-weight: 600;
    color: #808080;
    line-height: 1.9;
}

ul > li:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: -2px 10px 0 -16px;
    vertical-align: middle;
    border-radius: 100%;
    background: #ffbb0a;
}
`