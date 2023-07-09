<script setup>
const {locale} = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath(locale === 'en' ? 'de' : 'en')" class="language-switcher-container not">
    {{(locale === 'en' ? 'de' : 'en').toUpperCase()}}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.language-switcher-container {
  outline: none;
  border: 0.1rem solid var(--text);
  border-radius: 0.4rem;
  color: var(--text);
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  padding: 0.2rem;
}
</style>
