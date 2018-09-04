<template>
    <div class="row">
        <div class="col-xs-10 col-sm-6 col-md-5 col-sm-offset-3">
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="name">
                        Article Name
                    </label>
                    <input class="form-control" type="text" name="name" data-vv-validate-on="blur"  v-model="article.articleName" v-validate="'required'" >
                    <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
                </div>
                <div class="form-group">
                    <label for="description">
                        Description
                    </label>
                    <textarea class="form-control" rows="3" type="text" name="description" data-vv-validate-on="blur" v-model="article.description" v-validate="'required'"> </textarea>
                    <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
                </div>
                <div class="form-group">
                    <label for="name">
                        Tags
                    </label>
                        <md-chips v-model="article.tag" md-placeholder="Tags"></md-chips>
                </div>
                <div class="form-group">
                    <label for="fileInput">
                        File
                    </label>
                        <input type="file" id="file" ref="myFiles" class="form-control"
                          @change="previewFiles" accept=".pdf,.doc,.docx,.ods,image/*" >
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-4">
                            <button :disabled="validate || errors.any()" class="btn btn-primary" type="button" @click="saveDraft">
                                Draft
                            </button>
                        </div>
                        <div class="col-md-4">
                            <b>
                                <md-radio class="md-primary" v-model="radio" value="private">Private</md-radio>
                                <md-radio class="md-primary" v-model="radio" value="public">Public</md-radio>
                            </b>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button :disabled="validate || errors.any() || (!radio)" class="btn btn-success" type="button" @click="submit">
                        Publish
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { Article } from "./article";
import {
  createArticle,
  getArticleById,
  editArticle
} from "../shared/services/app.services";
export default {
  data() {
    let article = new Article();
    return {
      article,
      radio: "",
      edit: false,
      file: ''
    };
  },
  methods: {
    saveDraft() {
      console.log("Save and make api call for draft");
      this.article.isPublic = false;
      this.article.isDraft = true;
      this.publishArticle(this.article);
    },
    submit() {
      if (this.radio === "public") {
        this.article.isPublic = true;
      } else {
        this.article.isPublic = false;
      }
      console.log(this.article);
      console.log(this.radio);
      this.article.isDraft = false;
      this.publishArticle(this.article);
    },
    publishArticle(data) {
      let vm = this;
      if (!vm.edit) {
        delete vm.article.articleId;
        createArticle(data, vm.file)
          .then(res => {
            if (res.data.messageCode === "SAVED_SUCCESSFULLY") {
              vm.$snotify.success("Saved successfully!", "Success");
              vm.$router.push({ path: "/" });
            } else if (res.data.messageCode === "NOT_SAVED") {
              vm.$snotify.error("Not Saved!", "Error");
            } else if (res.data.messageCode === "YOU_ARE_BLOCKED") {
              vm.$snotify.error("You are Blocked User", "Error");
              vm.$router.push({ path: "/" });
            }
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        editArticle(this.$route.params.id, data, vm.file)
          .then(res => {
            if (res.data.messageCode === "SAVED_SUCCESSFULLY") {
              vm.$snotify.success("Saved successfully!", "Success");
              vm.$router.push({ path: "/" });
            }
          })
          .catch(err => {
            console.error(err);
            alert('Something went wrong!!');
          });
      }
    },
    previewFiles(event) {
      console.log(this.$refs.myFiles.files);
      console.log(this.$refs.myFiles.files[0].name.split('.')[1]);
      const fileType = this.$refs.myFiles.files[0].name.split('.')[1];
      if (fileType === 'ods' || fileType === 'doc' || fileType === 'png' || fileType === 'pdf' || fileType === 'docx' || fileType === 'jpeg' ) {
        this.file = this.$refs.myFiles.files[0];
      } else {
        this.$snotify.info('File format not suppoerted');
        event.target.value = '';
      }

    }
  },
  computed: {
    validate() {
      if (
        this.article.articleName === "" ||
        this.article.description === "" ||
        this.article.tag.length === 0 ||
        this.file === ''
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    let vm = this;
    if (this.$route.params.id) {
      vm.edit = true;
      getArticleById(this.$route.params.id)
        .then(res => {
          if (res.data.messageCode === "OK") {
            vm.article = res.data.article;
            if (res.data.article.isPublic) {
              vm.radio = "public";
            } else if (!res.data.article.isPublic) {
              vm.radio = "private";
            }
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
</style>
