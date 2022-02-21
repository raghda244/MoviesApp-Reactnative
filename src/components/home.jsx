import { Box, Card, FlatList, Heading, Text, VStack } from "native-base";
import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { getMovies } from "../actions/movie-action";
import {MoviesContext} from "../context/context"
import MovieCard from "./movie-card";

export default Home = (props)=>{
    const { state, dispatch } = useContext(MoviesContext);
    useEffect(()=>{
        const resolveGetMovies= async ()=>{
            dispatch(await getMovies());
        }
        resolveGetMovies();
    },[])
    return(
        <VStack style={styles.body}>
        <FlatList 
        ListHeaderComponent={<Text style={styles.header}>Popular Movies</Text>}
        data={state.list} 
        renderItem={({item})=><MovieCard item={item} {...props}/>}
        ItemSeparatorComponent={()=><Box style={{margin:30,borderBottomWidth:1,borderBottomColor:'grey'}}></Box> }
        />
        </VStack>
    );
}

const styles=StyleSheet.create({
    header:{
        textAlign:'center',
        margin:20,
        fontWeight:'bold',
        color:'white',
        fontSize:20
    },
    body:{
        backgroundColor:'#34495e'
    }
})