<script setup lang="ts">
</script>

<template>
  <div class="w-full aspect-16/9 rounded-md overflow-hidden">
    <Suspense>
      <slot></slot>
    </Suspense>
  </div>
</template>
