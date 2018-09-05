<template>
    <div>
        <div v-if="articles.length!=0" v-for="(article,i) in articles" :key="i">
            <app-articles-list-shared
                :article="article"
                :id='i'
                :threeButtonFlag="false"
                :twoButtonFlag="false"
                :switchComponentFlag="false"
                :switchLabel="'Enable / Disable Article'">
            </app-articles-list-shared>
        </div>
        <div v-if="articles.length==0" class="col-sm-12 col-md-12">
            <h1>No article found !</h1>
        </div>
        <!-- <div v-if="noArticle"  class="col-sm-12 col-md-12">
           <p><b>You have not created any articles!!!!</b></p>
        </div> -->
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesListShared from "../shared/components/ArticlesListShared.vue";
import AdvancedSearchShared from "../shared/components/AdvancedSearchShared.vue";
import {
  advancedSearch,
  getBookmarkedArticles
} from "../shared/services/app.services";
import axios from "axios";
export default {
  data() {
    return {
      articles: []
    };
  },
  created() {
    let vm = this;
    getBookmarkedArticles()
      .then(res => {
        if (res.data.messageCode === 'OK') {
        vm.articles = res.data.articles;
        } else if (res.data.messageCode === 'NO_ARTICLES') {
          vm.articles = [];
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
  components: {
    appArticlesListShared: ArticlesListShared,
    appAdvancedSearchShared: AdvancedSearchShared
  }
};
</script>

<style scoped>
p {
  text-align: center;
}
</style>
