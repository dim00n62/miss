<template>
  <form
    class="rating"
    :class="{'rating--short': short}"
    @click="handleInput"
  >
    <div class="rating__item" value="1" :style="`background-color: ${backgroundColor(1)}`"/>
    <div v-if="!short" class="rating__item" value="2" :style="`background-color: ${backgroundColor(2)}`"/>
    <div class="rating__item" value="3" :style="`background-color: ${backgroundColor(3)}`"/>
    <div v-if="!short" class="rating__item" value="4" :style="`background-color: ${backgroundColor(4)}`"/>
    <div class="rating__item" value="5" :style="`background-color: ${backgroundColor(5)}`"/>
  </form>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    value: {
      type: Number,
      default: 1
    },
    short: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      if (e.target.classList.contains('rating__item')) {
        this.$emit('input', +e.target.getAttribute('value'));
      }
    },
    backgroundColor(value) {
      if (value > this.value) {
        return '#c4c4c4';
      }

      switch (this.value) {
        case 1:
          return '#e06055';
          break;
        case 2:
          return '#f3b177';
          break;
        case 3:
          return '#fded8c';
          break;
        case 4:
          return '#c9e789';
          break;
        case 5:
          return '#5e9531';
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .rating {
    &__item {
      margin-left: 8px;
      position: relative;
      height: 25px;
      width: 25px;
      display: inline-block;
      border-radius: 50%;
      border: 1px solid #b4b4b4;

      input {
        display: none;
      }

      &:first-child {
        margin-left: 0;
      }
    }

    &--short {
      .rating__item {
        margin-left: 16px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
</style>

