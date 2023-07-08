<template>
  <div class="contact-container">
    <article>
      <ContentDoc/>
    </article>
    <article>
      <h1>{{ $t('contact.socials') }}</h1>
      <Socials/>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
<script lang="ts" setup>
import Socials from "~/compoents/Socials.vue";
</script>
