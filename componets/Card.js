import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Right } from 'native-base';
import {StyleSheet} from 'react-native'
export default class CardExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content padder={true}>
                    <Card >
                        <CardItem button  onPress={() => {alert('this is a header')}} header bordered={true}>
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem >
                            <Body>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur corporis deserunt dolores fugiat modi quod rerum ut vero. Debitis delectus et ex minima natus officia possimus provident quos soluta.
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered={true}>
                            <Text  style={styles.textStyle}>GeekyAnts</Text>
                        </CardItem>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text >Google Plus</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    textStyle:{
        textAlign:'center'
    }
});