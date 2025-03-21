<script setup lang="ts">
import { ContactShadows, Environment, OrbitControls, useGLTF } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { TresLeches, useControls } from '@tresjs/leches'
import { EffectComposer, Pixelation } from '@tresjs/post-processing'
import { BlendFunction } from 'postprocessing'
import { NoToneMapping } from 'three'
import { reactive, watch } from 'vue'

import '@tresjs/leches/styles'

const gl = {
  clearColor: 'hotpink',
  multisampling: 8,
}

const { scene: scenePlantJar } = await useGLTF('https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/kuwahara-effect/plant-jar/plant-jar.glb', { draco: true })
const { scene: sceneWatermelon } = await useGLTF('https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/kuwahara-effect/watermelon/watermelon_fruit.glb', { draco: true })

const effectProps = reactive({
  blendFunction: BlendFunction.NORMAL,
})

const { enabled, pixelSize } = useControls({
  enabled: false,
  pixelSize: { value: 10, min: 1, max: 15, step: 1 },
}, {
  uuid: 'pixelation-demo',
})

watch(enabled.value, () => {
  effectProps.blendFunction = enabled.value ? BlendFunction.NORMAL : BlendFunction.SKIP
})
</script>

<template>
  <div class="aspect-16/9">
    <TresCanvas
      v-bind="gl"
    >
      <TresPerspectiveCamera
        :position="[0, 6.5, 15]"
      />

      <OrbitControls />

      <TresAmbientLight :intensity="1" />

      <TresDirectionalLight />

      <primitive :position-x="-3" :position-y="-3.5" :scale="5" :object="scenePlantJar" />
      <primitive :position-x="4" :scale="20" :object="sceneWatermelon" />

      <ContactShadows
        :opacity=".25"
        :position-y="-3.85"
        :scale="20"
        :blur=".65"
      />

      <ContactShadows
        :opacity=".5"
        :position-y="-3.85"
        :scale="20"
        :blur=".65"
      />

      <Suspense>
        <Environment :blur="0.2" preset="snow" />
      </Suspense>

      <Suspense>
        <EffectComposer>
          <Pixelation v-if="enabled" :pixel-size="pixelSize" />
        </EffectComposer>
      </Suspense>
    </TresCanvas>
  </div>
  <TresLeches uuid="pixelation-demo" :float="false" />
</template>
