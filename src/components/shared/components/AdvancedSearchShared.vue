<template>
    <div class="">
        <form class="navbar-form navbar-right">
            <div class="form-group">
                <input id="search"
                    type="text"
                    v-model="searchText"
                    class="form-control"
                    placeholder="Search"
                    data-toggle="tooltip" data-placement="bottom" title="Search Article">
                <div v-if="advancedSearchflag" class="checkbox">
                    <md-checkbox  class="md-primary" @click="!byArticleTitle" v-model="byArticleTitle"><b> Article Title</b></md-checkbox>
                    <md-checkbox  class="md-primary" @click="!byUserName" v-model="byUserName"> <b> User-name</b></md-checkbox>
                    <md-checkbox  class="md-primary" @click="!byTags" v-model="byTags"> <b>Tags</b> </md-checkbox>
                </div>
            </div>
            <button type="button" :disabled="!searchText"
                @click='submit' class="btn btn-default"
                data-toggle="tooltip" data-placement="bottom" title="Submit">
                    Submit
            </button>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      searchText: "",
      byArticleTitle: false,
      byUserName: false,
      byTags: false,
    };
  },
  props:["advancedSearchflag"],
  methods: {
    submit(event) {
      if (this.advancedSearchflag) {
        return console.log({
          searchText: this.searchText,
          byArticleTitle: this.byArticleTitle,
          byUserName: this.byUserName,
          byTags: this.byTags
        });
      } else {
        return console.log({
          searchText: this.searchText
        });
      }
    }
  }
};
</script>

<style scoped>
.md-checkbox {
  margin: 10px;
}
.md-checkbox .md-checkbox-container {
  margin-right: 5px;
}
input[type="text"] {
  width: 200px;
  transition: ease-in-out, width 0.35s ease-in-out;
}
input[type="text"]:focus {
  width: 400px;
}
</style>
