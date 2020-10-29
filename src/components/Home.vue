<template>
  <div class="home">
    <div v-for="card in allCards" :key="card.id">
      <div class="card">
        <div class="card-content">
          {{ card.question }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      allCards: [
        {
          id: 1,
          question: 'What is the difference between HTML, CSS, and JavaScript?',
          answer: 'HTML is the web language, CSS creates styling, and JS adds interactivity.'
        },
        {
          id: 2,
          question: 'What are some frameworks for JS (front end)?',
          answer: 'React, Vue, Angular.'
        },
        {
          id: 3,
          question: 'What are some frameworks for the back end?',
          answer: 'Ruby. (is there anything else??)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  font-size: 1.2rem;
}

</style>
