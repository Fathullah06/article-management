<template>
    <div>
        <form @submit.prevent="sendComment">
            <label>
                Comment
            </label>
            <textarea v-model="comment" cols="30" rows="1"></textarea>
            <button :disabled="!comment" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
import { commentOnArticle } from "../services/app.services";
export default {
  data() {
    return {
      comment: ""
    };
  },
  created() {
    if (this.commentFlag) {
      this.comment = this.commentData;
    }
  },
  props: ["id", "commentFlag", "commentData", "comments"],
  methods: {
    sendComment() {
      console.log({
        id: this.id,
        comment: this.comment
      });
      // this.comments.push({ comment: this.comment });
      this.$emit('sendComment', { comment: this.comment, id: this.id, edit: false });
      /* commentOnArticle(
        this.id,
        { comment: this.comment },
      )
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.error(err);
          alert("Something went wrong!!");
        });
      this.comment = ""; */
    }
  }
};
</script>
