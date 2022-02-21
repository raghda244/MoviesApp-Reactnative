import { AntDesign } from '@expo/vector-icons';
import { Box, Image, Text, VStack } from 'native-base';
import { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { clearDetails, getMovieByID } from '../actions/movie-action';
import { MoviesContext } from '../context/context';

export default MovieDetails = ({ route }) => {
  const { state, dispatch } = useContext(MoviesContext);
  useEffect(() => {
    const resolveMovie = async () => {
      dispatch(await getMovieByID(route.params.id));
    };
    resolveMovie();
    return ()=>{
        dispatch(clearDetails())
    }
  }, []);

  return (
    <VStack alignItems='center'>
      {state.details.id && (
        <>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${state.details.poster_path}`,
            }}
            style={{...styles.image,marginTop:30}}
            alt={state.details.title}
          />
          <Text style={{ ...styles.text, fontWeight: 'bold' }}>
            {state.details.original_title}
          </Text>
          <Text style={styles.text}>{state.details.release_date}</Text>
          <Text style={styles.text}>
            {state.details.vote_average}
            <AntDesign name='star' size={24} color='#cbcb04' />
          </Text>
          <Text style={{...styles.text,marginHorizontal:40,marginTop:20,textAlign:'center'}}>
              {state.details.overview}
          </Text>
        </>
      )}
      {!state.details.id && (
          <Text style={styles.text}>Loading...</Text>
      )

      }
    </VStack>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 5,
    width: 300,
    height: 300,
  },
  text: {
    color: '#34495e',
  },
});
