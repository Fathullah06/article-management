<template>
    <div v-if="displayArticle">
        <div >
            <app-articles-list-shared
                :article="article"
                :id="article.article._id"
                :threeButtonFlag="draftFlag"
                :twoButtonFlag="true"
                :switchComponentFlag="false"
                :commentsFlag="draftFlag"
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
            displayArticle: false,
            draftFlag: true
        };
    },
    components: {
        appArticlesListShared: ArticlesListShared
    },
    created () {
        let vm = this;
        if (vm.$route.query.viewDraft) {
            vm.draftFlag = false;
        }
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
            alert('Something went wrong!!');
        });
    }
};
</script>

<style scoped>

</style>
