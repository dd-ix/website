<template>
    <NuxtLink :to="slug" clas="not">
        <article>
            <img :src="image">
            <div class="content">
                <h1>{{ title }}</h1>
                <p>
                    <b>{{ formatRelativeTime(date) }}.</b>
                    <br>
                    {{ description }}
                </p>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup lang="ts">
import {formatRelativeTime} from "assets/date-format";

const {slug, title, image, description, date}
    = defineProps(['slug', 'title', 'image', 'description', 'date']);
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--text);

  article {
    display: flex;
    padding: 0;

    img {
      height: 12rem;
    }

    .content {
      padding: 1rem;
    }
  }
}
</style>
