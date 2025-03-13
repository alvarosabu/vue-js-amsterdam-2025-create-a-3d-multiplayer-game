<script setup lang="ts">
</script>

<template>
  <div class="w-full shadow-lg  rounded-md overflow-hidden">
    <div class="flex-col">
      <Suspense>
        <slot></slot>
      </Suspense>
    </div>
  </div>
</template>
