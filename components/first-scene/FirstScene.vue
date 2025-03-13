<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'

import { Color } from 'three'
</script>

<template>
  <TresCanvas clear-color="#2b2b2b">
    <TresPerspectiveCamera :position="[5, 5, 5]" :look-at="[0, 0, 0]" />
    <TresMesh>
      <TresSphereGeometry :args="[2, 32, 32]" />
      <TresMeshStandardMaterial
        color="hotpink"
        :emissive="new Color('hotpink')"
        :emissive-intensity="2"
      />
    </TresMesh>
  </TresCanvas>
</template>
