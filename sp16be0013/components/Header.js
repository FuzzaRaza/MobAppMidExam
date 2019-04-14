import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Fuzza Raza</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}