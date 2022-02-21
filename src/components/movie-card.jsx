import { Box, Card, Icon, Image, Pressable, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default MovieCard = ({ item, navigation }) => {
  return (
      <Pressable
        onPress={() => {
          navigation.navigate({
            name: 'MovieDetails',
            params: { id: item.id },
          });
        }}
      >
        <Box alignItems='center'>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.image}
          alt={item.title}
        />
        <Text style={{...styles.text,fontWeight:'bold'}}>{item.original_title}</Text>
        <Text style={styles.text}>{item.release_date}</Text>
        <Text style={styles.text}>
          {item.vote_average}
          <AntDesign name='star' size={24} color='#cbcb04' />
        </Text>
        </Box>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 5,
    width: 300,
    height: 300,
  },
  text:{
    color:'white'
  }
});
