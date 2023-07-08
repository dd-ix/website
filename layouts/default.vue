<template>
  <div class="default-container">
    <header>
      <NuxtLink class="not" :to="localePath('/')">
        <img src="../assets/logo.png" alt="DD-IX">
      </NuxtLink>

      <nav>
        <NuxtLink :to="localePath('/news')">{{ $t('header.news') }}</NuxtLink>
        <NuxtLink :to="localePath('/documents')">{{ $t('header.documents') }}</NuxtLink>
        <NuxtLink :to="localePath('/todo')">{{ $t('header.lookingGlas') }}</NuxtLink>
        <NuxtLink :to="localePath('/peering-joining-policy')">{{ $t('header.peeringJoiningPolicy') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')">{{ $t('header.contact') }}</NuxtLink>
      </nav>
    </header>

    <main>
      <slot/>
    </main>

    <footer>
      <span>&copy; {{ date }} <b>{{ $t('branding.name') }}</b> - <span>{{ $t('branding.slogan') }}</span></span>
      <nav>
        <NuxtLink :to="localePath('/imprint')">{{ $t('footer.imprint') }}</NuxtLink>
      </nav>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.default-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

header, main, footer {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  img {
    height: 2rem;
  }
}

header, footer {
  nav {
    display: flex;
    gap: 0.5rem;
  }
}

footer {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
</style>

<script lang="ts" setup>
import LanguageSwitcher from "~/compoents/LanguageSwitcher.vue";

const date = new Date().getFullYear();
const localePath = useLocalePath()
</script>
