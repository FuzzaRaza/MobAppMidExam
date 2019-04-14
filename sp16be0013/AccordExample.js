import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Objectives", content: "Lorem ipsum dolor sit amet" },
  { title: "Experience", content: "Lorem ipsum dolor sit amet" },
  { title: "EducationSections", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
        </Content>
      </Container>
    );
  }
}