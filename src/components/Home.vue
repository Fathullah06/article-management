<template>
    <div>
        <div>
          <app-advanced-search-shared @clicked="search" :advancedSearchflag="false"></app-advanced-search-shared>
        </div>
        <div v-if="articles.length!=0" v-for="(article,i) in articles" :key="i">
            <app-articles-list-shared
                :article="article"
                :id='i'
                :threeButtonFlag="true"
                :switchComponentFlag="false"
                :commentsFlag="true"
                :switchLabel="'Enable / Disable Article'">
            </app-articles-list-shared>
            <!-- <app-three-button-shared :id="i"></app-three-button-shared> -->
        </div>
        <div v-if="noArticleFound">
          <h1>No Article Found!</h1>
        </div>
        <!-- <div v-if="articles.length==0" class="col-sm-12 col-md-12">
            <p><md-progress-spinner md-mode="indeterminate"></md-progress-spinner></p>
        </div> -->
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesListShared from "./shared/components/ArticlesListShared.vue";
import AdvancedSearchShared from "./shared/components/AdvancedSearchShared.vue";
import { home, globalSearch } from "./shared/services/app.services";
export default {
  data() {
    return {
      articles: [],
      homeErrors: [],
      noArticleFound: false
    };
  },
  created() {
    let vm = this;
    home()
      .then(res => {
        if (res.data.messageCode === 'OK') {
          this.articles = res.data.articles;
          console.log(this.articles);
        } else if (res.data.messageCode === 'NO_ARTICLES') {
          vm.noArticleFound = true;
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
    search (data) {
      let payload = { searchText: data };
      let vm = this;
      globalSearch(payload)
      .then(res => {
        if (res.data.messageCode === 'OK') {
          vm.articles = res.data.articles;
        } else if (res.data.messageCode === 'NO_ARTICLES') {
          vm.noArticleFound = true;
          vm.articles = [];
        }
      })
      .catch(err => {
        console.error(err);
      })
    }
  }
};
</script>

<style scoped>
p {
  text-align: center;
}
.md-progress-spinner {
  margin: 24px;
}
</style>
