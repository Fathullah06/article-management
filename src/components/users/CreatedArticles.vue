<template>
    <div>
        <div>
          <app-advanced-search-shared :advancedSearchflag="true"></app-advanced-search-shared>
        </div>
        <div v-if="articles.length!=0" v-for="(article,i) in articles" :key="i">
            <app-articles-list-shared
                :article="article"
                :id='i'
                :threeButtonFlag="false"
                :twoButtonFlag="true"
                :switchComponentFlag="false"
                :switchLabel="'Enable / Disable Article'">
            </app-articles-list-shared>
        </div>
        <div v-else class="col-sm-12 col-md-12">
            <p>loading</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesListShared from "../shared/components/ArticlesListShared.vue";
import AdvancedSearchShared from "../shared/components/AdvancedSearchShared.vue";
import axios from "axios";
export default {
  data() {
    return {
      articles: [
        {
          article: {
            articleName: "Article Title1",
            description: "This is Article Body1",
            comments: [],
            _id: 0
          }
        },
        {
          article: {
            articleName: "Article Title2",
            description: "This is Article Body2",
            comments: [],
            _id: 1
          }
        }
      ],
      homeErrors: []
    };
  },
  components: {
    appArticlesListShared: ArticlesListShared,
    appAdvancedSearchShared: AdvancedSearchShared
  }
};
</script>

<style>
</style>
