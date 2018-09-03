<template>
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 col-sm-offset-4">
            <form @submit.prevent="submit" >
                <div class="form-group">
                    <label for="username">
                        Username
                    </label>
                    <input class="form-control" type="text" name="username" data-vv-validate-on="blur" v-model="username" v-validate="'required'">
                    <p class="text-danger" v-if="errors.has('username')">{{ errors.first('username') }}</p>
                </div>

                <div class="form-group">
                    <label for="password">
                        Password
                    </label>
                <input type="password" class="form-control" name="password" data-vv-validate-on="blur" v-model="password" v-validate="'required|min:6'" >
                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                </div>
                <button class="btn bg-dark" :disabled="errors.any() || username.lenght == 0 || password.length == 0" type="button" @click="submit" >Login</button>
            </form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { login } from "../shared/services/app.services";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      let vm = this;
      login({ userName: this.username, password: this.password })
        .then(res => {
          if (res.data.messageCode === 'LOGGED_IN_SUCCESSFULLY') {
            vm.$store.dispatch('setToken', { token: res.data.data.token });
            vm.$store.dispatch('setRole', {role: res.data.data.role});
            vm.$store.dispatch('setUsername', {username: res.data.data.userName});
            vm.$cookie.set('token', res.data.data.token);
            vm.$cookie.set('role', res.data.data.role);
            vm.$cookie.set('username', res.data.data.userName);
            vm.$snotify.success('Logged in successfully!', 'Success');
            if (vm.$route.query.redirectUrl) {
                vm.$router.push({ path: vm.$route.query.redirectUrl });
            } else {
                vm.$router.push({ path: "/dashboard" });
            }
          } else if (res.data.messageCode === 'AUTHENTICATION_FAILED') {
              vm.$snotify.error('Username or Password invalid!', 'Error');
          }
        })
        .catch(err => {
          console.error(err);
          alert('Something went wrong!!');
        });
    }
  },
  created () {
      if (this.$cookie.get('token') !== null) {
          this.$router.push('/');
      }
  }
};
</script>

<style>
</style>
