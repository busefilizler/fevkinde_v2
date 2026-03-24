<template>
  <div
    id="referans"
    class="referenceApp bg-white flex flex-col items-center gap-6 md:gap-12 justify-center pb-[2%] pt-[6%]"
  >
    <h2
      class="text-black text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl -rotate-3 font-black custom-font"
    >
      REFERANSLARIMIZ
    </h2>
    <div class="pb-[5%] px-[5%] w-full">
      <div class="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-2 sm:gap-3 md:gap-[3%] px-2 pb-5 items-center">
        <template v-for="(item, index) in paddedLogoItems" :key="`logo-${index}`">
          <div v-if="item === null" aria-hidden="true"></div>
          <img
            v-else
            :src="getLogoUrl(item)"
            loading="lazy"
            decoding="async"
            class="h-auto max-w-full p-1"
            :alt="'Fevkinde Ajans referans müşteri logosu ' + item"
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const logoList = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
  41,42,43,46,47,48,49,50
]
const logoNumbers = logoList
const columns = ref(5)

function updateColumns() {
  const width = window.innerWidth
  if (width >= 1280) columns.value = 9
  else if (width >= 1024) columns.value = 8
  else if (width >= 768) columns.value = 7
  else if (width >= 640) columns.value = 6
  else columns.value = 5
}

onMounted(() => {
  updateColumns()
  window.addEventListener('resize', updateColumns)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateColumns)
})

const paddedLogoItems = computed(() => {
  const remainder = logoNumbers.length % columns.value
  if (remainder === 0) return logoNumbers

  const fullRowItemCount = Math.floor(logoNumbers.length / columns.value) * columns.value
  const fullRows = logoNumbers.slice(0, fullRowItemCount)
  const lastRow = logoNumbers.slice(fullRowItemCount)

  const emptySlots = columns.value - remainder
  const emptyBefore = Math.floor(emptySlots / 2)
  const emptyAfter = emptySlots - emptyBefore

  return [
    ...fullRows,
    ...Array.from({ length: emptyBefore }, () => null),
    ...lastRow,
    ...Array.from({ length: emptyAfter }, () => null)
  ]
})

function getLogoUrl(n) {
  return new URL(`../../assets/logolar/${n}.webp`, import.meta.url).href
}
</script>
