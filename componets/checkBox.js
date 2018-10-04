import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class CheckBoxExample extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <ListItem>
                        <CheckBox checked={true}/>
                        <Body>
                        <Text>Daily Stand Up</Text>
                        </Body>
                    </ListItem>
                    <ListItem >
                        <CheckBox checked={this.state.checked} color="red" onPress={()=>{this.setState({checked:  !this.state.checked})}}/>
                        <Body>
                        <Text>Click to change check box afternoon</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} color="green"/>
                        <Body>
                        <Text>Finish list Screen</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}