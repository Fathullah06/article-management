<template>
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 col-sm-offset-4">
            <form @submit.prevent="submit" >
                <div class="form-group">
                    <label for="username">
                        Username
                    </label>
                    <input class="form-control" type="text" name="username" v-model="username" v-validate="'required'">
                    <p class="text-danger" v-if="errors.has('username')">{{ errors.first('username') }}</p>
                </div>

                <div class="form-group">
                    <label for="password">
                        Password
                    </label>
                <input type="password" class="form-control" name="password" v-model="password" v-validate="'required|min:6'" >
                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                </div>
                <button class="btn bg-dark" :disabled="errors.any() || username.lenght == 0 || password.length == 0" type="button" @click="submit" >Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import { login } from '../shared/services/app.services';
export default {
    data () {
        return {
            username: '',
            password: '',
            token: ''
        };
    },
    methods: {
        submit () {
            let vm = this;
            login({userName: this.username, password: this.password})
            .then(res => {
                if (res.data.messageCode === 'LOGGED IN SUCCESSFULLY') {
                    vm.token = res.data.data.token;
                    vm.$store.dispatch('setToken', {token: vm.token});
                    vm.$router.push({path: '/dashboard'});
                }
            })
            .catch(err => {
                console.error(err);
            });
        }
    }
};
</script>

<style>

</style>
