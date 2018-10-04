import React, {Component} from 'react';
import {Image} from 'react-native';
import {
    Container,
    Header,
    View,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Icon,
    Button
} from 'native-base';

const cards = [
    {
        text: 'Card One',
        name: '1',
        image: 'https://i.ytimg.com/vi/-hkghqh-8Ss/hqdefault.jpg',
    },
    {
        text: 'sexy',
        name: '2',
        image: 'https://kenh14cdn.com/2017/2-1494819711684.jpg',
    },
    {
        text: 'cuốn hút',
        name: '3',
        image: 'https://kenh14cdn.com/2017/1-1503387330338.jpg',
    },
    {
        text: 'Anh lâm nhìn là mê',
        name: '4',
        image: 'http://media.doisongphapluat.com/277/2014/4/28/ngoc-trinh2.jpg',
    },
    {
        text: 'góc khuất tâm hồn 22',
        name: '5',
        image: 'http://kenh14cdn.com/2015/img-9649-1449505019079-42-0-703-1500-crop-1449505059937.jpg',
    },
];
export default class DeckSwiperExample extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header/>
                <View>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards}
                        onSwipeRight={() => {
                            alert('test')
                        }}
                        onSwipeLeft={() => {
                        }}
                        looping={false}
                        renderItem={item =>
                            <Card style={{elevation: 2}}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{uri: item.image}}/>
                                        <Body>
                                        <Text>{item.text}</Text>
                                        <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{height: 300, flex: 1}} source={{uri: item.image}}/>
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{color: '#ED4A6A'}}/>
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }

                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    flex: 1,
                    position: "absolute",
                    bottom: 50,
                    left: 0,
                    right: 0,
                    justifyContent: 'space-between',
                    padding: 15
                }}>
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back"/>
                        <Text>Swipe Left</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Text>Swipe Right</Text>
                        <Icon name="arrow-forward"/>
                    </Button>
                </View>
            </Container>
        );
    }
}