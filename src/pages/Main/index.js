import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import Tabs from '~/components/Tabs';

import Menu from '~/components/Menu';

import { 
  Container, Content, Card, 
  CardHeader, CardContent, CardFooter, 
  Title, Description, Annotation,
} from './styles';

export default function Main(){
  return(
    <Container>
      <Header />
      <Content>
      <Menu />
        <Card>
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
      </Content>
      <Tabs />
    </Container>
  );
}
