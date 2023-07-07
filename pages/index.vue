<template>
    <div class="container">
        <article>
            <ContentDoc/>
        </article>

        <div>
            <h2>News</h2>
            <ul class="news-list">
                <li v-for="{ _path: slug, date, title, description, image } in articles" :key="slug">
                    <ArticleCard :slug="slug" :title="title" :date="date" :description="description" :image="image"/>
                </li>
            </ul>
        </div>

        <article>
            <h1>Socials</h1>
            <Socials/>
        </article>
    </div>
</template>

<style lang="scss" scoped>
.image {
  background-image: url("../assets/landingpage.webp");
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

ul.news-list {
  padding: 0;
  list-style-type: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>

<script setup lang="ts">
import {queryContent} from "#imports";
import ArticleCard from "~/compoents/ArticleCard.vue";
import Socials from "~/compoents/Socials.vue";

const articles = await queryContent('/news')
    .sort({date: -1}) // show latest articles first
    .limit(3)
    .only(['_path', 'date', 'title', 'description', 'image'])
    .find();
</script>
