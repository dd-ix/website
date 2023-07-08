<template>
  <div class="contact-container">
    <article>
      <ContentDoc :path="`/${locale}/contact`"/>
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
const {locale} = useI18n()
</script>
