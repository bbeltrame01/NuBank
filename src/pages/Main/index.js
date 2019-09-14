import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'; //https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html

import Header from '~/components/Header';

import Tabs from '~/components/Tabs';

import Menu from '~/components/Menu';

import { 
  Container, Content, Card, 
  CardHeader, CardContent, CardFooter, 
  Title, Description, Annotation,
} from './styles';

export default function Main(){
  let offset = 0;
const translateY = new Animated.Value(0);

const animatedEvent = Animated.event(
  [
    {
      nativeEvent: {
        translationY: translateY,
      },
    },
  ],
  { useNativeDriver: true },
); 

function onHandlerStateChanged(event) {
  if (event.nativeEvent.oldState === State.ACTIVE){
    let opened = false;
    const { translationY } = event.nativeEvent;

    offset += translationY; 

    if (translationY >= 100){ // maior que 100 = Aberto
      opened = true;      
    } else {
      translateY.setValue(offset);
      translateY.setOffset(0);
      offset = 0;
    }

    Animated.timing(translateY, {
      toValue: opened ? 395 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      offset = opened ? 395 : 0;
      translateY.setOffset(offset);
      translateY.setValue(0);
    });
  }
}
  return(
    <Container>
      <Header />

      <Content>

      <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [0, 400],
                outputRange: [0, 315],
                extrapolate: "clamp",
              }), 
            }],
          }}
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ -1.850,53</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Compra no valor de R$ 2,50 no cartão negada. Cartão de crédito bloqueado. 
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
