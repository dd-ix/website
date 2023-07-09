<template>
  <div class="default-container">
    <header>
      <NuxtLink :to="localePath('/')" class="not">
        <img alt="DD-IX" src="../assets/logo.png">
      </NuxtLink>

      <nav>
        <svg class="mobile-only" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:var(--text)"
             @click="menuOpen=true">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>

        <div :class="{hidden: !menuOpen}" class="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:var(--text)"
               @click="menuOpen=false">
            <path d="m19 6-1-1-6 6-6-6-1 1 6 6-6 6 1 1 6-6 6 6 1-1-6-6z"/>
          </svg>
          <NuxtLink @click="menuOpen=false" :to="localePath('/news')">{{ $t('header.news') }}</NuxtLink>
          <NuxtLink @click="menuOpen=false" :to="localePath('/documents')">{{ $t('header.documents') }}</NuxtLink>
          <NuxtLink @click="menuOpen=false" :to="localePath('/todo')">{{ $t('header.lookingGlas') }}</NuxtLink>
          <NuxtLink @click="menuOpen=false" :to="localePath('/peering-joining-policy')">
            {{ $t('header.peeringJoiningPolicy') }}
          </NuxtLink>
          <NuxtLink @click="menuOpen=false" :to="localePath('/contact')">{{ $t('header.contact') }}</NuxtLink>
          <LanguageSwitcher @click="menuOpen=false"></LanguageSwitcher>
          <button @click="switchTheme(); menuOpen=false" class="button">
            {{ theme ?? isDark ? 'Light' : 'Dark' }} Mode
          </button>
        </div>
      </nav>
    </header>

    <main>
      <slot/>
    </main>

    <footer>
      <article>
        <h1>Sponsors</h1>
        <div class="sponsors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 71">
            <defs>
              <clipPath id="a">
                <path d="M0 2h198v54H0Zm0 0"/>
              </clipPath>
              <clipPath id="b">
                <path d="M0 15h198v54H0Zm0 0"/>
              </clipPath>
            </defs>
            <g clip-path="url(#a)">
              <path
                d="M176 35c9 9 16 16 22 20h-17l-12-12Zm-15 0C134 6 122 6 93 4L0 3V2h122c7 0 12 1 18 3 11 5 21 14 29 23Zm0 0"
                style="stroke:none;fill-rule:evenodd;fill:#e3000f;fill-opacity:1"/>
            </g>
            <path
              d="M133 35a1 1 0 1 1 3 0l-2 2-1-2Zm7 12a1 1 0 0 1 2 0l-1 1-1-1Zm0-24a1 1 0 0 0 2 0l-1-1-1 1Zm-3 8 2 1 1-1-1-2-2 2Zm-2-4 1 1a1 1 0 1 0 0-2l-1 1Zm0 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm10-13 2 1 2-1-2-2-2 2Zm-3-4 2 1 1-1-1-1-2 1Zm-5 13 2-1 1 1-1 1-2-1Zm8 0 2-2 2 2-2 2-2-2Zm-3 4 2-1 1 1-1 1-2-1Zm-15-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm22 0c0-1 1-2 3-2l2 2c0 2-1 3-2 3-2 0-3-1-3-3Zm-9 0 2-1 2 1-2 2-2-2"
              style="stroke:none;fill-rule:evenodd;fill:#e3000f;fill-opacity:1"/>
            <path d="m171 45-2-2 7-8 2 2Zm-11-11 7-8 2 2-8 7-1-1"
                  style="stroke:none;fill-rule:evenodd;fill:#ad0b04;fill-opacity:1"/>
            <g clip-path="url(#b)">
              <path d="m169 43 7-8 22-19h-17l-12 12-8 7c-27 29-39 30-68 32L0 68v1h122c7 0 12-1 18-4 11-4 21-13 29-22"
                    style="stroke:none;fill-rule:evenodd;fill:#e3000f;fill-opacity:1"/>
            </g>
            <path
              d="M58 41c0 12 6 15 16 15h17c11 0 13-6 13-12v-4H93c0 5-1 6-6 6H75c-5 0-6-3-6-8v-5c0-5 1-8 7-8h12c3 0 5 1 5 4v1h11c0-11-2-15-18-15H74c-10 0-16 3-16 15Zm0 0"
              style="stroke:none;fill-rule:nonzero;fill:var(--text);fill-opacity:1"/>
            <path
              d="M7 55h34c6 0 11-2 11-10 0-6-2-9-6-10 3-1 5-2 5-9 0-8-4-10-13-10H7Zm10-30h20c2 0 3 1 3 3 0 3-1 3-3 3H17Zm0 15h20c2 0 4 0 4 3 0 2-2 3-4 3H17Zm0 0"
              style="stroke:none;fill-rule:nonzero;fill:#e3000f;fill-opacity:1"/>
            <path d="M111 55h11V16h-11Zm0 0" style="stroke:none;fill-rule:nonzero;fill:var(--text);fill-opacity:1"/>
          </svg>

          <img src="../assets/ibh.png">
          <img src="../assets/netd.png">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 74">
            <path fill="var(--tud-color)" fill-rule="evenodd"
                  d="M226 23v4h3v-4h-3zm9 0v4h4v-4h-4zm-53 24-4-9c2 0 3-2 3-5s-2-6-6-6h-8v20h4v-8h3l4 8h4zm-4-14c0 2-2 3-3 3h-4v-6h4l3 3zm63 14-7-20h-3l-8 20h5l1-4h7l1 4h4zm-6-7h-5l2-7 3 7zm-135 0V27h-4v13c0 2-1 4-3 4s-4-2-4-4V27h-4v13c0 4 3 7 8 7s7-3 7-7zm20 7V27h-4v12l-8-12h-3v20h4V35l7 12h4zm9 0V27h-4v20h4zm18-20h-4l-4 13-4-13h-4l7 20h3l6-20zm16 20v-3h-9v-5h8v-4h-8v-5h9v-3h-13v20h13zm36-6-2-4-4-2h-2l-2-1-1-1c0-2 1-3 4-3l4 2 2-3-6-2c-5 0-7 2-7 6l1 4 4 2h2l2 1 1 1c0 2-1 3-4 3l-5-2-2 3c2 2 4 2 7 2 4 0 8-2 8-6zm7 6V27h-4v20h4zm18-17v-3h-14v3h5v17h4V30h5zm31 0v-3h-14v3h5v17h4V30h5zM100 64c0-3 0-6-2-8s-3-2-5-2h-8v20h8l5-2c2-2 2-5 2-8zm-4 0-1 5-3 1h-3V57h3l3 1 1 6zm23 10-4-9c2-1 3-2 3-5s-2-6-6-6h-8v20h4v-8h3l4 8h4zm-5-14-2 2h-4v-5h4c1 0 2 1 2 3zm22 14v-4h-10v-5h8v-3h-8v-5h10v-3h-13v20h13zm17-6-2-4-4-2h-2l-2-1-1-2c0-1 1-2 4-2l4 1 2-2c-2-2-4-2-6-2-5 0-7 2-7 6l1 4 4 1 2 1h2l1 2c0 2-1 2-4 2l-5-1-2 2c2 2 4 3 7 3 4 0 8-2 8-6zm18-4c0-3 0-6-2-8-1-2-3-2-5-2h-7v20h7l5-2c2-2 2-5 2-8zm-4 0-1 5-3 1h-3V57h3l3 1 1 6zm21 10v-4h-9v-5h8v-3h-8v-5h9v-3h-13v20h13zm20 0V54h-4v12l-8-12h-4v20h4V61l8 13h4zM100 4V0H85v4h6v16h3V4h6zm16 16v-3h-9v-5h8V8h-8V4h9V0h-13v20h13zm19-6h-4c-1 2-2 3-4 3l-2-1-1-6 1-5 2-1 4 2h4c-1-4-4-6-8-6l-5 2c-2 2-2 5-2 8 0 4 0 6 2 8 1 2 3 2 5 2 4 0 7-2 8-6zm18 6V0h-4v8h-7V0h-4v20h4v-8h7v8h4zm20 0V0h-4v12l-8-12h-3v20h4V8l8 12h3zm9 0V0h-4v20h4zm18-6-1-4-4-1-2-1-2-1-1-1c0-1 1-3 3-3l4 2 3-3-7-2c-4 0-7 3-7 6l2 4 4 2h2l2 1v1c0 2-1 3-3 3l-5-2-2 3c1 2 4 2 7 2 4 0 7-2 7-6zm18 0h-4c0 2-1 3-3 3l-2-1-1-6 1-5 2-1c2 0 3 1 3 2h4c0-4-3-6-7-6l-5 2c-2 2-2 5-2 8 0 4 0 6 2 8 1 2 3 2 5 2 4 0 7-2 7-6zm19 6V0h-4v8h-7V0h-4v20h4v-8h7v8h4zm18 0v-3h-9v-5h8V8h-8V4h9V0h-13v20h13zM4 29h21v24h24V29h20v21L50 69H24L4 50V29zm63 2H51v24H22V31H7v18l18 18h24l18-18V31zm0-6L49 7H25L7 25h22v23h16V25h22zm2 2H47v23H27V27H4v-3L24 5h26l19 19v3zM0 23v28l22 23h29l23-23V23L51 0H22L0 23zm2 0v28l21 21h27l21-21V23L50 2H23L2 23z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
      </article>
      <div class="other">
        <span>&copy; {{ date }} <b>{{ $t('branding.name') }}</b> - <span>{{ $t('branding.slogan') }}</span></span>
        <nav>
          <NuxtLink :to="localePath('/imprint')">{{ $t('footer.imprint') }}</NuxtLink>
        </nav>
      </div>
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

  nav {
    svg {
      width: 2rem;
      height: 2rem;
    }

    .nav-container {
      z-index: 1000;
      top: 0;
      left: 0;
      bottom: 0;
      position: fixed;
      right: 0;
      display: flex;
      flex-direction: column;
      background-color: var(--card);
      padding: 1rem;
      gap: 0.2rem;
      justify-content: center;
      align-items: center;
    }
  }
}

header, footer {
  nav, nav div.nav-container {
    display: flex;
    gap: 0.5rem;
  }
}

footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .other {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .sponsors {
    display: flex;
    justify-content: space-between;

    img, svg {
      height: 4rem;
    }
  }
}

.button {
  outline: none;
  border: 0.1rem solid var(--text);
  border-radius: 0.4rem;
  color: var(--text);
  background-color: transparent;
  cursor: pointer;
}
</style>

<script lang="ts" setup>
import {useMediaQuery} from '@vueuse/core'
import LanguageSwitcher from "~/compoents/LanguageSwitcher.vue";

const date = new Date().getFullYear();
const localePath = useLocalePath()
const menuOpen = ref(false);
const isDark = useMediaQuery('(prefers-color-scheme: dark)')
const theme = ref(undefined);

function switchTheme() {
  if (document.body.classList.contains("light-theme") || !isDark.value) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    theme.value = true;
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");

    theme.value = false;
  }
}
</script>
