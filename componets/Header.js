import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle, Text} from 'native-base';

export default class HeaderExample extends Component {
    render() {
        return (
            <Container style={{backgroundColor: "#87cefa"}}>
                <Header  >
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'/>
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    <Subtitle>Subtitle</Subtitle>
                    </Body>
                    <Right>

                        <Button transparent>
                            <Icon name='search'/>
                        </Button>
                        <Button transparent>
                            <Icon name='home'/>
                        </Button>
                        <Button transparent>
                            <Icon name='book'/>
                        </Button>
                        <Button transparent>
                            <Icon name='more'/>
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}