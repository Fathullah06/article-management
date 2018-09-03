<template>
    <div>
        <ul class="nav nav-pills nav-right">
            <li @click="delete1">
              <span id="delete"
                v-bind:class="{ active: deleteFlag }"
                class="glyphicon glyphicon-trash"
                aria-hidden="true"
                data-toggle="tooltip" data-placement="bottom" title="Delete">
              </span>
            </li>
            <li @click='edit'>
              <span id="edit"
                v-bind:class="{ active: editFlag }"
                class="glyphicon glyphicon-edit"
                aria-hidden="true"
                data-toggle="tooltip" data-placement="bottom" title="Edit">
              </span>
            </li>
        </ul>
        <div v-if="editFlag">
            <app-add-comment-form :id="id" :commentFlag="comment" :commentData="commentData"></app-add-comment-form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { deleteArticle, deleteComment } from "../services/app.services";
import AddCommentForm from "./AddCommentForm.vue";
export default {
  data() {
    return {
      editFlag: false,
      deleteFlag: false
    };
  },
  props: ["id", "commentId", "comment", "commentData"],
  components: {
    appAddCommentForm: AddCommentForm
  },
  methods: {
    edit() {
      if (this.comment) {
        this.editFlag = !this.editFlag;
        console.log("Edit Comment: " + this.id);
      } else {
        console.log("Edit Article: " + this.id);
        this.$router.push({ path: "/editArticle/" + this.id });
      }
    },
    delete1() {
      let vm = this;
      if (vm.comment) {
        console.log("Delete Comment: " + vm.commentId);
        const data = {
          commentId: vm.commentId
        };
        deleteComment(vm.id, data)
          .then(res => {
            if (res.data.messageCode === "DELETED") {
              console.log("Deleted Successfully");
              console.log(res);
              vm.$snotify.success("Deleted successfully!", "Success");
              // vm.$router.push({ path: "/" });
            }
          })
          .catch(err => {
            console.error(err);
            alert("Something went wrong!!");
          });
      } else {
        console.log("Delete Article: " + this.id);
        deleteArticle(this.id)
          .then(res => {
            if (res.data.messageCode === "DELETED") {
              console.log("Deleted Successfully");
              vm.$snotify.success("Deleted successfully!", "Success");
              vm.$router.push({ path: "/dashboard" });
            }
          })
          .catch(err => {
            console.error(err);
            alert("Something went wrong!!");
          });
      }
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
.nav-pills > li {
  float: right;
}
#edit:hover,
#edit.active {
  color: lightgreen;
}
#delete:hover,
#delete.active {
  color: lightcoral;
}
</style>