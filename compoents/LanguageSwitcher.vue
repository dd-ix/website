<script setup>
const {locale} = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath(locale === 'en' ? 'de' : 'en')" class="language-switcher-container">
    {{(locale === 'en' ? 'de' : 'en').toUpperCase()}}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.language-switcher-container {
  border: 0.1rem solid var(--text);
  padding: 0.1rem;
  text-decoration: none;
  color: var(--text);
}
</style>
