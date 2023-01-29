import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 218px;
  heigth: 32px;
  color: white;
  padding: 6px;
  font-weight: 600;
`;

export const BlueButton = styled(Button)`
  background: #0f52ba;
  border-radius: 0 0 8px 8px;
  height: 32x;
  width: 100%;
  &:hover {
    color: #0f52ba;
    background-color: #F5F5F5;
  }
`;

export const BlackButton = styled(Button)`
  background: #000000;
  border-radius: 0;
  color: #ffffff;
  width: 100%;
  heigth: 97px;
  padding: 32px;
  font-size: 24px;
  font-weigth: 700;
  line-height: 15px;
  margin-top: 6px;
  font-style: bold;
  &:hover {
    color: #000;
    background-color: #ffffff;
  }
  
`;

export const CartButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  heigth: 45px;
  border-radius: 8px;
  background-color: #ffffff;
  color: black;
  padding-inline: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.94px;
  font-family: Montserrat-Bold;
  cursor: pointer;
  padding-top: 12px;
  padding-bottom:12px;

`;
