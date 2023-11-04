<script setup>
import { computed, ref, onMounted } from "vue";
import { useData } from "vitepress";

const { isDark, lang } = useData();
const loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});

const preview = computed(() => {
  // do not display preview image if not finish loading
  if (!loaded.value) {
    return "";
  }
  return `/screenshots/${!!isDark.value ? "dark" : "light"}_${lang.value}.png`;
});
</script>

<template>
  <div class="preview-wrapper">
    <div class="preview-inner">
      <img :src="preview" alt="preview" />
    </div>
  </div>
</template>

<style scoped>
.preview-wrapper {
  margin-top: -30px;
  padding: 0 24px 24px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.preview-inner {
  object-fit: cover;
  max-width: 100%;
}

@media (min-width: 640px) {
  .preview-wrapper {
    padding: 0 48px 24px;
  }
}

@media (min-width: 960px) {
  .preview-wrapper {
    padding: 0 64px 24px;
  }

  .preview-inner {
    max-width: 1080px;
  }
}
</style>
