<template>
  <div class="home tile is-ancestor tile-column">
    <div class="tile is-3 is-parent is-horizontal" v-for="card in allCards" :key="card.id">
      <div class="tile">
        <article class="tile is-child box">
          <p class="title">
            Q:  {{ card.question }}
          </p>
          <p class="subtitle">
            <span>
              <router-link :to="{ name: 'EditCard', params: {card_id: card.id}}">
                <i class="fal fa-edit"></i>
              </router-link>
            </span>
            <span @click="deleteCard(card.id)">
              <i class="fal fa-trash"></i>
            </span>
          </p>
          <br>
          <p>
            A:  {{ card.answer }}
            ID: {{ card.id }}
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

.fa-trash,
.fa-edit {
  font-size: 1em;
  color: #764665;
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
