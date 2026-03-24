<template>
  <div id="digital" class="bg-[#2DA4A4] marketingApp h-full w-full overflow-hidden pt-10">
    <div
      class="text-black text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black custom-font -rotate-6 relative top-0 pl-[1%]"
    >
      <div
        class="absolute flex flex-col items-center justify-center pt-[4%] pl-[4%] -rotate-6 uppercase italic"
      >
        <img src="@/assets/icon1.webp" class="absolute left-[70%] w-[50%] -z-10" loading="lazy" decoding="async" />
        <div>Digital</div>
        <div>Marketing</div>
      </div>
    </div>

    <div class="w-full">
      <div class="w-full relative">
        <img src="@/assets/icon2.webp" class="top-0 right-[2%] w-[10%] absolute" loading="lazy" decoding="async" />
      </div>
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :modules="modules"
        class="mySwiper"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false
        }"
      >
        <swiper-slide v-for="(img, index) in imgSource" :key="index">
          <img :src="img" class="h-[99%] z-50 w-full" loading="lazy" decoding="async" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="relative w-full flex flex-col sm:flex-row justify-start pt-[5%] px-[5%]">
      <div
        class="flex flex-col font-thin items-center text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl w-full sm:w-1/2 sm:-mt-12"
      >
        <div>Sosyal Medya Yönetimi</div>
        <div>Kriz Yönetimi</div>
        <div>İtibar Yönetimi</div>
        <div>SEO Çalışmaları</div>
        <div>Dijital PR Yönetimi</div>
        <div>Masabaşı Video Üretimi</div>
        <div>Youtube Program Çekimleri</div>
      </div>
      <div class="w-full sm:w-1/2 mt-4 sm:mt-0">
        <div class="flex flex-col items-center sm:pl-[25%]">
          <div
            class="w-[60%] sm:w-[50%] rounded-2xl bg-[#00FC00] text-center py-[2%] text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl sm:ml-[20%]"
          >
            Ne Zaman?
          </div>
          <div
            class="w-[60%] sm:w-[50%] rounded-2xl bg-[#fff] text-center py-[2%] text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl mt-[5%]"
          >
            Şimdi!
          </div>
        </div>
      </div>

      <img
        src="@/assets/kare.webp"
        class="absolute top-[10%] left-[5%] w-auto mask2 opacity-40 !h-[60%] hidden sm:block"
        loading="lazy"
        decoding="async"
      />
      <img
        src="@/assets/kare.webp"
        class="absolute top-[10%] right-[5%] w-auto mask1 opacity-40 !h-[80%] hidden sm:block"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div
      class="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-thin w-full text-center pt-[5%] hidden md:block"
    >
      Digital Dünya ile entegre iletişim ve tasarım stratejilerimizle markanızı "marka" yapıyoruz
    </div>
    <img src="@/assets/bantt.webp" class="w-full bottom-0 z-20" loading="lazy" decoding="async" />
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'

const modules = [EffectFade, Autoplay]
const imgSource = [
  new URL('@/assets/telefon/1.webp', import.meta.url).href,
  new URL('@/assets/telefon/2.webp', import.meta.url).href,
  new URL('@/assets/telefon/3.webp', import.meta.url).href,
  new URL('@/assets/telefon/4.webp', import.meta.url).href,
  new URL('@/assets/telefon/5.webp', import.meta.url).href,
  new URL('@/assets/telefon/6.webp', import.meta.url).href,
  new URL('@/assets/telefon/7.webp', import.meta.url).href,
  new URL('@/assets/telefon/8.webp', import.meta.url).href,
  new URL('@/assets/telefon/9.webp', import.meta.url).href
]
</script>
