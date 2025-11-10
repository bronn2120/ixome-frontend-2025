<template>
  <div>
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
    <NuxtSeo :title="post.title" :description="post.description" :og-image="post.ogImage" />
  </div>
</template>

<script setup>
const { params } = useRoute();
const { data: post } = await useAsyncData('post', () => queryContent('/blog').where({ _path: `/blog/${params.slug}` }).findOne());
if (!post.value) throw createError({ statusCode: 404 });
</script>
