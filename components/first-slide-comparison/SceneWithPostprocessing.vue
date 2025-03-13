<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { BloomPmndrs, EffectComposerPmndrs, GlitchPmndrs, VignettePmndrs } from '@tresjs/post-processing'

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
    <Suspense>
      <EffectComposerPmndrs :depth-buffer="true">
        <BloomPmndrs
          :luminance-threshold="0.2"
          :intensity="2"
          :mipmap-blur
        />
        <VignettePmndrs :intensity="0.2" />
        <GlitchPmndrs :active="true" :mode="1" />
      </EffectComposerPmndrs>
    </Suspense>
  </TresCanvas>
</template>
