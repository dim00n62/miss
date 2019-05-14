<template>
  <div class="welcome">
    <h2>
      {{ title }}
    </h2>
    <span v-html="text"/>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    title: String,
    text: String
  },
  mounted() {
    this.$emit('disableButton', false);
  }
};
</script>

<style lang="scss" scoped>
  .welcome {
    flex: 1;
    height: calc(100% - 64px);
    font-size: 16px;
    text-align: center;
    padding: 0 32px 32px 32px;
  }

  h2 {
    margin-top: 0;
    padding-top: 32px;
  }
</style>
