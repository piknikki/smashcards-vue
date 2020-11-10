<template>
  <div class="add-card container">
    <h2 class="title">Add a new card</h2>
    <form @submit.prevent="AddCard">
      <div class="field box">
        <label for="question">Question:</label>
        <div class="control">
          <input type="text" name="question" v-model="question">
        </div>
        <label for="answer">Answer:</label>
        <div class="control">
          <input type="text" name="answer" v-model="answer">
        </div>

        <div class="field box card-box">
          <h1>Front:  {{ question }}</h1>
          <br>
          <br>
          <h1>Back:  {{ answer }}</h1>
        </div>
      </div>
      <button class="button">Add Card</button>
    </form>
  </div>
</template>

<script>
import db from '../firebase/init'
import slugify from 'slugify'

export default {
  name: 'AddSmoothie',
  data () {
    return {
      question: null,
      answer: null
    }
  },
  methods: {
    AddCard () {
      if (this.question) {
        this.slug = slugify(this.question, {
          replacement: '-',
          remove: /[$*_+~?.'"!\-:@]/g,
          lower: true
        })
      }

      db.collection('allCards').add({
        question: this.question,
        answer: this.answer,
        slug: this.slug
      })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.add-card {
  margin-top: 60px;
  padding: 20px;
  max-width: 600px;
  line-height: 1.5;
}

.control {
  padding-top: 5px;
  padding-bottom: 10px;
}

.card-box {
  padding: 40px;
}

.button {
  background: #38445D;
  color: #F66C6F;
}
</style>
