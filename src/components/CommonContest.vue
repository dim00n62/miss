<template>
  <div class="common-contest">
    <h2>
      {{ title }}
    </h2>
    <span>
      Можно выбрать от 1 до 3 участниц
    </span>
    <div class="common-contest__container">
      <div
        v-for="item in participants.slice(0, 5)"
        :key="item.id"
        class="common-contest__item"
        @click="handleClick(item.id)"
      >
        <img class="common-contest__avatar"
          :src="require(`../assets/${item.id}_ava.jpg`)"
          :class="{'common-contest__item--selected': selection.includes(item.id)}"/>
        <div>{{ participants[item.id - 1].name }}</div>
      </div>
    </div>
    <div class="common-contest__container">
      <div
        v-for="item in participants.slice(5, 9)"
        :key="item.id"
        class="common-contest__item"
        @click="handleClick(item.id)"
      >
        <img class="common-contest__avatar"
          :src="require(`../assets/${item.id}_ava.jpg`)"
          :class="{'common-contest__item--selected': selection.includes(item.id)}"/>
        <div>{{ participants[item.id - 1].name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonContest',
  props: {
    participants: Array,
    title: String,
    id: String
  },
  data: () => ({
    selection: []
  }),
  watch: {
    title() {
      this.selection = [];
    }
  },
  methods: {
    handleClick(id) {
      if (this.selection.length === 3 && !this.selection.includes(id)) {
        return;
      }

      if (this.selection.includes(id)) {
        this.selection.splice(this.selection.indexOf(id), 1);
        this.participants[id - 1].commonContests.splice(this.selection.indexOf(this.id), 1);
      } else {
        this.selection.push(id);
        this.participants[id - 1].commonContests.push(this.id);
      }

      this.$emit('disableButton', this.selection.length === 0)
    }
  }
};
</script>

<style lang="scss" scoped>
  .common-contest {
    flex: 1;
    height: calc(100% - 64px);
    font-size: 18px;
    text-align: center;
    padding: 0 32px 32px 32px;

    &__container {
      margin-top: 16px;
      display: flex;
      justify-content: space-around;
      margin-bottom: 16px;
    }

    &__item {
      max-width: 130px;
      width: 130px;
      text-align: center;
      font-size: 14px;

      &--selected {
        box-shadow: 0 0 10px 10px #6ebc36;
      }
    }

    &__avatar {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }

  h2 {
    margin-top: 0;
    padding-top: 32px;
  }
</style>
