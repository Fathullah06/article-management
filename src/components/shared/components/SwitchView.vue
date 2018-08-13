<template>
    <div class="navbar-right">
        <div
        id="on"
        @click="switched(true)"
        :class="{active:value}">
            Enable
        </div>
        <div
        id="off"
        @click="switched(false)"
        :class="{active:!value}">
            Disable
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  props: ["value", "id"],
  methods: {
    switched(isOn) {
      this.$emit("input", isOn);
      console.log({ id: this.id, block: this.value });
    }
  }
};
</script>
<style scoped>
#on,
#off {
  width: 60px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
  /* margin-left: 20px; */
  margin-right: 20px;
}
#on:hover,
#on.active {
  background-color: lightgreen;
}
#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>
