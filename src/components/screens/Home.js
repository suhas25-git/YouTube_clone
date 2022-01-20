import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from '../Header';
import Card from '../Card';
import{useSelector} from 'react-redux'


export default function HomeScreen() {
  const carddata = useSelector(state=>{return state.cardData});
  return (
    <View style={{flex: 1}}>
      <Header />
     <FlatList
       data={carddata}
       renderItem={({item})=>{
         return (
           <Card
             videoId={item.id.videoId}
             title={item.snippet.title}
             channel={item.snippet.channelTitle}
             chanelpic={item.snippet.channelId}
           />
         );
       }}
       keyExtractor={item=>item.id.videoId}
     />
      
               
      
    </View>
  );
}


