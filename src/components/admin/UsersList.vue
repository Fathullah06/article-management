<template>
  <div>
    <h1>Users List (Admin)</h1>
    <ul class="list-group"  v-if="usersName.length!=0" v-for="(userName,i) in usersName" :key="i">
      <li class="list-group-item">
        <app-switch-component v-if="true" :id="i" :name="userName" :role="'(role)'"></app-switch-component>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import SwitchComponent from "../shared/components/SwitchComponent.vue";
export default {
  data() {
    return {
      data1: {
        userName: "dhruti.upadhyay",
        password: "dhruti"
      },
      usersName:['aa','bb','cc','dd'],
    };
  },
  // created() {
  //   axios
  //     .post(`http://172.16.3.104:3000/user/loginAD`, {
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(this.data1)
  //     })
  //     .then(res => res.json())
  //     .then(json => {
  //       this.state.token = json.token;
  //       this.state.success = json.success;
  //       console.log(json.success);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  //   // axios.post(`http://jsonplaceholder.typicode.com/posts`, {
  //   //   body: "fdgjkldfg"
  //   // })
  //   // .then(response => {console.log(response)})
  //   // .catch(e => {
  //   //   console.log(e)
  //   // })
  // },
  components: {
    appSwitchComponent: SwitchComponent
  }
};
</script>

<style>
</style>
