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
    </div>
</template>

<script>
/* eslint-disable */
import { deleteArticle } from '../services/app.services'
export default {
  data() {
    return {
      editFlag: false,
      deleteFlag: false
    };
  },
  props: ["id"],
  methods: {
    edit() {
      console.log("Edit Article: " + this.id);
      this.$router.push({path: '/editArticle/' + this.id});
    },
    delete1() {
      let vm = this;
      console.log("Delete Article: " + this.id);
      deleteArticle(this.id)
      .then(res => {
        if (res.data.messageCode === 'DELETED') {
          console.log('Deleted Successfully');
          vm.$router.push({path: '/dashboard'});
        }
      })
      .catch(err => {
        console.error(err);
      });
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