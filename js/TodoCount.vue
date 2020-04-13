<template>
  <span id="todoCount">(前{{count}}件)</span>
</template>

<script>
export default {
  props: {
    count: { type: Number }
  },
  // data() {
  //   return {
  //     count: 0
  //   }
  // },

  // beforeMount() {
  //   EventBus.$on(UPDATE_TODO_COUNT, (count) => {
  //     this.count = count;
  //   })
  // }
}
</script>

<style scopoed>
span {
  font-size: 0.8em;
}
</style>