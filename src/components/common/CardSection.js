import React from 'react';
import { View } from 'react-native';

export class CardSection extends React.Component {

  render() {
    return (
      <View style={ style.containerStyle }>
        { this.props.children }
      </View>
    );
  }
}

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}