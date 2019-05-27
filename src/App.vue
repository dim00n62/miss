<template>
  <div class="app">
    <img
      src="./assets/header.png"
      class="header"
    />
    <view-container/>
  </div>
</template>

<script>
import ViewContainer from './ViewContainer.vue';

export default {
  name: 'app',
  components: {
    ViewContainer
  }
};
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    font-size: 15px;
    line-height: 1.5;
    color: #333;
    background-color: #f8eddc;
    height: 100vh;
  }

  .app {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./assets/background-img.png');
    background-repeat: round;
    background-size: 60px;
  }

    .header {
      position: absolute;
      top: 0;
    }
</style>
