<template>
    <div class="panel-group" id="accordion">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">My Trending Articles</a>
                </h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse in">
                <div class="panel-body" v-if="articles.length!=0" v-for="(article,i) in articles" :key="i">
                    <app-articles-list-shared
                        :article="article"
                        :id=1
                        :threeButtonFlag="true"
                        :switchComponentFlag="false"
                        :switchLabel="'Enable / Disable Article'">
                    </app-articles-list-shared>
                </div>
                <div class="panel-footer">
                    Total number of Trending Articles:{{articles.length}}
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">My Unapproved Articles</a>
                </h4>
            </div>
            <div id="collapse2" class="panel-collapse collapse">
                <div class="panel-body" v-if="articles.length!=0" v-for="(article,i) in articles" :key="i">
                    <app-articles-list-shared
                        :article="article"
                        :id=1
                        :threeButtonFlag="true"
                        :switchComponentFlag="false"
                        :switchLabel="'Enable / Disable Article'">
                    </app-articles-list-shared>
                </div>
                <div class="panel-footer">
                    Total number of Unapproved Articles:{{articles.length}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import ArticlesListShared from "../shared/components/ArticlesListShared";
export default {
  data() {
    return {
      articles: [
        { title: "Article Title1", body: "This is Article Body1" },
        { title: "Article Title2", body: "This is Article Body2" }
      ]
    };
  },
  components: {
    appArticlesListShared: ArticlesListShared
  }
};
</script>

<style>

</style>
