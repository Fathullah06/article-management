<template>
      <div class="nav nav-pills">
        <p class="navbar-left">{{name}}</p>
        <form-switch v-model="dataSwitch" :id="id"></form-switch>
      </div>
</template>

<script>
/* eslint-disable */
import SwitchView from "./SwitchView.vue";
export default {
  data() {
    return {
      dataSwitch: true
    };
  },
  components: {
    formSwitch: SwitchView
  },
  props: ["id", "name"]
};
</script>

<style scoped>
p {
  margin-top: 10px;
  margin-bottom: 0px;
}
.panel-footer {
  padding: 0px 15px;
}
</style>
