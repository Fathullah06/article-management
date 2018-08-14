<template>
    <div>
        <div >
            <app-articles-list-shared
                :article="article"
                :id='article.id'
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
export default {
    data () {
        return {
            article: {
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recuolestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
            }
        };
    },
    components: {
        appArticlesListShared: ArticlesListShared
    }
};
</script>

<style scoped>

</style>
