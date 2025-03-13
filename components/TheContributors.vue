<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Contributor {
  login: string
  contributions: number
}

const repos = [
  'https://api.github.com/repos/tresjs/tres/contributors',
  'https://api.github.com/repos/tresjs/cientos/contributors',
  'https://api.github.com/repos/tresjs/post-processing/contributors',
  'https://api.github.com/repos/tresjs/nuxt/contributors',
  'https://api.github.com/repos/tresjs/rapier/contributors',
  'https://api.github.com/repos/tresjs/leches/contributors',
  // Add more repository URLs here
]

const contributors = ref<string[]>([])

// Cache key for localStorage
const CACHE_KEY = 'tresjs-contributors'
const CACHE_DURATION = 1000 * 60 * 60 * 24 // 24 hours

onMounted(async () => {
  // Try to get cached data first
  const cached = localStorage.getItem(CACHE_KEY)
  if (cached) {
    const { data, timestamp } = JSON.parse(cached)
    const isExpired = Date.now() - timestamp > CACHE_DURATION

    if (!isExpired) {
      contributors.value = data
      return
    }
  }

  // Fetch fresh data if no cache or expired
  const data = await Promise.all(repos.map(url => fetch(url)))
  const json = await Promise.all(data.map(res => res.json()))
  const flattened = json.flat() as Contributor[]
  const sorted = flattened.sort((a, b) => b.contributions - a.contributions)
  const usernames = sorted.map(contributor => contributor.login)
  contributors.value = [...new Set(usernames)]

  // Cache the results
  localStorage.setItem(CACHE_KEY, JSON.stringify({
    data: contributors.value,
    timestamp: Date.now(),
  }))
})
</script>

<template>
  <div class="pt-8 flex gap-8 flex-wrap">
    <div
      v-for="username of contributors"
      :key="username"
      class="flex flex-col items-center  overflow-hidden"
    >
      <img
        :title="username"
        :src="`https://avatars.githubusercontent.com/${username}?v=4`"
        class="important-rounded-full w-10 h-10 mb-2 object-cover shadow-xl"
      />
    </div>
  </div>
</template>
