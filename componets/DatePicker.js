import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';
export default class DatePickerExample extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };

    }
    setDate=(newDate) =>{
        this.setState({ chosenDate: newDate });
    };
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <DatePicker
                         defaultDate={new Date()}
                        // minimumDate={new Date(2018, 1, 1)}
                        // maximumDate={new Date(2030, 12, 31)}
                         locale={"en"}
                        // timeZoneOffsetInMinutes={undefined}
                        // modalTransparent={true}
                        // animationType={"fade"}
                        // androidMode={"default"}
                         placeHolderText="Select date"
                         textStyle={{ color: "green" }}
                         placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                    />
                    <Text>
                        Date: {this.state.chosenDate.toString().substr(4, 12)}
                    </Text>
                </Content>
            </Container>
        );
    }
}