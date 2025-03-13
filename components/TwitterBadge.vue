<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /**
   * Twitter handle without the @ symbol
   */
  handle: string
  /**
   * Size of the badge in pixels
   * @default 32
   */
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 32,
})

/**
 * Get the Twitter avatar URL for a given handle
 */
const avatarUrl = computed(() => `https://unavatar.io/twitter/${props.handle}`)
</script>

<template>
  <a
    :href="`https://twitter.com/${handle}`"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-primary-500 !outline-none items-center gap-2 px-3 py-1 rounded-full transition-colors hover:bg-primary-600"
  >
    <img
      :src="avatarUrl"
      :alt="`${handle}'s Twitter avatar`"
      :width="size"
      :height="size"
      class="!rounded-full object-cover"
      loading="lazy"
    />
    <span class="text-sm text-gray-700 dark:text-gray-300">@{{ handle }}</span>
  </a>
</template>
