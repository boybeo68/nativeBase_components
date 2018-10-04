import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input,Label,Icon,Picker, Textarea } from 'native-base';
export default class FormExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel  last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="home" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#ea151d" }}
                                placeholderIconColor="#ea151d"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Item>
                        <Item success={false}>
                            <Input placeholder='Icon Alignment in Textbox'/>
                            <Icon active name='swap' />
                        </Item>
                        <Textarea rowSpan={5} bordered placeholder="Textarea" />
                    </Form>
                </Content>
            </Container>
        );
    }
}