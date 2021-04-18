import React from 'react';
import {View} from 'react-native';

import style from './style';

const Header = ({leftChildren, centerChildren, rightChildren}) => {
  return (
    <View style={style.container}>
      {leftChildren && (
        <View style={[style.content, style.contentLeft]}>{leftChildren}</View>
      )}
      {centerChildren && (
        <View style={[style.content, style.contentCenter]}>
          {centerChildren}
        </View>
      )}
      {rightChildren && (
        <View style={[style.content, style.contentRight]}>{rightChildren}</View>
      )}
    </View>
  );
};

export default Header;
