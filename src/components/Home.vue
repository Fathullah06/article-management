<template>
    <div>
        <div v-if="articles.length!=0" v-for="(article,i) in articles" :key="i">
            <app-articles-list-shared
                :article="article"
                :id='i'
                :threeButtonFlag="true"
                :switchComponentFlag="false"
                :switchLabel="'Enable / Disable Article'">
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
import axios from 'axios';
export default {
  data() {
    return {
      articles: [],
      homeErrors: []
    };
  },

  created() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.articles = response.data;
      })
      .catch(e => {
        this.homeErrors.push(e);
        console.log(e);
      });
  },
  components: {
    appArticlesListShared: ArticlesListShared
  }
};
</script>

<style>
</style>
