<template>
  <div class="container">
    <h1>News</h1>
    <ul>
      <li v-for="{ _path: slug, date, title, description, image } in articles" :key="slug">
        <ArticleListItem :date="date" :description="description" :image="image" :slug="slug" :title="title"/>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 1rem;
}
</style>

<script lang="ts" setup>
import {queryContent} from "#imports";
import ArticleListItem from "~/compoents/ArticleListItem.vue";

const articles = await queryContent('/news')
  .sort({date: -1}) // show latest articles first
  .only(['_path', 'date', 'title', 'description', 'image'])
  .find();
</script>
