<template>
  <div class="login">
    <img
      class="login__image"
      src="../assets/logo_ava.png"
    />
    <div class="login__container">
      <span class="login__title">
        {{ loginTitle }}
      </span>
      <form
        class="login__form"
        @submit="handleSubmit"
      >
        <div class="login__form-item">
          <input
            v-model="login"
            class="login__form-input"
            placeholder="Login"
          />
        </div>
        <div>
          <input
            v-model="password"
            class="login__form-input"
            placeholder="Password"
            type="password"
          />
        </div>
        <button class="login__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import credentials from '../credentials.json';

export default {
  name: 'Login',
  data: () => ({
    loginTitle: 'Добро пожаловать!',
    login: '',
    password: '',
    destroyUp: false,
    destroyBehind: false
  }),
  computed: {
    isCredentialsValid() {
      return credentials[this.login] === this.password;
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.isCredentialsValid) {
        this.$emit('judgeId', this.login);
        this.$emit('next');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    width: 100%;
    display: flex;

    &__button {
      outline: none;
      width: 200px;
      height: 32px;
      border-radius: 8px;
      border: none;
      font-size: 18px;
      background-color: royalblue;
      color: white;
    }

    &__image {
      height: 100%;
      width: 300px;
    }

    &__container {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding-top: 32px;
      padding-bottom: 64px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    &__form-input {
      width: 200px;
      border: 1px solid #d1d1d1;
      height: 32px;
      border-radius: 8px;
      margin-bottom: 24px;
      outline: none;
      font-size: 18px;
    }

    &__title {
      font-size: 32px;
    }
  }
</style>

