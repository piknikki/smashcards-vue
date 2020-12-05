<template>
  <div class="add-card container">
    <h2 class="title">Add a new card</h2>
    <form @submit.prevent="AddCard">
      <div class="field box">
        <label for="question">Question:</label>
        <div class="control">
          <textarea class="textarea" name="question" v-model="question" rows="2"></textarea>
        </div>
        <label for="answer">Answer:</label>
        <div class="control">
          <textarea class="textarea answer" name="answer" v-model="answer" rows="2"></textarea>
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
  name: 'AddCard',
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
        slug: this.slug,
        flipped: false
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
  padding: 20px 10px;
  max-width: 80%;
  margin: 0 auto;
}

.card-box {
  padding: 40px;
}

.button {
  background: #38445D;
  color: #F66C6F;
}

textarea {
  border-color: #38445D;
}

.answer {
  margin-bottom: 10px
}
</style>
