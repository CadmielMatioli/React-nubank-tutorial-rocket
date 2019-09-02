import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

export default function Main(){
  return(
    <Container>
    <Header/>
        <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>R$ 190.530,91</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$20,00 recebida de Silvio Capelo hoje às 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
    <Tabs/>
    </Container>
    );
  }
