<template>
  <div v-if="card" class="edit-card container">
    <h2>Edit card {{ this.card.question }}</h2>
  </div>
</template>

<script>
import db from '../firebase/init'

export default {
  name: 'EditCard',
  data () {
    return {
      card: null
    }
  },
  created () {
    let reference = db.collection('allCards').where('slug', '==', this.$route.params.slug)
    reference.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.card = doc.data()
          this.card.id = doc.id
          console.log(this.card)
        })
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>
