<template>
    <div>
        <ul class="nav nav-pills">
            <li>{{likeCounter}}</li>
            <li @click='like'>
              <span id="like"
                v-bind:class="{ active: likeFlag }"
                class="glyphicon glyphicon-thumbs-up "
                aria-hidden="true"
                data-toggle="tooltip" data-placement="bottom" title="Like">
              </span>
            </li>
            <li>{{dislikeCounter}}</li>
            <li @click="dislike">
              <span id="disLike"
                v-bind:class="{ active: dislikeFlag }"
                class="glyphicon glyphicon-thumbs-down"
                aria-hidden="true"
                data-toggle="tooltip" data-placement="bottom" title="Dislike">
              </span>
            </li>
            <div class="navbar-right">
                <li @click="bookmarkClick">
                  <span id="bookmarkFlag"
                    v-bind:class="{ active: bookmarkFlag }"
                    class="glyphicon glyphicon-bookmark"
                    aria-hidden="true"
                    data-toggle="tooltip" data-placement="bottom" title="Bookmark">
                  </span>
                </li>
            </div>
            <div class="navbar-right">
                <li @click="commentClick">
                  <span id="commentFlag"
                    v-bind:class="{ active: commentFlag }"
                    class="glyphicon glyphicon-pencil"
                    aria-hidden="true"
                    data-toggle="tooltip" data-placement="bottom" title="Comment">
                  </span>
                </li>
            </div>
        </ul>
        <div v-if="commentFlag">
            <!-- <form @submit.prevent="sendComment">
                <label>
                    Comment
                </label>
                <textarea v-model="comment" cols="30" rows="1"></textarea>
                <button :disabled="!comment" type="submit" class="btn btn-primary">Submit</button>
            </form> -->
            <app-add-comment-form @sendComment="send" :id="id" :comments="comments"></app-add-comment-form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import {
  likeArticle,
  dislikeArticle,
  commentOnArticle,
  bookmarkedArticle
} from "../services/app.services";
import AddCommentForm from "./AddCommentForm.vue";
export default {
  data() {
    return {
      likeCounter: this.likes,
      dislikeCounter: this.dislikes,
      likeFlag: false,
      dislikeFlag: false,
      bookmarkFlag: false,
      commentFlag: false,
      // comment: "",
      login: true
    };
  },
  computed: {},
  components: {
    appAddCommentForm: AddCommentForm
  },
  props: [
    "id",
    "likes",
    "dislikes",
    "comments",
    "isLiked",
    "isDisLiked",
    "isSaved"
  ],
  created() {
    if (
      this.$cookie.get("token") === "" ||
      this.$store.getters.getToken === ""
    ) {
      this.login = false;
    } else {
      this.likeFlag = this.isLiked;
      this.dislikeFlag = this.isDisLiked;
      this.bookmarkFlag = this.isSaved;
    }
  },
  methods: {
    like() {
      if (
        this.$cookie.get("token") !== null ||
        this.$store.getters.getToken !== ""
      ) {
        if (this.likeFlag == true) {
          this.$snotify.info("You have already liked this article!");
        } else {
          this.likeFlag = true;
          likeArticle(this.id, this.$store.getters.getToken)
            .then(res => {
              if (res.data.messageCode === "ALREADY_LIKED") {
                // alert("Already Liked");
                this.$snotify.info("You have already liked this article!");
              } else {
                this.likeCounter = res.data.likes.like;
                return this.likeCounter;
              }
            })
            .catch(err => {
              console.error(err);
            });
        }
      } else {
        this.$router.push({
          path: "/login",
          query: { redirectUrl: this.$route.fullPath }
        });
      }
    },
    dislike() {
      if (
        this.$cookie.get("token") !== null ||
        this.$store.getters.getToken !== ""
      ) {
        if (this.dislikeFlag == true) {
          this.$snotify.info("You have already disliked this article!");
        } else {
          this.dislikeFlag = true;
          dislikeArticle(this.id, this.$store.getters.getToken)
            .then(res => {
              if (res.data.messageCode === "ALREADY_DISLIKED") {
                this.$snotify.info("You have already disliked this article!");
              } else {
                this.dislikeCounter = res.data.dislikes.disLike;
              }
            })
            .catch(err => {
              console.error(err);
            });
        }
      } else {
        this.$router.push({
          path: "/login",
          query: { redirectUrl: this.$route.fullPath }
        });
      }
    },
    bookmarkClick() {
      let vm = this;
      if (
        vm.$cookie.get("token") !== null ||
        vm.$store.getters.getToken !== ""
      ) {
        vm.bookmarkFlag = !vm.bookmarkFlag;
        bookmarkedArticle(vm.id, { isSaved: vm.bookmarkFlag })
          .then(res => {
            if (res.data.messageCode === "SAVED_SUCCESSFULLY" && vm.bookmarkFlag === true) {
              vm.$snotify.success('Bookmark saved!', 'Success');
            } else if (res.data.messageCode === "SAVED_SUCCESSFULLY" && vm.bookmarkFlag === false) {
              vm.$snotify.error('Bookmark removed!', 'Success');
            }
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        vm.$router.push({
          path: "/login",
          query: { redirectUrl: this.$route.fullPath }
        });
      }
    },
    commentClick() {
      if (
        this.$cookie.get("token") !== null ||
        this.$store.getters.getToken !== ""
      ) {
        this.commentFlag = !this.commentFlag;
      } else {
        this.$router.push({
          path: "/login",
          query: { redirectUrl: this.$route.fullPath }
        });
      }
    },
    send(data) {
      this.$emit("sendComment", data);
      this.commentFlag = false;
    }
  }
};
</script>

<style scoped>
span {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
}
#like:hover,
#like.active {
  color: lightgreen;
}
#disLike:hover,
#disLike.active {
  color: lightcoral;
}
#commentFlag:hover,
#commentFlag.active {
  color: rgb(138, 93, 34);
}
#bookmarkFlag:hover,
#bookmarkFlag.active {
  /* color: rgb(91, 80, 251); */
  color: #337ab7;
}
</style>