<template>
    <div>
        <ul class="nav nav-pills">
            <li>{{counter}}</li>
            <li @click='like'>
              <span id="like"
                v-bind:class="{ active: likeFlag }"
                class="glyphicon glyphicon-thumbs-up "
                aria-hidden="true"
                data-toggle="tooltip" data-placement="bottom" title="Like">
              </span>
            </li>
            <li @click="dislike">
              <span id="disLike"
                v-bind:class="{ active: dislikeFlag }"
                class="glyphicon glyphicon-thumbs-down"
                aria-hidden="true"
                data-toggle="tooltip" data-placement="bottom" title="Dislike">
              </span>
            </li>
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
            <form @submit.prevent="sendComment">
                <label>
                    Comment
                    <textarea v-model="comment" cols="30" rows="1"></textarea>
                </label>
                <button :disabled="!comment" type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      counter: 0,
      likeFlag: false,
      dislikeFlag: false,
      commentFlag: false,
      comment: ""
    };
  },
  props: ["id"],
  methods: {
    like() {
      if (this.likeFlag == true) {
        return;
      } else {
        this.likeFlag = true;
        this.dislikeFlag = false;
        console.log({
          id: this.id,
          like: this.likeFlag,
          dislike: this.dislikeFlag
        });
        return this.counter++;
      }
    },
    dislike() {
      if (this.dislikeFlag == true) {
        return;
      } else {
        this.dislikeFlag = true;
        this.likeFlag = false;
        console.log({
          id: this.id,
          like: this.likeFlag,
          dislike: this.dislikeFlag
        });
        return this.counter--;
      }
    },
    commentClick() {
      this.commentFlag = !this.commentFlag;
    },
    sendComment() {
      console.log({
        id: this.id,
        comment: this.comment
      });
      this.comment = "";
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
</style>