<template>
 <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Article Management</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link v-if="loggedIn" to="/dashboard" activeClass="active" tag="li"><a>Dashboard</a></router-link>
                    <router-link v-if="loggedIn" to="/createArticle" activeClass="active" tag="li"><a>Create</a></router-link>
                    <router-link v-if="loggedIn" to="/createdArticles" activeClass="active" tag="li"><a>Articles</a></router-link>
                    <router-link v-if="loggedIn && isAdmin" to="/articlesList" activeClass="active" tag="li"><a>Articles List</a></router-link>
                    <router-link v-if="loggedIn && isAdmin" to="/usersList" activeClass="active" tag="li"><a>Users List</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li activeClass="active" v-if="!loggedIn"><a @click="login" style="cursor: pointer">Login</a></li>
                    <li activeClass="active" v-if="loggedIn"><a @click="logout" style="cursor: pointer">Logout</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                isAdmin: false
            };
        },
        methods: {
            login () {
                this.$router.push({path: 'login'});
            },
            logout () {
                this.$store.dispatch('setToken', {token: ''});
                this.$store.dispatch('setRole', {role: ''});
                this.$cookie.delete('token');
                this.$cookie.delete('role');
                this.$router.push({path: 'login'});
            }
        },
        computed: {
            loggedIn () {
                // debugger;
                if (this.$store.getters.getToken !== '' || this.$cookie.get('token')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        created () {
            if (this.$cookie.get('role') === 'admin' || this.$store.getters.getRole === 'admin') {
                this.isAdmin = true;
            }
        }
    };
</script>

<style scoped>

</style>
