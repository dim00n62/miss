<template>
  <div class="card">
    <img
      class="card__avatar"
      :src="require(`../assets/${participants[0].id}.jpg`)"
    />
    <div class="card__content">
      <img
        class="card__image"
        src="../assets/logo_ava.png"
      />
      <div class="card__name">
        {{ participants[0].name }}
      </div>
      <div class="card__features" @click="handleClick">
        <div class="card__feature">
          <div class="card__feature-title">Техника</div>
          <rating v-model="participants[0].technique"/>
        </div>
        <div class="card__feature">
          <div class="card__feature-title">Артистизм</div>
          <div class="card__raiting">
            <rating v-model="participants[0].artistry"/>
          </div>
        </div>
        <div class="card__feature">
          <div class="card__feature-title">Задумка</div>
          <div class="card__raiting">
            <rating v-model="participants[0].idea"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from './Rating.vue';

export default {
  name: 'Card',
  components: {
    Rating
  },
  props: {
    participants: Array
  },
  methods: {
    handleClick() {
      const isComplete = Boolean(this.participants[0].technique && this.participants[0].artistry && this.participants[0].idea);
      this.$emit('disableButton', !isComplete);
      return isComplete;
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    height: 100%;
    align-items: center;

    &__image {
      height: 200px;
    }

    &__avatar {
      height: 100%;
    }

    &__name {
      font-size: 18px;
      margin-bottom: 32px;
    }

    &__description {
      font-size: 16px;
      margin-bottom: 2vh;
    }

    &__features {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-bottom: 48px;
      padding-right: 80px;
    }

    &__feature {
      width: 400px;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
    }

    &__feature-title {
      width: 200px;
      text-align: end;
    }

    &__raiting {
      font-size: 18px;
    }

    &__content {
      min-height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: scroll;
    }
  }
</style>

