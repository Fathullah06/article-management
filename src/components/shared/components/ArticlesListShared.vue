<template>
    <div class="col-sm-12 col-md-12">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title" style="cursor: pointer" @click="viewArticle">{{article.article.articleName}}</h3>
            </div>
            <div class="panel-body">
                {{article.article.description}}
            </div>
            <div class="panel-body abc">
                <img class="preview" @click="openImage" :src="article.article.fileUploads.path">
            </div>
            <div class="panel-footer">
                <app-three-button-shared
                  @sendComment="send"
                  v-if="threeButtonFlag"
                  :id="id"
                  :likes="likes" :dislikes="dislikes"
                  :isSaved="article.article.isSaved"
                  :isLiked="article.article.isLiked" :isDisLiked="article.article.isDisLiked"
                  :comments="comments">
                </app-three-button-shared>
                <app-switch-component v-if="switchComponentFlag" :status="article.article.isUnBlocked" :id="id" :articleList="articleList" :name="switchLabel"></app-switch-component>
                <app-two-button-shared v-if="twoButtonFlag" :id="id"></app-two-button-shared>
            </div>
            <div v-if="commentsFlag" class="panel-footer">
                <p><b>Comments:</b></p>
                <div v-if="comments.length!=0" v-for="(comment,i) in comments" :key="i">
                    <div class="list-group-item">
                        <p class="nav nav-pills nav-left">{{comment.comment}}</p>
                          <div v-if="commentByUser[i]">
                          <app-two-button-shared
                            @deleteComment="deleteComment" @sendComment="send"
                            :commentId='comment._id'
                            :id="article.article._id"
                            :comment="true"
                            :commentData="comment.comment">
                          </app-two-button-shared>
                        </div>
                        <!-- <app-two-button-shared @sendComment="send" :commentId='comment._id' :id="article.article._id" :comment="true" :commentData="comment.comment"></app-two-button-shared> -->
                    </div>
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
import {
  commentOnArticle,
  deleteComment,
  editComment
} from "../services/app.services";
// import { commentOnArticle, editComment } from '../services/app.services';
export default {
  data() {
    return {
      id: this.article.article._id,
      comments: this.article.article.comments,
      likes: this.article.article.like,
      dislikes: this.article.article.disLike,
      commentByUser: false
    };
  },
  created() {
    if (
      this.$cookie.get("token") === "" ||
      this.$store.getters.getToken === ""
    ) {
      this.login = false;
    } else {
      console.log(this.article.article.likeByWhom);
      console.log(
        this.$cookie.get("username"),
        "",
        this.$store.getters.getUsername
      );
      if (this.commentsFlag) {
        const dataOfComment = [...this.article.article.comments];
        this.commentByUser = dataOfComment.map(data =>
          data.commentByWhom.includes(this.$store.getters.getUsername)
        );
        console.log(this.commentByUser);
      }
    }
  },
  props: [
    "article",
    "threeButtonFlag",
    "twoButtonFlag",
    "switchComponentFlag",
    "switchLabel",
    "commentsFlag",
    "articleList",
    "isBlocked"
  ],
  components: {
    appThreeButtonShared: ThreeButtonShared,
    appSwitchComponent: SwitchComponent,
    appTwoButtonShared: TwoButtonShared
  },
  methods: {
    viewArticle() {
      if (this.$cookie.get("token") || this.$store.getters.getToken !== "") {
        if (this.$route.name === "drafts") {
          this.$router.push({
            path: "/viewArticle/" + this.article.article._id,
            query: { viewDraft: this.$route.name }
          });
        } else if (this.$route.name === "dashboard" && this.isBlocked) {
          this.$router.push({
            path: "/viewArticle/" + this.article.article._id,
            query: { isBlocked: this.isBlocked }
          });
        } else {
          this.$router.push({
            path: "/viewArticle/" + this.article.article._id
          });
        }
      } else {
        this.$router.push({ path: "/login" });
      }
    },
    send(data) {
      console.log(data);
      let vm = this;
      // commentOnArticle(data.id, { comment: data.comment })
      //   .then(res => {
      //     if (res.data.messageCode === "OK") {
      //       vm.comments = res.data.article.comments;
      //     }
      //   })
      //   .catch(err => {
      //     console.error(err);
      //     alert("Something went wrong!!");
      //   });
      if (!data.edit) {
        // Create comment api call here
        commentOnArticle(data.id, { comment: data.comment })
          .then(res => {
            if (res.data.messageCode === "OK") {
              vm.comments = res.data.article.comments;
              const dataOfComment = [...res.data.article.comments];
              vm.commentByUser = dataOfComment.map(data =>
                data.commentByWhom.includes(vm.$store.getters.getUsername)
              );
              console.log(vm.commentByUser);
              vm.$snotify.success("Comment added successfully!", "Success");
            } else if (res.data.messageCode === "NOT_SAVED") {
              vm.$snotify.error("Comment not saved", "Error");
            }
          })
          .catch(err => {
            console.error(err);
            alert("Something went wrong!!");
          });
      } else {
        // Edit comment api call here
        editComment(data.id, {
          commentId: data.commentId,
          editedComment: data.comment
        })
          .then(res => {
            if (res.data.messageCode === "OK") {
              vm.comments = res.data.article.comments;
              vm.$snotify.success("Comment edited successfully!", "Success");
            } else if (res.data.messageCode === "NOT_SAVED") {
              vm.$snotify.error("Comment not saved", "Error");
            }
          })
          .catch(err => {
            console.error(err);
            alert("Something went wrong");
          });
      }
    },
    deleteComment(data) {
      let vm = this;
      console.log(data);
      const data1 = {
        commentId: data.commentId
      };
      // debugger;
      deleteComment(vm.id, data1)
        .then(res => {
          // debugger;
          console.log(res);
          if (res.data.messageCode === "DELETED") {
            console.log("Deleted Successfully");

            vm.$snotify.success("Deleted successfully!", "Success");
            vm.comments = res.data.article.comments;
            // vm.$router.push({ path: "/" });
          }
        })
        .catch(err => {
          console.error(err);
          alert("Something went wrong!!");
        });
    },
    openImage(){
      alert('fdhgjfgd');
    }
  }
};
</script>

<style scoped>
span {
  margin-left: 20px;
  margin-right: 20px;
}
img {
  max-height: 200px;
  max-width: 200px;
}
/* img:hover{
  max-width: 500px;
  max-height: 500px;
} */
</style>
