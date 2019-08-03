import { StyleSheet } from 'react-native';
import styled from "styled-components/native";
import Constants from 'expo-constants';

export const MainContainer = styled.View`
  flex: 1px;
  justify-content: center;
  align-items: stretch;
`

export const LargeContainer = styled.View`
  flex: 2px;
  height: 50px;
  background-color: powderblue;
  `
  
  export const SmallContainer = styled.View`
  flex: 1px;
  height: 50px;
  background-color: powderblue;
`

export const Paragraph = styled.Text`
  font-size: 30px;
  text-align: center;
  color: white;
  background-color: #9eedff;
`

export const Buttons = styled.View`
  text-align: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
`