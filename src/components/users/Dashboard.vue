<template>
    <div class="panel-group" id="accordion">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">My Trending Articles</a>
                </h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse in">
                <div class="panel-body" v-if="myTrendingArticles.length!=0" v-for="(article,i) in myTrendingArticles" :key="i">
                    <app-articles-list-shared
                        :article="article"
                        :id=1
                        :threeButtonFlag="true"
                        :switchComponentFlag="false"
                        :switchLabel="'Enable / Disable Article'">
                    </app-articles-list-shared>
                </div>
                <div class="panel-footer">
                    Total number of Trending Articles:{{myTrendingArticles.length}}
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">My Blocked Articles</a>
                </h4>
            </div>
            <div id="collapse2" class="panel-collapse collapse">
                <div class="panel-body" v-if="myBlockedArticles.length!=0" v-for="(article,i) in myBlockedArticles" :key="i">
                    <app-articles-list-shared
                        :article="article"
                        :id=1
                        :threeButtonFlag="true"
                        :switchComponentFlag="false"
                        :switchLabel="'Enable / Disable Article'">
                    </app-articles-list-shared>
                </div>
                <div class="panel-footer">
                    Total number of Blocked Articles:{{myBlockedArticles.length}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesListShared from "../shared/components/ArticlesListShared";
import { myTrendingArticles, myBlockedArticles } from '../shared/services/app.services'
export default {
  data() {
    return {
      myTrendingArticles: [],
      myBlockedArticles: []
    };
  },
  components: {
    appArticlesListShared: ArticlesListShared
  },
  created () {
      let vm = this;
      myTrendingArticles()
      .then(res => {
        debugger;
        if (res.data.messageCode === 'OK') {
            vm.myTrendingArticles = res.data.articles;
        } else if (res.data.messageCode === 'NO_ARTICLES') {
            vm.myTrendingArticles = [];
        }
      })
      .catch(err => {
          console.error(err);
      });

      myBlockedArticles()
      .then(res => {
        debugger;
        if (res.data.messageCode === 'OK') {
            vm.myBlockedArticles = res.data.articles;
        } else if (res.data.messageCode === 'NO_ARTICLES') {
            vm.myBlockedArticles = [];
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
