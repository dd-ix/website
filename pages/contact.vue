<template>
    <div class="container">
        <article>
            <ContentDoc/>
        </article>
        <article>
            <h1>Socials</h1>
            <Socials/>
        </article>
    </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
<script setup lang="ts">
import Socials from "~/compoents/Socials.vue";
</script>
