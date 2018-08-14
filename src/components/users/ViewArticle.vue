<template>
    <div>
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
export default {
    data () {
        return {
            article: {
                    article: {
                    articleName: 'Article Title1',
                    description: 'This is Article Body1',
                    comments: [],
                    _id: 0
                }
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
