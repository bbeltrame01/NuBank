import React from 'react';

//react-native-qrcode-svg: https://www.npmjs.com/package/react-native-qrcode-svg
import QRCode from 'react-native-qrcode-svg'; 

import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
    Container, Code, Nav, 
    NavItem, NavText, 
    SignOutButton, SignOutButtonText,
} from './styles';

export default function Menu({ translateY }) {
    return(
        <Container style={{
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],
            }),
          }}>
            <Code>
                <QRCode 
                    value="https://github.com/bbeltrame01/myNuBank"
                    size={70}
                    backgroundColor="#FFF"
                    color="#8B10AE"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Meu Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurar App</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}