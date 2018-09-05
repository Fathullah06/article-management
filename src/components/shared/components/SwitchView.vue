<template>
    <div class="navbar-right">
      <!-- <b v-if="role" style="margin: 10px 20px;">{{role}}</b> -->
        <div
          id="unblock"
          @click="switched(true)"
          :class="{active:value}">
            Unblock
        </div>
        <div
          id="block"
          @click="switched(false)"
          :class="{active:!value}">
            Block
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { userListBlock, articleListBlockArticle } from "../services/app.services";
export default {
  props: ["value", "id", "role", "articleList"],
  methods: {
    switched(isOn) {
      this.$emit("input", isOn);
      let vm = this;
      if (vm.articleList) {
        articleListBlockArticle(vm.id, { isUnBlocked: isOn })
          .then(res => {
            if (res.data.messageCode === 'OK') {
              vm.$snotify.success('Blocked successfully!', 'Success');
            }
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        userListBlock(vm.id, { status: isOn })
          .then(res => {
            if (res.data.messageCode === 'OK') {
              vm.$snotify.success('Blocked successfully!', 'Success');
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  }
};
</script>
<style scoped>
#block,
#unblock {
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
#unblock:hover,
#unblock.active {
  background-color: lightgreen;
}
#block:hover,
#block.active {
  background-color: lightcoral;
}
#unblock.active,
#block.active {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.8;
}
</style>
