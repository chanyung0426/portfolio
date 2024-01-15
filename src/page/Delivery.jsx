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
        <legend>맥딜리버리 주문</legend>
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
    </DeliveryContainer>
    
  );
};

export default DeliveryForm;

const DeliveryContainer = styled.div`
  .delivery-form {
  max-width: 400px;
  margin: 0 auto;
}

fieldset {
  width: 50%;
  margin: 0 auto;
  border: 1px solid #ddd;
  padding: 0px 60px;
  margin-top: 250px;
  border:none
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
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background-color: #45a049;
}

`