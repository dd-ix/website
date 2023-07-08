<template>
  <div class="index-container">
    <article>
      <ContentDoc :path="`/${locale}`"/>
    </article>

    <div>
      <h2>{{ $t('landingpage.news') }}</h2>
      <ul class="news-list">
        <li v-for="{ _path: slug, date, title, description, image } in articles" :key="slug">
          <ArticleCard :date="date" :description="description" :image="image" :slug="slug.substring(3)" :title="title"/>
        </li>
      </ul>
    </div>

    <article>
      <h1>{{ $t('landingpage.socials') }}</h1>
      <Socials/>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.index-container {
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

<script lang="ts" setup>
import {queryContent} from "#imports";
import ArticleCard from "~/compoents/ArticleCard.vue";
import Socials from "~/compoents/Socials.vue";

const {locale} = useI18n()
const articles = await queryContent(`/${locale._value}/news`)
  .sort({date: -1}) // show latest articles first
  .limit(3)
  .only(['_path', 'date', 'title', 'description', 'image'])
  .find();
</script>
