<template>
    <div class="col-sm-12 col-md-12">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{article.title}}</h3>
            </div>
            <div class="panel-body">
                {{article.body}}
            </div>
            <div class="panel-footer">
                <app-three-button-shared v-if="threeButtonFlag" :id="id"></app-three-button-shared>
                <!-- <app-switch-component v-if="switchComponentFlag" :id="id" :name="switchLabel"></app-switch-component> -->
            </div>
            <div class="panel-footer">
                <p><b>Comments:</b></p>
                <p class="list-group-item">{{article.title}}</p>
                <p class="list-group-item">{{article.title}}</p>
                <p class="list-group-item">{{article.title}}</p>
                <p class="list-group-item">{{article.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import ThreeButtonShared from "./ThreeButtonShared.vue"
export default {
  props: [
    "article",
    "id",
    "threeButtonFlag"
  ],
  components: {
    appThreeButtonShared: ThreeButtonShared,
  }
};
</script>

<style scoped>
span {
  margin-left: 20px;
  margin-right: 20px;
}
abc{
    padding: -10px;
}
</style>
