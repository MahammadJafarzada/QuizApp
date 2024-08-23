import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import tw from "twrnc";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Define types for the component props
type ScoreProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Score'>;
};

// Define the route type for Score screen
type ScoreScreenRouteProp = RouteProp<RootStackParamList, 'Score'>;

const Score: React.FC<ScoreProps> = ({ navigation }) => {
  const route = useRoute<ScoreScreenRouteProp>();
  const { score } = route.params;

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-3xl font-bold text-purple-700 mb-6`}>
        Congratulations!!
      </Text>
      <Text style={tw`text-2xl text-gray-800`}>
        Your Score: <Text style={tw`font-bold text-purple-600`}>{score}</Text> points
      </Text>
      <Pressable 
        style={tw`bg-purple-500 p-4 rounded-full mt-10`} 
        onPress={() => navigation.navigate("Splash")}
      >
        <Text style={tw`text-white font-semibold text-lg`}>Play Again!</Text>
      </Pressable>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({});
