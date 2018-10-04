import React, {Component} from 'react';
import {Container, Header, Content, List, ListItem, Text, Left, Right, Body, Thumbnail} from 'native-base';

export default class ListIconExample extends Component {
    render() {
        var items = [
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
        return (
            <Container>
                <Header/>
                <Content>
                    <List dataArray={items}
                          renderRow={(item) =>
                              <ListItem avatar>
                                  <Left>
                                      <Thumbnail source={{uri: item.image}}/>
                                  </Left>
                                  <Body><Text>{item.text}</Text></Body>
                                 <Right>
                                     <Text note>3:43 pm</Text>
                                 </Right>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}