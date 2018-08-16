<template>
  <div>
    <ul class="list-group"  v-if="adminUsers.length!=0" v-for="(adminUser,i) in adminUsers" :key="i">
      <li class="list-group-item">
        <app-switch-component v-if="true" :id="adminUser.adminUser._id" :status="adminUser.adminUser.status" :name="adminUser.adminUser.adminUserName" :role="'(role)'"></app-switch-component>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import SwitchComponent from "../shared/components/SwitchComponent.vue";
import { getAllUsers } from "../shared/services/app.services";
export default {
  data() {
    return {
      adminUsers: null
    };
  },
  created() {
    getAllUsers()
      .then(res => {
        this.adminUsers=res.data.adminUsers;
        // console.log(res.data.adminUsers);
      })
      .catch(err => {
        console.error(err);
      });
  },
  components: {
    appSwitchComponent: SwitchComponent
  }
};
</script>

<style>
</style>
