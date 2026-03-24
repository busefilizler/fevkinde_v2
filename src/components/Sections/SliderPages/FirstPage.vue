<template>
  <div class="bg-[#E4DCD4] w-full swipperSliderHeight gap flex items-center justify-center pt-[2%]">
    <img
      src="@/assets/kare.webp"
      alt=""
      role="presentation"
      class="absolute top-[10%] right-0 !h-[10%] sm:!h-[20%] md:!h-[20%] lg:!h-[30%] xl:!h-[40%] 2xl:!h-[30%] w-auto mask2 opacity-30"
    />
    <img
      src="@/assets/kare.webp"
      alt=""
      role="presentation"
      class="absolute bottom-[10%] left-0 !h-[10%] sm:!h-[20%] md:!h-[20%] lg:!h-[30%] xl:!h-[40%] 2xl:!h-[30%] w-auto mask2 opacity-30"
    />
    <h1
      class="custom-font italic text-siyah text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black h-full flex justify-center flex-col z-20 w-[40%]"
    >
      <span>CREATIVE</span>
      <span class="pl-[6%]">ADVERTISING</span>
      <span>AGENCY</span>
    </h1>
    <img src="@/assets/slider1.webp" alt="Fevkinde Ajans - İstanbul yaratıcı reklam ajansı" class="dynamic-size h-auto z-30" />
  </div>
</template>
<style scoped>
.dynamic-size {
  width: 40%;
  height: auto;
}
@media (max-height: 950px) and (min-width: 300px) {
  .dynamic-size {
    width: auto;
    height: 50% !important;
  }
}
</style>
