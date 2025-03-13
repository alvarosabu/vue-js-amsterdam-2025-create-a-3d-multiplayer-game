<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { BloomPmndrs, EffectComposerPmndrs } from '@tresjs/post-processing'

import { Color } from 'three'
</script>

<template>
  <TresCanvas clear-color="#121212">
    <Suspense>
      <EffectComposerPmndrs>
        <BloomPmndrs
          mipmap-blur
          :intensity="12"
          :luminance-threshold="0.1"
          :luminance-smoothing="0.3"
          :radius="0.5"
        />
      </EffectComposerPmndrs>
    </Suspense>
    <TresPerspectiveCamera :position="[5, 5, 5]" :look-at="[0, 0, 0]" />
    <TresMesh>
      <TresSphereGeometry :args="[2, 32, 32]" />
      <TresMeshStandardMaterial
        color="hotpink"
        :emissive="new Color('hotpink')"
        :emissive-intensity="1"
      />
    </TresMesh>
  </TresCanvas>
</template>
