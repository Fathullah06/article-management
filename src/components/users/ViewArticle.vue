<template>
    <div v-if="displayArticle">
        <div >
            <app-articles-list-shared
                :article="article"
                :id="article.article._id"
                :threeButtonFlag="true"
                :twoButtonFlag="true"
                :switchComponentFlag="false"
                :commentsFlag="true"
                :switchLabel="'Enable / Disable Article'">
            </app-articles-list-shared>
            <!-- <app-three-button-shared :id="i"></app-three-button-shared> -->
        </div>
    </div>
</template>

<script>
import ArticlesListShared from '../shared/components/ArticlesListShared.vue';
import { viewArticle } from '../shared/services/app.services';
export default {
    data () {
        return {
            article: {
            },
            displayArticle: false
        };
    },
    components: {
        appArticlesListShared: ArticlesListShared
    },
    created () {
        let vm = this;
        console.log('Make api call for view article using route param id');
        viewArticle(this.$route.params.id)
        .then(res => {
            if (res.data.messageCode === 'OK') {
                vm.displayArticle = true;
                vm.article.article = res.data.article;
            }
        })
        .catch(err => {
            console.error(err);
        });
    }
};
</script>

<style scoped>

</style>
