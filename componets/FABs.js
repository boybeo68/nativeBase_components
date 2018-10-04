import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class FABExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    render() {
        return (
            <Container>
                <Header />
                <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        direction="left"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#5067FF' }}
                        position="topRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="share" />
                        <Button style={{ backgroundColor: '#34A34F' }}>
                            <Icon name="logo-whatsapp" />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                        </Button>
                        <Button disabled style={{ backgroundColor: '#DD5144' }}>
                            <Icon name="mail" />
                        </Button>
                    </Fab>
                </View>
            </Container>
        );
    }
}