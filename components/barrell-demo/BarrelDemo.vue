<script setup lang="ts">
import { Environment, OrbitControls, RoundedBox } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { TresLeches, useControls } from '@tresjs/leches'
import { BarrelBlurPmndrs, EffectComposerPmndrs } from '@tresjs/post-processing'
import { BlendFunction } from 'postprocessing'
import { NoToneMapping } from 'three'

import '@tresjs/leches/styles'

const gl = {
  clearColor: '#4f4f4f',
  toneMapping: NoToneMapping,
  multisampling: 8,
}

const { amount, offsetX, offsetY, blendFunction } = useControls({
  amount: { value: 0.25, step: 0.001, max: 1 },
  offsetX: { value: 0.5, step: 0.01, min: 0, max: 1 },
  offsetY: { value: 0.5, step: 0.01, min: 0, max: 1 },
  blendFunction: {
    options: Object.keys(BlendFunction).map(key => ({
      text: key,
      value: BlendFunction[key],
    })),
    value: BlendFunction.OVERLAY,
  },
}, {
  uuid: 'barrel-demo',
})
</script>

<template>
  <div class="aspect-16/9">
    <TresCanvas
      v-bind="gl"
    >
      <TresPerspectiveCamera
        :position="[5, 5, 5]"
        :look-at="[0, 0, 0]"
      />
      <OrbitControls auto-rotate />

      <Suspense>
        <Environment preset="shangai" />
      </Suspense>

      <RoundedBox :args="[2, 2, 2, 2, 0.25]">
        <TresMeshPhysicalMaterial
          color="white"
          :metalness=".9"
          :roughness=".5"
          :clearcoat="1.0"
          :clearcoat-roughness="0.1"
        />
      </RoundedBox>

      <Suspense>
        <EffectComposerPmndrs>
          <BarrelBlurPmndrs :amount="amount" :offset="[offsetX, offsetY]" :blend-function="Number(blendFunction)" />
        </EffectComposerPmndrs>
      </Suspense>
    </TresCanvas>
  </div>
  <TresLeches uuid="barrel-demo" :float="false" />
</template>
