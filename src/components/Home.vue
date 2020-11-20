<template>
  <div class="home tile is-ancestor tile-column">
    <div class="tile is-3 is-parent is-horizontal flip-container" v-for="card in allCards" :key="card.id" @click="flipCard(card)">
      <transition name="flip" class="tile">
        <div class="card tile is-child" v-bind:key="card.flipped" :class="{ title: !card.flipped, subtitle: card.flipped }">
          <span class="icons-section is-flex is-pulled-left is-clearfix">
            <router-link :to="{ name: 'EditCard', params: {slug: card.slug}}">
              <i class="fal fa-edit fa-xs"></i>
            </router-link>
          </span>
          <span class="icons-section is-flex is-pulled-right is-clearfix" @click="deleteCard(card.id)">
            <i class="fal fa-trash fa-xs"></i>
          </span>
          <br>
          {{ card.flipped? card.answer : card.question }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import db from '../firebase/init'

export default {
  name: 'Home',
  data () {
    return {
      allCards: [],
      isFlipped: false
    }
  },
  methods: {
    flipCard (card) {
      card.flipped = !card.flipped
    },
    deleteCard (id) {
      db.collection('allCards').doc(id).delete()
        .then(() => {
          this.allCards = this.allCards.filter(card => card.id !== id)
        })
    }
  },
  created () {
    this.allCards.forEach((card) => {
      this.$set(card, 'isFlipped', false)
    })

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

.icons-section {
  font-size: 0.8em;
  margin: 0 5px 15px;
}

.flip-container {
  transition: all 0.3s ease;
}

.card {
  cursor: pointer;
  padding: 20px;
  will-change: transform;
}

.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}

</style>
