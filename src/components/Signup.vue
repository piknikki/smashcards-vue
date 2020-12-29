<template>
  <div class="signup">
    <h3>Sign up for Smashcards</h3>
    <div class="box">
      <form @submit.prevent="signUp">
        <div class="field">
          <label class="label" for="alias">Alias</label>
          <div class="control has-icons-left has-icons-right">
            <input id="alias" v-model="alias" class="input" type="text" placeholder="What should we call you?" >
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
<!--            <span v-if="validAlias" class="icon is-small is-right">-->
<!--              <i class="fas fa-check"></i>-->
<!--            </span>-->
<!--            <span v-else-if="!validAlias" class="icon is-small is-right">-->
<!--              <i class="fas fa-exclamation-triangle"></i>-->
<!--            </span>-->
          </div>
          <p class="help">{{ this.aliasFeedback }}</p>
        </div>

        <div class="field">
          <label for="password" class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input id="password" v-model="password" class="input" type="password" placeholder="Password" >
            <span class="icon is-small is-left">
              <i class="fas fa-unlock-alt"></i>
            </span>
<!--            <span v-if="validPassword" class="icon is-small is-right">-->
<!--              <i class="fas fa-check"></i>-->
<!--            </span>-->
            <!--            <span v-else-if="!validAlias" class="icon is-small is-right">-->
            <!--              <i class="fas fa-exclamation-triangle"></i>-->
            <!--            </span>-->
          </div>
<!--          <p v-if="validPassword" class="help is-success">{{ passwordFeedback }}</p>-->
          <!--          <p v-else-if="!validAlias" class="help is-danger">Sorry, that alias is taken. Try another.</p>-->
        </div>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button class="button is-link submit-btn">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link cancel-btn">Cancel</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '../firebase/init'

export default {
  name: 'Signup',
  data () {
    return {
      validAlias: true,
      validPassword: true,
      alias: null,
      password: null,
      slug: null,
      aliasFeedback: null
    }
  },
  methods: {
    signUp () {
      if (this.alias) {
        // slugify the alias
        // check if it exists on firebase -- already taken?
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!?\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if (doc.exists) {
            this.aliasFeedback = 'Sorry, that alias already exists. Pick another one.'
          } else {
            this.aliasFeedback = `Hey, ${this.alias}!`
          }
        })
      } else {
        this.aliasFeedback = 'You must enter an alias.'
      }
    }
  }
}
</script>

<style scoped>
.signup {
  width: 600px;
  margin: 0 auto;
  padding: 40px;
}

h3 {
  margin: 10px;
}

button {
  margin: 20px 10px;
}

.submit-btn {
  background: #38445D;
  color: #E6676E;
}

.submit-btn:hover {
  border: 1px solid #E6676E;
  background: #38445D;
  color: white;
}

button.cancel-btn {
  border: 1px solid #93a4c6;
  background: white;
  color: #E6676E;
}

button.cancel-btn:hover {
  background: #E6676E;
}

</style>
