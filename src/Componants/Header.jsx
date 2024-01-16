import styled from "styled-components";
export const HeaderComponant = styled.header`
  display: flex;
  width: 100%;
  border-redius: 100px;
  font-size: 25px;
  background-color: black;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 10px 0 black;
`;

export const AppNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const SearchIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-redius: 10px;
`;
export const AppName = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
export const SearchContainer = styled.div`
  border-radius: 25px;
  width: 50%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: white;
  height: 40px;
`;
export const SearchImg = styled.img`
  width: 25px;
  height: 22px;
  margin: 10px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
`;
