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
                :twoButtonFlag="true"
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
  createdArticles
} from "../shared/services/app.services";
import axios from "axios";
export default {
  data() {
    return {
      articles: [],
    };
  },
  created() {
    let vm = this;
    createdArticles()
      .then(res => {
        console.log(res);
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
  },
  methods: {
    search(data) {
      let vm = this;
      advancedSearch(data)
        .then(res => {
          if (res.data.messageCode === "OK") {
            vm.articles = res.data.articles;
          } else if (res.data.messageCode === 'NO_ARTICLES') {
            vm.articles = [];
          }
        })
        .catch(err => {
          console.error(err);
          alert('Something went wrong!!');
        });
    }
  }
};
</script>

<style scoped>
p {
  text-align: center;
}
</style>
