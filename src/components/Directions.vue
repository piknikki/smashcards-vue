<template>
  <div class="directions has-text-left container" v-if="this.$route.name == 'Home'">
    <h3 @click="toggle = !toggle" class="subtitle">Directions  (click here to hide/show)</h3>
    <ul v-show="toggle">
      <li>
        Size your window for the number of questions you want to attempt at a time.
      </li>
      <li>
        As you answer questions, click to flip and see the answer.
      </li>
      <li>
        Leave the answer showing, so that when you flip all the cards, you can go back and answer them in reverse.
      </li>
      <li>
        Scroll down for more. They're loaded randomly, so you could see any topic at any time.
      </li>
      <li>
        Please do not delete any cards without talking to me first. Feel free to correct any inaccuracies or add new ones, though.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Directions',
  data () {
    return {
      toggle: true
    }
  }
}
</script>

<style>
.directions {
  padding: 20px 80px 5px;
  cursor: pointer;
}

ul {
  list-style-type: circle;
}

</style>
