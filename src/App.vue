<template>
 <v-app dark>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
              <img src="https://raw.githubusercontent.com/macmackiewicz/warsawjs-workshop-12-quiz/master/src/assets/millionaire.png" width="100%">
            <v-card v-if="currentQuestionIndex < quiz.length-1">
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
            <div v-if="hasUserWon">
                <v-alert color="success" value="true">
                Gratulacje! Zostałeś milionerem!
              </v-alert>
              <v-btn @click="resetQuiz">Jeszcze raz</v-btn>              
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {quiz} from './quiz'

export default {
  data () {
    return {
      quiz: quiz,
      currentQuestionIndex: 0,
      userAnswer: null
    }
  },
  computed: {
    currentQuestion () {
      return this.quiz[this.currentQuestionIndex]
    },
    hasUserWon () {
      return this.currentQuestionIndex === this.quiz.length - 1
    }
  },
  methods: {
    getAnswerClass (answerIndex) {
      let correctIndex = this.quiz[this.currentQuestionIndex].correctAnswerIndex
      if (answerIndex === correctIndex && this.userAnswer === answerIndex) {
        return 'success'
      } else if (this.userAnswer === answerIndex && answerIndex !== correctIndex) {
        return 'error'
      } else {
        return 'secondary'
      }
    },
    resetQuiz () {
      this.userAnswer = null
      this.currentQuestionIndex = 0
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
