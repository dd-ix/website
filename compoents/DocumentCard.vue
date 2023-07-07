<template>
    <a :href="slug" target="_blank" class="not">
        <article>
            <div class="image" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
            <div class="shadow"></div>
            <div class="content">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
        </article>
    </a>
</template>

<script setup lang="ts">
const {slug, title, image, description}
    = defineProps(['slug', 'title', 'image', 'description']);
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
      background-color: rgba(0, 0, 0, 0.65);
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
