import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon,Badge } from 'native-base';
export default class FooterTabsExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab vertical={true}>
                        <Button active>
                            <Text>Apps</Text>
                        </Button>
                        <Button badge vertical={true}>
                            <Badge danger>
                                <Text>2</Text>
                            </Badge>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button >
                            <Icon name="apps" />
                        </Button>
                        <Button >
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}