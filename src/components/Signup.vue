<template>
  <div class="signup">
    <h3>Sign up for Smashcards</h3>
    <div>
      <form>
        <div class="field">
          <label class="label">Alias</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="What should we call you?" >
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span v-if="validAlias" class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
<!--            <span v-else-if="!validAlias" class="icon is-small is-right">-->
<!--              <i class="fas fa-exclamation-triangle"></i>-->
<!--            </span>-->
          </div>
          <p v-if="validAlias" class="help is-success">This alias is available.</p>
<!--          <p v-else-if="!validAlias" class="help is-danger">Sorry, that alias is taken. Try another.</p>-->
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="password" placeholder="Password" >
            <span class="icon is-small is-left">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span v-if="validPassword" class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
            <!--            <span v-else-if="!validAlias" class="icon is-small is-right">-->
            <!--              <i class="fas fa-exclamation-triangle"></i>-->
            <!--            </span>-->
          </div>
          <p v-if="validAlias" class="help is-success">Great password!</p>
          <!--          <p v-else-if="!validAlias" class="help is-danger">Sorry, that alias is taken. Try another.</p>-->
        </div>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      validAlias: true,
      validPassword: true
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

</style>
