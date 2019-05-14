<template>
  <div class="one-contest" @click="handleClick">
    <h2>
      {{ title }}
    </h2>
    <div class="one-contest__container">
      <div
        v-for="(item, i) in participants"
        :key="i"
        class="one-contest__item"
      >
        <img
          class="one-contest__avatar"
          :src="require(`../assets/${item.id}_ava.jpg`)"
        />
        <div class="one-contest__name">{{ item.name }}</div>
        <rating class="one-contest__what" v-model="item.what" short/>
        <rating class="one-contest__how" v-model="item.how" short/>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from './Rating.vue';

export default {
  name: 'OneContest',
  components: {
    Rating
  },
  props: {
    title: String,
    participants: Array
  },
  methods: {
    handleClick() {
      const isComplete = this.participants.reduce((result, item) => {
        return Boolean(result && item.what && item.how);
      }, true);
      this.$emit('disableButton', !isComplete);
    }
  }
};
</script>

<style lang="scss" scoped>
  .one-contest {
    flex: 1;
    height: calc(100% - 64px);
    font-size: 18px;
    text-align: center;
    padding: 0 32px 32px 32px;

    &__name {
      margin-bottom: 24px;
      height: 54px;
    }

    &__container {
      margin-top: 24px;
      display: flex;
      justify-content: space-around;
    }

    &__item {
      position: relative;
      width: 160px;
      text-align: center;
    }

    &__avatar {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    &__what:before {
      content: 'Раскрытие темы: ';
    }

    &__how:before {
      content: 'Манера речи: ';
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 24px;
  }
</style>
