<template>
  <div
    id="referans"
    class="referenceApp bg-white flex flex-col items-center gap-6 md:gap-12 justify-center pb-[2%] pt-[6%]"
  >
    <h2
      class="text-black text-lg sm:text-lg md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-custom-font -rotate-3 font-black custom-font"
    >
      REFERANSLARIMIZ
    </h2>
    <div class="pb-[5%] px-[5%] w-full">
      <div class="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-2 sm:gap-3 md:gap-[3%] px-2 pb-5 items-center justify-center">
        <img v-for="n in logoNumbers" :key="n" :src="getLogoUrl(n)" loading="lazy" decoding="async" class="h-auto max-w-full p-1" :alt="'Fevkinde Ajans referans müşteri logosu ' + n" />
      </div>
    </div>
  </div>
</template>
<script setup>
const logoList = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
  41,42,43,46
]
const logoNumbers = logoList

function getLogoUrl(n) {
  return new URL(`../../assets/logolar/${n}.webp`, import.meta.url).href
}
</script>
