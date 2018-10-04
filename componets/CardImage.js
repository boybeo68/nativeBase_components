import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Thumbnail,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Card,
    CardItem,
    View
} from 'native-base';
import {Image} from 'react-native';

export default class CardImage extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title> Tieu de </Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder={true}>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail
                                    source={{uri: 'http://streaming1.danviet.vn/upload/1-2017/images/2017-03-27/149058395882832-10t.jpg'}}/>
                                <View style={{flexDirection: 'column', margin: 10}}>
                                    <Text >Ngoc Trinh bikini</Text>
                                    <Text note={true}>very sexy </Text>
                                </View>

                            </Left>
                            <Body>

                            </Body>

                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image style={{height: 200, width: 300, flex: 1}}
                                   source={{uri: 'https://vcdn-ngoisao.vnecdn.net/2018/07/16/trinh1-1531708208_500x300.jpg'}}/>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur delectus dolor harum itaque quis vel? Aspernatur deleniti deserunt dolores ex, exercitationem facilis in obcaecati perferendis similique tempore, voluptate.
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button iconLeft={true} transparent>
                                    <Icon name='thumbs-up'/>
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles"/>
                                <Text>4 Comments</Text>
                            </Button>
                            </Body>
                            <Right>
                                <Text style={{color: '#0e31ff'}}>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}