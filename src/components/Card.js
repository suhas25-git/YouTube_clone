import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image ,TouchableOpacity } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation,useTheme } from "@react-navigation/native";
import Constant from "expo-constants";

const Card = (props) => {
  const{colors}=useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Videoplayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View style={styles.Cards}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
            width: "100%",
            height: 200,
          }}
        />
        <View flexDirection="row" style={styles.bottombody}>
          <Image
            style={styles.profile}
            source={{
              uri: `https://i.ytimg.com/vi/${props.chanelpic}/hqdefault.jpg`,
            }}
          />

          <View style={{ marginLeft: 10 }}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{
                width: 275,
                fontSize: 17,
                fontWeight: "bold",
                color: colors.textcolor,
              }}
            >
              {props.title}
            </Text>
            <Text style={{ color: colors.textcolor }}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Cards: {margin:2,marginBottom:5 },
  bottombody: { margin: 8,marginTop:4 },
  profile: { width: 50, height: 50, borderRadius: 25 },
});

export default Card;
