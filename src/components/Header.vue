<template>
 <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Article Management</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/dashboard" activeClass="active" tag="li"><a>Dashboard</a></router-link>
                    <router-link to="/createArticle" activeClass="active" tag="li"><a>Create</a></router-link>
                    <router-link to="/createdArticles" activeClass="active" tag="li"><a>Articles</a></router-link>
                    <router-link to="/articlesList" activeClass="active" tag="li"><a>Articles List</a></router-link>
                    <router-link to="/usersList" activeClass="active" tag="li"><a>Users List</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <router-link to="/login" activeClass="active" tag="li"><a>Login</a></router-link>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                loggedIn: true
            };
        },
        methods: {
            login () {

            },
            logout () {

            }
        }
    };
</script>

<style scoped>

</style>
