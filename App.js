import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Anatomy from './componets/Anatomy'
import AccordionExample from './componets/Accordion'
import BadgeExample from './componets/Badge'
import ButtonExample from './componets/Button'
import CardExample from './componets/Card'
import CardImage from './componets/CardImage'
import CheckBoxExample from './componets/checkBox'
import DatePickerExample from './componets/DatePicker'
import DeckSwiperExample from './componets/Deck Swiper'
import FABExample from './componets/FABs'
import FooterTabsExample from './componets/FooterTabs'
import FormExample from './componets/Form'
import HeaderExample from './componets/Header'
import ListIconExample from './componets/List'
import RadioButtonExample from './componets/RadioButton'
import SearchBarExample from './componets/SearchBar'
import SegmentExample from './componets/Segment'
import SpinnerExample from './componets/Spinner'
import SwipeableListExample from './componets/Swiper'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }
  render() {
      if (this.state.loading) {
          return <Expo.AppLoading />;
      }
    return (
     <SwipeableListExample/>
    );
  }
}
