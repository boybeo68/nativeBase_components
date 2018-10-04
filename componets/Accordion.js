import React, {Component} from "react";
import {
    Container,
    Header,
    Footer,
    Content,
    Accordion,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Title,
    View,
    FooterTab, Button
} from "native-base";

const dataArray = [
    {title: "First Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"},
    {title: "Second Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"},
    {title: "Third Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"}
];
export default class AccordionExample extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name='menu'/>
                    </Left>
                    <Body>
                    <Title>AccordionExample</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder={true}>
                    <Accordion dataArray={dataArray} icon="add" expandedIcon="md-albums"
                               iconStyle={{color: "green"}}
                               expandedIconStyle={{color: "red"}}
                               headerStyle={{ backgroundColor: "#b9a2f8" }}
                               contentStyle={{ backgroundColor: "#f6acf8" }}/>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}