<template>
  <div v-if="card" class="edit-card container">
    <h2 class="card-header-title">Edit card</h2>
    <form @submit.prevent="EditCard">
      <div class="field box">
        <label for="question">Question:</label>
        <div class="control">
          <textarea class="textarea" rows="2" name="question" v-model="card.question"></textarea>
        </div>
        <label for="answer">Answer:</label>
        <div class="control">
          <textarea class="textarea answer" rows="2" name="answer" v-model="card.answer"></textarea>
        </div>

        <div class="field box card-box">
          <h1>Front:  {{ card.question }}</h1>
          <br>
          <br>
          <h1>Back:  {{ card.answer }}</h1>
        </div>
      </div>
      <button class="button">Update Card</button>
    </form>
  </div>
</template>

<script>
import db from '../firebase/init'
import slugify from 'slugify'

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
        })
      })
      .catch(err => console.log(err))
  },
  methods: {
    EditCard () {
      if (this.card.question) {
        this.card.slug = slugify(this.card.question, {
          replacement: '-',
          remove: /[$*_+~?.'"!\-:@]/g,
          lower: true
        })
      }

      db.collection('allCards').doc(this.card.id).update({
        question: this.card.question,
        answer: this.card.answer,
        slug: this.card.slug
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
.edit-card {
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
