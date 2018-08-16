<template>
    <div>
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
import ArticlesListShared from '../shared/components/ArticlesListShared.vue';
import { getDrafts } from '../shared/services/app.services';
export default {
    data () {
    return {
      articles: [
      ],
      noDrafts: false
    };
  },
  components: {
    appArticlesListShared: ArticlesListShared
  },
  created () {
      let vm = this;
      getDrafts()
      .then(res => {
        if (res.data.messageCode === 'OK') {
            vm.articles = res.data.articles;
        } else if (res.data.messageCode === 'NO_DRAFTS') {
            vm.noDrafts = true;
            vm.articles = [];
        }
      })
      .catch(err => {
          console.error(err);
      });
  }
};
</script>

<style>

</style>
