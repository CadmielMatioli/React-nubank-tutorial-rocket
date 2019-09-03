import React from 'react';

import {Container, Code, NavItem, NavText, Nav, SignOutButton, SignOutButtonText} from './styles';

import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({translateY}){
  return(
    <Container style={{
      opacity:translateY.interpolate({
        inputRange:[0, 150],
        outputRange:[0, 1],
      }),
    }}
    >
      <Code>
        <QRCode
          value="https://google.com"
          size={80}
          bgColor="#FFF"
          fgColor="#8B10AE"
        />
      </Code>
       <Nav>
         <NavItem>
            <Icon name="help-outline" size={20} color="#FFF"/>
            <NavText>Me Ajuda</NavText>
          </NavItem>
          <NavItem>
            <Icon name="person-outline" size={20} color="#FFF"/>
            <NavText>Perfil</NavText>
          </NavItem>
          <NavItem>
            <Icon name="credit-card" size={20} color="#FFF"/>
            <NavText>Configurar cartão</NavText>
          </NavItem>
          <NavItem>
            <Icon name="smartphone" size={20} color="#FFF"/>
            <NavText>Configuracões do app</NavText>
          </NavItem>
       </Nav>
       <SignOutButton onPress={() => {}}>
          <SignOutButtonText>Sair</SignOutButtonText>
       </SignOutButton>
    </Container>
  );
}
