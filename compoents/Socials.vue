<template>
    <div class="container">
        <a target="_blank" class="not">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                <path fill-rule="evenodd"
                      d="M49 0a49 49 0 0 0-15 96c2 0 3-1 3-2V84c-14 3-17-5-17-5-2-6-5-8-5-8-5-3 0-3 0-3 5 1 8 5 8 5 4 8 11 6 14 4 0-3 2-5 3-6-11-1-22-5-22-24 0-6 2-10 5-14-1-1-2-6 0-13 0 0 4-1 14 5a47 47 0 0 1 12-1l12 1c9-6 13-5 13-5 3 7 1 12 1 13 3 4 5 8 5 14 0 19-11 23-22 24 1 1 3 4 3 9v14c0 1 1 2 3 2A49 49 0 0 0 49 0Z"
                      clip-rule="evenodd"/>
            </svg>
        </a>
        <a target="_blank" class="not">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0H5C2 0 0 2 0 5v14c0 3 2 5 5 5h14c3 0 5-2 5-5V5c0-3-2-5-5-5zM8 19H5V8h3v11zM7 7 5 5l2-2 1 2-1 2zm13 12h-3v-6c0-3-4-3-4 0v6h-3V8h3v2c1-3 7-3 7 2v7z"/>
            </svg>
        </a>
        <a target="_blank" class="not">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 74 79">
                <path fill="inherit"
                      d="M74 18c-1-8-9-15-18-16L36 1 19 2C11 3 3 9 1 17L0 30l1 18 2 12c2 8 9 14 16 16a44 44 0 0 0 26 1l6-3v-6l-15 2c-9 0-12-4-12-6a18 18 0 0 1-1-5l15 2h4l15-2c8-1 16-6 17-18V18ZM61 48h-8V28c0-5-2-7-5-7-4 0-6 3-6 8v11h-9V29c0-5-2-8-6-8-3 0-5 2-5 7v20h-8V27c0-4 1-8 3-10 2-3 5-4 9-4s7 2 9 5l3 3 2-3c2-3 5-5 9-5s7 1 9 4c2 2 3 6 3 10v21Z"/>
            </svg>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;

  a {
    display: block;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1;
      fill: var(--text);
      transition: fill ease-in-out 150ms;
    }

    &:hover svg {
      fill: var(--primary);
    }
  }
}
</style>
<script setup lang="ts">
</script>
