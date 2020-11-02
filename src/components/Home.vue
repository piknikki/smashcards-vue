<template>
  <div class="home tile is-ancestor tile-column">
    <div class="tile is-3 is-parent is-horizontal" v-for="card in allCards" :key="card.id">
      <div class="tile">
        <article class="tile is-child box">
          <p class="title">
            {{ card.question }}
          </p>
          <p class="subtitle">
            <span @click="deleteCard(card.id)">
              <i class="fad fa-trash"></i>
            </span>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebase/init'

export default {
  name: 'Home',
  data () {
    return {
      allCards: []
    }
  },
  methods: {
    deleteCard (id) {
      db.collection('allCards').doc(id).delete()
        .then(() => {
          this.allCards = this.allCards.filter(card => card.id !== id)
        })
    }
  },
  created () {
    db.collection('allCards').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let card = doc.data()
          card.id = doc.id
          this.allCards.push(card)
        })
      })
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
  cursor: pointer;
}

.title {
  padding: 10px 0 20px;
  font-size: 1.5rem;
}

.tile-column {
  flex-wrap: wrap;
}
</style>
