import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from "twrnc";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type SplashProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  return (
    <View style={tw`flex-1 justify-around items-center bg-gray-100`}>
      <Text style={tw`text-3xl font-bold text-purple-700 text-center mb-6`}>
        Instructions
      </Text>
      <View style={tw`w-3/4`}>
        <Text style={tw`bg-purple-500 text-white p-4 my-2 rounded-lg text-lg`}>
          Each quiz has four options.
        </Text>
        <Text style={tw`bg-purple-500 text-white p-4 my-2 rounded-lg text-lg`}>
          Select the correct option to score points.
        </Text>
        <Text style={tw`bg-purple-500 text-white p-4 my-2 rounded-lg text-lg`}>
          You can navigate between questions using the "Next" button.
        </Text>
      </View>
      <Pressable 
        style={tw`bg-purple-500 mt-10 px-8 py-4 rounded-full`} 
        onPress={() => navigation.navigate("Question")}
      >
        <Text style={tw`text-white text-lg font-semibold`}>Start</Text>
      </Pressable>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
