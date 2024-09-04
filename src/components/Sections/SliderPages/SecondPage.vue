<template lang="">
  <div class="bg-[#D5DAE5] flex w-full swipperSliderHeight items-center justify-center pt-10">
    <img
      src="@/assets/kare.webp"
      alt="fevkinde_ajans"
      class="absolute top-32 right-0 !h-[10%] sm:!h-[20%] md:!h-[20%] lg:!h-[30%] xl:!h-[30%] 2xl:!h-[30%] w-auto mask2 opacity-30"
    />
    <img
      src="@/assets/kare.webp"
      alt="fevkinde_ajans"
      class="absolute top-96 left-0 !h-[10%] sm:!h-[20%] md:!h-[20%] lg:!h-[30%] xl:!h-[30%] 2xl:!h-[30%] w-auto mask2 opacity-30"
    />
    <img
      src="@/assets/kare.webp"
      alt="fevkinde_ajans"
      class="absolute top-96 left-54 !h-[10%] sm:!h-[20%] md:!h-[20%] lg:!h-[20%] xl:!h-[20%] 2xl:!h-[20%] w-auto mask2 opacity-20"
    />
    <div
      class="custom-font italic text-text-siyah text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-black h-full w-2/6 flex justify-center flex-col z-20"
    >
      <div class="pl-[6%]">ZOR YOKTUR</div>
      <div>İMKANSIZ</div>
      <div class="pl-[6%]">ZAMAN ALIR</div>
      <div
        class="light-font italic text-siyah text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light pt-3 !text-end w-full"
      >
        Olmazlar itina ile oldurulur !
      </div>
    </div>
    <img src="@/assets/slider2.webp" alt="fevkinde_ajans_logo" class="dynamic-size w-auto z-30" />
  </div>
</template>
<script setup></script>
<style scoped>
.dynamic-size {
  width: 20%;
  height: auto;
}
@media (max-height: 900px) and (min-width: 300px) {
  .dynamic-size {
    width: auto;
    height: 60% !important;
  }
}
</style>
