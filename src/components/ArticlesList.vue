<template>
    <div>
        <div>
          <app-advanced-search-shared @clicked="search" :advancedSearchflag="true"></app-advanced-search-shared>
        </div>
        <div v-if="articles.length!=0" v-for="(article,i) in articles" :key="i">
            <app-articles-list-shared
                :article="article"
                :id='i'
                :threeButtonFlag="false"
                :twoButtonFlag="false"
                :switchComponentFlag="true"
                :switchLabel="'Block / Unblock Article'"
                :articleList="true">
            </app-articles-list-shared>
            <!-- <app-three-button-shared :id="i"></app-three-button-shared> -->
        </div>
        <div v-else class="col-sm-12 col-md-12">
            <p>No article found!</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesListShared from "./shared/components/ArticlesListShared.vue";
import AdvancedSearchShared from "./shared/components/AdvancedSearchShared.vue";
import { articlesListBlock, advancedSearch } from "./shared/services/app.services";
export default {
  data() {
    return {
      articles: null,
      homeErrors: []
    };
  },
  created() {
    articlesListBlock()
      .then(res => {
        this.articles = res.data.article;
        console.log(res.data.article);
        console.log(this.articles);
      })
      .catch(err => {
        console.error(err);
      });
  },
  components: {
    appArticlesListShared: ArticlesListShared,
    appAdvancedSearchShared: AdvancedSearchShared
  },
  methods: {
    search (data) {
      let vm = this;
      advancedSearch(data)
      .then(res => {
        if (res.data.messageCode === 'OK') {
          vm.articles = res.data.articles;
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
