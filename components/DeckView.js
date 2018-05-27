import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

function QuestionTab (props) {
    return (
        <View style={styles.QuestionTab}>
            <Text style={styles.QuestionText}>{props.question.question}</Text>
            <Text style={styles.AnswerText}>{props.question.answer}</Text>
        </View>
    )
}

function AddQuestion () {
    return (
        <TouchableOpacity style={styles.AddQuestionButton}>
          <Text style={styles.AddQuestionButtonText}>Start Quiz</Text>
        </TouchableOpacity>
    )
}

class DeckView extends Component {

    deck = this.props.navigation.state.params.deck;

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('deck').title,
        }
    }

    render() {

        return (
            <View style={{paddingBottom: 50}}>
                <TouchableOpacity style={styles.StartQuizHeader} onPress={() => {this.props.navigation.navigate('NewQuestion')}}>
                   <Text style={styles.StartQuizText}>+ Add New Question</Text>
                </TouchableOpacity>
                <ScrollView>
                    <AddQuestion />
                    {this.deck.questions.map((question) => (
                        <QuestionTab question={question} key={Math.random()}/>
                    ))}               
                </ScrollView>
            </View>
        )
    }
  }

const styles = StyleSheet.create({
    StartQuizHeader: {
      padding: 0,
      paddingTop: 12,
      paddingBottom: 12,
      alignItems: 'center',
      borderColor: 'rgba(100,100,100,1.0)',
      borderWidth: 2,
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 6,
    },
    StartQuizText: {
      fontSize: 20,
    },
    AddQuestionButton: {
        backgroundColor: 'rgb(200,100,200)',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    AddQuestionButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    QuestionTab: {
        backgroundColor: 'rgb(100,100,100)',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    QuestionText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    AnswerText: {
        backgroundColor: 'rgb(240,240,240)',
        color: 'rgb(100,100,100)',
        padding: 8,
        borderRadius: 6,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    }
})

export default DeckView;