
<template>
    <v-dialog v-model="modalVisible">
        <v-btn slot="activator">Dodaj pytanie</v-btn>
        <v-card>
            <v-card-text>
                <v-text-field label="Treść pytania" v-model="newQuestion.title"></v-text-field>
                <v-text-field label="Odpowiedz A" v-model="newQuestion.answers[0]"></v-text-field>
                <v-text-field label="Odpowiedz B" v-model="newQuestion.answers[1]"></v-text-field>
                <v-text-field label="Odpowiedz C" v-model="newQuestion.answers[2]"></v-text-field>
                <v-text-field label="Odpowiedz D" v-model="newQuestion.answers[3]"></v-text-field>
                <v-select
                v-bind:items="newQuestion.answers"
                v-model="newQuestion.correctAnswer"
                label="Prawidłowa odpowiedź"
                ></v-select>
                <v-btn @click="addQuestion()">Dodaj pytanie</v-btn>
                <v-btn @click="modalVisible = false">Zamknij</v-btn>
            </v-card-text>
            <!-- {{newQuestion}} -->
        </v-card>
    </v-dialog>

</template>

<script>
/* eslint-disable */

    export default {
        name: 'add-question',
        data () {
            return {
                newQuestion: {
                    title: 'pytanie testowe',
                    answers: [
                        'odp 1',
                        'odp 2',
                        'odp 3',
                        'odp 4'
                    ],
                    correctAnswer: 'odp 1',
                    correctAnswerIndex: null
                },
                modalVisible: false
            }
        },
        computed: {
            normalizeQuestion () {
                let myIndex = 0;
                for(let i=0; i<this.newQuestion.answers.length; i++) {
                    if (this.newQuestion.answers[i] === this.newQuestion.correctAnswer) {
                        myIndex = i
                    }
                }
                return {
                    title: this.newQuestion.title,
                    answers: this.newQuestion.answers,
                    correctAnswerIndex: myIndex
                }
            }
        },
        methods: {
            addQuestion () {
                this.$emit('newquestion', this.normalizeQuestion)
            }
        }
    }
</script>