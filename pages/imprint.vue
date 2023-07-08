<template>
  <article>
    <ContentDoc :path="`/${locale}/imprint`"/>
  </article>
</template>

<script setup lang="ts">
const {locale} = useI18n()

</script>
