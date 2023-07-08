<template>
  <article>
    <ContentDoc :path="`/${locale}/peering-joining-policy`"/>
  </article>
</template>

<script setup lang="ts">
const {locale} = useI18n()

</script>
