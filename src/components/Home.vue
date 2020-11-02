<template>
  <div class="home tile is-ancestor">
    <div class="tile is-3 is-parent" v-for="card in allCards" :key="card.id">
      <div class="tile ">
        <article class="tile is-child box">
          <p class="title">
            {{ card.question }}
          </p>
          <p class="subtitle">
            <span>
              <i class="fad fa-trash"></i>
            </span>
          </p>
        </article>
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

.home {
  padding: 40px;
}

.fa-trash {
  font-size: 1.2em;
  color: #aaa;
}

.title {
  padding: 10px 0 20px;
  font-size: 1.5rem;
}
</style>
