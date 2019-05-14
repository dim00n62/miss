<template>
  <div class="view">
    <component
      :is="stages[stage].component"
      v-bind="stages[stage].props"
      @judgeId="handleJudge"
      @disableButton="handleDisable"
      @next="handleNext"
    />
    <button
      v-if="stages[stage].showNext"
      class="view__next-button"
      :disabled="isNextDisabled"
      @click="handleNext"
    >
      Далее
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import Login from './components/Login.vue';
import Welcome from './components/Welcome.vue';
import Participant from './models/participant.ts';
import Card from './components/Card.vue';
import CommonContest from './components/CommonContest.vue';
import OneContest from './components/OneContest.vue';
import OneContestVue from './components/OneContest.vue';

export default {
  name: 'ViewContainer',
  data: () => ({
    stage: 'login',
    participants: [
      new Participant({ name: 'Анастасия Красноперова №1', id: '1' }),
      new Participant({ name: 'Елена Онофрей №2', id: '2' }),
      new Participant({ name: 'Кира Газатуллина №3', id: '3' }),
      new Participant({ name: 'Елизавета Бурмистрова №4', id: '4' }),
      new Participant({ name: 'Татьяна Сметанина №5', id: '5' }),
      new Participant({ name: 'Дарья Смирнова №6', id: '6' }),
      new Participant({ name: 'Диана Горифзанова №7', id: '7' }),
      new Participant({ name: 'Юлия Петрова №8', id: '8' }),
      new Participant({ name: 'Кристина Шарова №9', id: '9' })
    ],
    isNextDisabled: false,
    judge_id: 'initial'
  }),
  computed: {
    stages() {
      return {
        login: {
          component: Login,
          showNext: false,
          nextStage: 'welcome'
        },
        welcome: {
          component: Welcome,
          props: { title: 'Уважаемые члены жюри', text: `<p>Вам необходимо проставлять оценки всем участницам по всем критериям, в противном случае кнопка «Далее» не будет активна.</p><br/>
<p>Продолжительность шоу составит не более 2,5 часов, мы убедительно просим Вас не покидать зал во время шоу для выставления объективных оценок.</p><br/>
<p>Доносим до вашего внимания, что сайт построен таким образом, что в процессе выставления оценок его нельзя обновлять, если у Вас не загружается страница, и по всем остальным техническим вопросам, пожалуйста, обращайтесь к Ангелине.</p><br/>
С Уважением,<br/>
Организаторы проекта "Мисс Плехановский Университет"` },
          showNext: true,
          nextStage: 'commonContest1'
        },
        commonContest1: {
          component: CommonContest,
          showNext: true,
          props: { participants: this.participants, title: 'Открытие шоу', id: 'show_open' },
          nextStage: 'card0'
        },
        card0: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[0]] },
          nextStage: 'card1'
        },
        card1: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[1]] },
          nextStage: 'card2'
        },
        card2: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[2]] },
          nextStage: 'oneContest1'
        },
        oneContest1: {
          component: OneContest,
          showNext: true,
          props: { participants: this.participants.slice(0, 3), title: 'Интеллектуальный конкурс' },
          nextStage: 'commonContest2'
        },
        commonContest2: {
          component: CommonContest,
          showNext: true,
          props: { participants: this.participants, title: 'Дефиле в купальниках', id: 'swimsuits' },
          nextStage: 'card3'
        },
        card3: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[3]] },
          nextStage: 'card4'
        },
        card4: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[4]] },
          nextStage: 'card5'
        },
        card5: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[5]] },
          nextStage: 'oneContest2'
        },
        oneContest2: {
          component: OneContest,
          showNext: true,
          props: { participants: this.participants.slice(3, 6), title: 'Интеллектуальный конкурс' },
          nextStage: 'commonContest3'
        },
        commonContest3: {
          component: CommonContest,
          showNext: true,
          props: { participants: this.participants, title: 'Спортивный конкурс', id: 'sport_competition' },
          nextStage: 'card6'
        },
        card6: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[6]] },
          nextStage: 'card7'
        },
        card7: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[7]] },
          nextStage: 'card8'
        },
        card8: {
          component: Card,
          showNext: true,
          props: { participants: [this.participants[8]] },
          nextStage: 'oneContest3'
        },
        oneContest3: {
          component: OneContest,
          showNext: true,
          props: { participants: this.participants.slice(6, 9), title: 'Интеллектуальный конкурс' },
          nextStage: 'commonContest4'
        },
        commonContest4: {
          component: CommonContest,
          showNext: true,
          props: { participants: this.participants, title: 'Дефиле в платьях', text: 'Текст 4', id: 'dresses' },
          nextStage: 'final'
        },
        final: {
          component: Welcome,
          props: { title: 'Спасибо Вам за присутствие на нашем ШОУ!', text: `<p>Далее Вас ждут 2 внеконкурсных номера и награждение участниц.<p/>
<p>Напоминаем порядок награждения:</p>

Лучшая группа поддержки - Вероника Астафьева.<br/>
Приз Зрительских симпатий - Олег Беляев и Артем Федоряк.<br/>
Лучший творческий номер - Карина Мишулина и Дэни Яровский.<br/>
Вице-Мисс Плехановский университет - Денис Кузнецов и Алина Боровкова.<br/>
Мисс Плехановский университет - Валерия Руднева и Сергей Есаков.<br/>

<p>С Уважением,<br/>
Организаторы проекта "Мисс Плехановский Университет"</p>` }
        }
      };
    }
  },
  methods: {
    handleNext() {
      this.isNextDisabled = true;
      this.stage = this.stages[this.stage].nextStage;
      axios.post('/api/send_marks', {
        participants: this.participants,
        judge_id: this.judge_id
      });
    },
    handleDisable(value) {
      this.isNextDisabled = value;
    },
    handleJudge(id) {
      this.judge_id = id
    }
  }
};
</script>

<style lang="scss" scoped>
  .view {
    height: 500px;
    min-height: 500px;
    width: 900px;
    min-width: 900px;
    position: relative;
    box-shadow: 10px 10px 15px 5px #fff;
    z-index: 1;
    background-color: #f8eddc;

    &__next-button {
      position: absolute;
      bottom: 24px;
      right: 24px;
      width: 100px;
      height: 32px;
      border: none;
      border-radius: 8px;
      background-color: #8a7459;
      color: floralwhite;
      font-size: 18px;
      outline: none;

      &:disabled {
        background-color: #c4c4c4;
      }
    }

    &__header {
      width: 100%;
    }
  }
</style>

