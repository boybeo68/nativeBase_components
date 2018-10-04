import React, {Component} from 'react';
import {Container, Header, Content, Button, Text, Footer, Icon} from 'native-base';

export default class ButtonExample extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content padder>
                    <Button iconLeft light>
                        <Icon name='arrow-back'/>
                        <Text>Back</Text>
                    </Button>
                    <Button rounded primary><Text> Primary </Text></Button>
                    <Button iconLeft transparent success>
                        <Icon name='home'/>
                        <Text> Success </Text></Button>
                    <Button full info><Text> Info </Text></Button>
                    <Button disabled small bordered style={{margin: 20}}><Text> Warning </Text></Button>
                    <Button iconRight danger>
                        <Text> Danger </Text><Icon name='book'/></Button>
                    <Button   block dark><Text> Dark </Text></Button>
                </Content>
                <Footer/>
            </Container>
        );
    }
}