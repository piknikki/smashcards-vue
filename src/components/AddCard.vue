<template>
  <div class="add-card container">
    <h2 class="title">Add a new card</h2>
    <form @submit.prevent="AddCard">
      <div class="field box">
        <label for="question">Card Question:</label>
        <div class="control">
          <input type="text" name="question" v-model="question">
        </div>
        <label for="answer">Card Answer:</label>
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
      console.log(this.question)
      console.log(this.answer)
      this.question = ''
      this.answer = ''
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
  color: #E6676E;
}
</style>
