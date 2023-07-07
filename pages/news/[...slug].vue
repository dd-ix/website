<template>
    <article>
        <Head>
            <Title>{{data.title}}</Title>
            <Meta name="og:title" :content="data.title"/>
            <Meta name="description" :content="data.description"/>
            <Meta name="og:description" :content="data.description"/>
            <Meta name="keywords" :content="data.keywords?.join(', ')"/>
        </Head>

        <h1>{{ data.title }}</h1>
        <img :src="data.image">

        <p v-if="data.date || data.description" class="subtitle">
            <b v-if="data.date">{{ data.date ? formatRelativeTime(data.date) : null }}</b>
            <template v-if="data.date && data.description"> -</template>
            <template v-if="data.description">{{ data.description }}</template>
        </p>

        <ContentDoc class="content"></ContentDoc>
    </article>
</template>

<style lang="scss" scoped>
img {
  border-radius: 0.4rem;
}

.content {
  text-align: justify;
  hyphens: auto;
}
</style>

<script setup lang="ts">
import {queryContent, useRoute} from "#imports";
import {formatRelativeTime} from "assets/date-format";
import {useAsyncData} from "#app";

const {params, path} = useRoute()

const {data} = await useAsyncData(`content-${path}`,
    () => queryContent()
        .where({_path: path})
        // .only(['_slug', '_path', 'date', 'title', 'description', 'body', 'keywords'])
        .findOne()
);
</script>
