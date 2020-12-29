<template>
  <div class="login">
    <h3>Log into Smashcards</h3>
    <div class="box">
      <form @submit.prevent="logIn">
        <div class="field">
          <label class="label" for="email">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input id="email" v-model="email" class="input" type="text" placeholder="Email" >
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label for="password" class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input id="password" v-model="password" class="input" type="password" placeholder="Password" >
            <span class="icon is-small is-left">
              <i class="fas fa-unlock-alt"></i>
            </span>
          </div>
        </div>

        <p v-if="feedback">{{ feedback }}</p>
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
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      feedback: null,
      loggedIn: false
    }
  },
  methods: {
    logIn () {
      if (this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.loggedIn = true
            this.$router.push({ path: '/' })
          })
          .catch(err => {
            this.feedback = err.message
          })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields.'
      }
    }
  }
}
</script>

<style scoped>
.login {
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
