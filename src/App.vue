<template>
 <v-app dark>
    <v-content>
      <v-container>
        <v-layout row justify-center>
          <v-flex md6 xs10>
            <img src="https://raw.githubusercontent.com/macmackiewicz/warsawjs-workshop-12-quiz/master/src/assets/millionaire.png" width="100%">
            <div v-if="hasUserWon">
                <v-alert color="success" value="true">
                Gratulacje! Zostałeś milionerem!
              </v-alert>
              <v-btn @click="resetQuiz">Jeszcze raz</v-btn>              
            </div>
            <v-card v-else>
              <v-card-title>{{ currentQuestion.title }}</v-card-title>
              <v-card-text>
                  <v-list>
                    <v-list-tile v-for="(answer, index) in currentQuestion.answers" :key="index" @click="userAnswer = index" :class="getAnswerClass(index)">{{answer}}</v-list-tile>
                  </v-list>
              </v-card-text>
              <v-card-actions>
                <v-btn v-if="userAnswer === currentQuestion.correctAnswerIndex" @click="nextQuestion">Następne pytanie</v-btn>
                <v-btn v-if="userAnswer !== null && userAnswer !== currentQuestion.correctAnswerIndex" @click="resetQuiz">Zacznij od początku</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex md6>
            <add-question @newquestion="addNewQuestion($event)"></add-question>
              
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import {quiz} from './quiz'
import AddQuestion from './components/AddQuestion.vue'

export default {
  components: {'add-question': AddQuestion},
  data () {
    return {
      quiz: quiz,
      currentQuestionIndex: 0,
      userAnswer: null,
      hasUserWon: false,
      mynewQuestion: {}
    }
  },
  computed: {
    currentQuestion () {
      return this.quiz[this.currentQuestionIndex]
    }
  },
  methods: {
    getAnswerClass (answerIndex) {
      let correctIndex = this.quiz[this.currentQuestionIndex].correctAnswerIndex
      if (answerIndex === correctIndex && this.userAnswer === answerIndex) {
        if (this.currentQuestionIndex === this.quiz.length - 1) {
          this.hasUserWon = true
        }
        return 'success'
      } else if (this.userAnswer === answerIndex && answerIndex !== correctIndex) {
        return 'error'
      } else {
        return 'secondary'
      }
    },
    addNewQuestion(question) {
      this.quiz.unshift(question)
    },
    resetQuiz () {
      this.userAnswer = null
      this.currentQuestionIndex = 0
      this.hasUserWon = false
    },
    nextQuestion () {
      this.userAnswer = null
      this.currentQuestionIndex++
    }
  }
}
</script>

<style>
</style>