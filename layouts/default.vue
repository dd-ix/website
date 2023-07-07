<template>
    <div class="default-container">
        <header>
            <NuxtLink to="/" class="not">
                <img src="../assets/logo.png">
            </NuxtLink>

            <nav>
                <NuxtLink to="/news">News</NuxtLink>
                <NuxtLink to="/documents">Documents</NuxtLink>
                <NuxtLink to="/todo">Looking Glas</NuxtLink>
                <NuxtLink to="/peering-joining-policy">Peering and Joining Policy</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </nav>
        </header>

        <main>
            <slot/>
        </main>

        <footer>
            <span>&copy; {{date}} <b>Dresden Internet Exchange</b> - <span>Keep Local Traffic Local.</span></span>
            <nav>
                <NuxtLink to="/imprint">Imprint</NuxtLink>
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

<script setup lang="ts">
const date = new Date().getFullYear();
</script>
