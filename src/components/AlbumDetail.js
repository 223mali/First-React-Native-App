import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = props => {
  const {
    albumTextContainerStyle,
    thumbnailContainerStyle,
    thumbnailStyle,
    albumTextTitleStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{uri: props.album.thumbnail_image}}
            style={thumbnailStyle}
          />
        </View>
        <View style={albumTextContainerStyle}>
          <Text style={albumTextTitleStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: props.album.image}} />
      </CardSection>

      <CardSection>
        <Button
          buttonPress={() => {
            Linking.openURL(props.album.url);
          }}>
          Buy Now!
        </Button>
      </CardSection>
    </Card>
  );
};
const styles = StyleSheet.create({
  albumTextContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  albumTextTitleStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 400,
    width: '100%',
  },
});

export default AlbumDetail;
