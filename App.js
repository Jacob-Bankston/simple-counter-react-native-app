import React, { useState, useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Image } from "react-native";
import { Card, Button, DefaultTheme } from "react-native-paper";
import {
  MainContainer,
  LargeContainer,
  SmallContainer,
  Paragraph,
  Buttons
} from "./components/styles";
import {
  Provider as ReduxProvider,
  useSelector,
  useDispatch,
} from 'react-redux';
import { store } from "./store.js";
import styled from "styled-components/native";
import { setConfigurationAsync } from "expo/build/AR";
import { maxFromBits } from "uuid-js";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    primary: "#9eedff",
    background: "white"
  }
};

function ReduxButtons(){
  const dispatch = useDispatch();
  return (        
  <Buttons>
    <Card>
      <Card.Actions>
        <Button icon="add" onPress={() => dispatch({type: "INCREMENT"})} />
      </Card.Actions>
    </Card>
    <Card>
      <Card.Actions>
        <Button icon="remove" onPress={() => dispatch({type: "DECREMENT"})} />
      </Card.Actions>
    </Card>
    <Card>
      <Card.Actions>
        <Button
          icon="clear"
          onPress={() => dispatch({type: "CLEAR"})} 
        />
      </Card.Actions>
    </Card>
  </Buttons>
  )
}

function Hold() {
  const [item, setItem] = useState(null);
  const reduxItem = useSelector(state => state.count);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  let pic = {
    uri:
      "https://images.unsplash.com/photo-1528872042734-8f50f9d3c59b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80%20750w"
  };
  return (
    <PaperProvider theme={theme}>
      <MainContainer>
        <Image source={pic} style={{ width: 450, height: 200 }} />
        <Paragraph>{reduxItem}</Paragraph>
        <SmallContainer />
        <Paragraph>Press the button to increase the counter.</Paragraph>
        <SmallContainer />
        <SmallContainer />
        <ReduxButtons />
        <SmallContainer />
        <LargeContainer />
      </MainContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Hold />
    </ReduxProvider>
  );
}