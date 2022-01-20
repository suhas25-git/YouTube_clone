import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions,FlatList } from "react-native";
import Constant from "expo-constants";
import Header from "../Header";
import Card from "../Card";
import { useSelector } from "react-redux";

const Littlecard=({name})=>{
    
    return (
      <View
        style={{
          backgroundColor: "red",
          height: 45,
          width: Dimensions.get("screen").width / 2 - 10,
          borderRadius: 6,
          marginTop: 5,
          elevation: 5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 22,
            marginTop: 9,
          }}
        >
          {name}
        </Text>
      </View>
    );
}



const Explore=()=>{
    const carddata = useSelector((state) => {
      return state.cardData;
    });
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Littlecard name="Gaming" />
            <Littlecard name="Trending" />
            <Littlecard name="News" />
            <Littlecard name="Movie" />
            <Littlecard name="Music" />
            <Littlecard name="Fashion" />
          </View>
          <Text
            style={{
              margin: 8,
              fontSize: 22,
              borderBottomWidth: 1,
              borderBottomColor: "red",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Trending Videos!
          </Text>
          <FlatList
            data={carddata}
            renderItem={({ item }) => {
              return (
                <Card
                  videoId={item.id.videoId}
                  title={item.snippet.title}
                  channel={item.snippet.channelTitle}
                  chanelpic={item.snippet.channelId}
                />
              );
            }}
            keyExtractor={(item) => item.id.videoId}
          />
        </ScrollView>
      </View>
    );
}

export default Explore;