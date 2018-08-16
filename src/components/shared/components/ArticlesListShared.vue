<template>
    <div class="col-sm-12 col-md-12">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{article.article.articleName}}</h3>
            </div>
            <div class="panel-body">
                {{article.article.description}}
            </div>
            <div class="panel-footer">
                <app-three-button-shared v-if="threeButtonFlag" :id="id" :likes="likes" :dislikes="dislikes" :comments="comments"></app-three-button-shared>
                <app-switch-component v-if="switchComponentFlag" :id="id" :name="switchLabel"></app-switch-component>
                <app-two-button-shared v-if="twoButtonFlag" :id="id"></app-two-button-shared>
            </div>
            <div v-if="commentsFlag" class="panel-footer">
                <p><b>Comments:</b></p>
                <div v-if="comments.length!=0" v-for="(comment,i) in comments" :key="i">
                    <p class="list-group-item">{{comment}}</p>
                </div>
                <div v-if="comments.length==0">
                    <p class="list-group-item">No comments...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import ThreeButtonShared from "./ThreeButtonShared.vue";
import SwitchComponent from "./SwitchComponent.vue";
import TwoButtonShared from "./TwoButtonShared";
export default {
  data() {
    return {
      id: this.article.article._id,
      comments: this.article.article.comments,
      likes: this.article.article.like,
      dislikes: this.article.article.disLike
    };
  },
    // created() {
    //   console.log(this.article.article.disLike);
    // },
  props: [
    "article",
    "threeButtonFlag",
    "twoButtonFlag",
    "switchComponentFlag",
    "switchLabel",
    "commentsFlag"
  ],
  components: {
    appThreeButtonShared: ThreeButtonShared,
    appSwitchComponent: SwitchComponent,
    appTwoButtonShared: TwoButtonShared
  }
};
</script>

<style scoped>
span {
  margin-left: 20px;
  margin-right: 20px;
}
abc {
  padding: -10px;
}
</style>
