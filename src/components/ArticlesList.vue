<template>
    <div>
        <div v-if="articles.length!=0" v-for="(article,i) in articles" :key="i">
            <app-articles-list-shared
                :article="article"
                :id='i'
                :threeButtonFlag="false"
                :twoButtonFlag="false"
                :switchComponentFlag="true"
                :switchLabel="'Block / Unblock Article'">
            </app-articles-list-shared>
            <!-- <app-three-button-shared :id="i"></app-three-button-shared> -->
        </div>
        <div v-else class="col-sm-12 col-md-12">
            <p>loading</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesListShared from "./shared/components/ArticlesListShared.vue";
export default {
    data() {
    return {
      articles: [
        { title: "Article Title1", body: "This is Article Body1" },
        { title: "Article Title2", body: "This is Article Body2" }
      ],
      homeErrors: []
    };
  },
    components: {
    appArticlesListShared: ArticlesListShared
  }
};
</script>

<style>

</style>
