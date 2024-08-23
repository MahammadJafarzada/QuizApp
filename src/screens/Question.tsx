import { Pressable, StyleSheet, Text, View } from 'react-native';
import { reactQuestions } from '../../config/reactQuestion';
import React, { useState } from 'react';
import tw from "twrnc";
import * as Progress from 'react-native-progress';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Define types for the component props
type QuestionProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Question'>;
};

const Question: React.FC<QuestionProps> = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const progress = (currentQuestionIndex + 1) / reactQuestions.length;

  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1) {
      navigation.navigate("Score", { score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handleOptionPress = (pressedOption: string) => {
    setSelectedOption(pressedOption);
    const isAnswerCorrect = reactQuestions[currentQuestionIndex].correctAnswer === pressedOption;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 10);
    }
  };

  return (
    <View style={tw`mt-6 p-4`}>
      <View style={tw`flex-row`}>
        <View style={tw`flex-1`}> 
          <Progress.Bar progress={progress} width={null} height={10} color={'rgb(165 85 247)'} />
        </View>    
      </View> 
      <Text style={tw`text-2xl mb-4`}>{reactQuestions[currentQuestionIndex].question}</Text>
      {reactQuestions[currentQuestionIndex].options.map((option, index) => (
        <Pressable 
          key={index}
          style={tw`border-2 border-purple-500 p-4 my-2 rounded-md ${
            selectedOption === option ? isCorrect ? 
            "bg-green-200 border-green-500" :
            "bg-red-200 border-red-500" : 
            "border-purple-500"
          }`} 
          onPress={() => handleOptionPress(option)}
          disabled={selectedOption !== null}
        >
          <Text style={tw`text-lg`}>{option}</Text>
        </Pressable>
      ))}
      <Pressable style={tw`bg-purple-500 p-4 rounded-md mt-6`} onPress={handleNext}>
        <Text style={tw`text-white text-lg text-center font-bold`}>
          {currentQuestionIndex === reactQuestions.length - 1 ? "Finish" : "Next"}
        </Text>
      </Pressable>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({});
