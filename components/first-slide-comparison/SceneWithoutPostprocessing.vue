<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'

import { Color } from 'three'
</script>

<template>
  <TresCanvas clear-color="#2b2b2b">
    <TresPerspectiveCamera :position="[10, 10, 10]" :look-at="[0, 0, 0]" />
    <TresMesh :position="[0, 3, 0]">
      <TresSphereGeometry :args="[2, 32, 32]" />
      <TresMeshStandardMaterial
        color="hotpink"
        :emissive="new Color('hotpink')"
        :emissive-intensity="2"
      />
    </TresMesh>
    <TresGridHelper :size="10" />
  </TresCanvas>
</template>
