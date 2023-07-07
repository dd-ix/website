<template>
    <NuxtLink :to="slug" class="not">
        <article>
            <div class="image" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
            <div class="shadow"></div>
            <div class="content">
                <h1>{{ title }}</h1>
                <p>
                    <b>{{ formatRelativeTime(date) }}.</b>
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
  position: relative;
  height: 200px;
  border-radius: 0.5rem;
  overflow: hidden;
  display: block;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &.image {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &.shadow {
      background-color: rgba(0, 0, 0, 0.5);
    }

    &.content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: #fff;
      padding: 1rem;

      h1, p {
        margin: 0;
      }
    }
  }
}
</style>
