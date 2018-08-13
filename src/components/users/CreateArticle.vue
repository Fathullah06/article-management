<template>
    <div class="row">
        <div class="col-xs-10 col-sm-6 col-md-5 col-sm-offset-3">
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="name">
                        Article Name
                    </label>
                    <input class="form-control" type="text" name="name" v-model="article.name" v-validate="'required'" >
                    <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
                </div>
                <div class="form-group">
                    <label for="description">
                        Description
                    </label>
                    <textarea class="form-control" rows="3" type="text" name="description" v-model="article.description" v-validate="'required'"> </textarea>
                    <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
                </div>
                <div class="form-group">
                    <label for="name">
                        Tags
                    </label>
                        <md-chips v-model="article.tags" md-placeholder="Tags"></md-chips>
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
                                <md-radio v-model="radio" value="private">Private</md-radio>
                                <md-radio v-model="radio" value="public">Public</md-radio>
                            </b>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button :disabled="validate || errors.any()" class="btn btn-success" type="button" @click="submit">
                        Publish
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {Article} from './article';
export default {
    data () {
        let article = new Article();
        return {
            article,
            radio: false
        };
    },
    methods: {
        saveDraft () {
            console.log('Save and make api call for draft');
            this.article.isPublic = false;
            this.article.isPrivate = false;
            this.article.isDraft = true;
            console.log(this.article);
        },
        submit () {

        }
    },
    computed: {
        validate () {
            if (this.article.name === '' || this.article.description === '' || this.article.tags.length === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
};

</script>

<style>

</style>
