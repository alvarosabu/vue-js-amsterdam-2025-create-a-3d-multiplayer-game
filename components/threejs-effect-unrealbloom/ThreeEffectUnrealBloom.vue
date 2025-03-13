<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { EffectComposer, UnrealBloom } from '@tresjs/post-processing'

import { Color } from 'three'
</script>

<template>
  <TresCanvas clear-color="#121212">
    <Suspense>
      <EffectComposer>
        <UnrealBloom :radius="0.5" :strength="3" :threshold="0.1" />
      </EffectComposer>
    </Suspense>
    <TresPerspectiveCamera :position="[5, 5, 5]" :look-at="[0, 0, 0]" />
    <TresMesh>
      <TresSphereGeometry :args="[2, 32, 32]" />
      <TresMeshStandardMaterial
        color="hotpink"
        :emissive="new Color('hotpink')"
        :emissive-intensity="0.5"
      />
    </TresMesh>
  </TresCanvas>
</template>
