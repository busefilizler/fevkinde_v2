<template>
  <div id="digital" class="bg-[#2DA4A4] marketingApp h-full w-full overflow-hidden pt-10">
    <div
      class="text-black text-base tel:text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black custom-font -rotate-6 relative top-0 pl-[1%]"
    >
      <div
        class="absolute flex flex-col items-center justify-center pt-[4%] pl-[4%] -rotate-6 uppercase italic"
      >
        <img src="@/assets/icon1.webp" class="absolute left-[70%] w-[50%] -z-10" />
        <div>Digital</div>
        <div>Marketing</div>
      </div>
    </div>

    <div class="w-full">
      <div class="w-full relative">
        <img src="@/assets/icon2.webp" class="top-0 right-[2%] w-[10%] absolute" />
      </div>
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :modules="modules"
        class="mySwiper"
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false
        }"
      >
        <swiper-slide v-for="(img, index) in imgSource" :key="index">
          <img :src="img" class="h-[99%] z-50 w-full" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="relative w-full flex justify-start pt-[5%] px-[5%]">
      <div
        class="flex flex-col font-thin items-center text-xxs tel:text-xxs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl w-1/2 -mt-12"
      >
        <div>Sosyal Medya Yönetimi</div>
        <div>Kriz Yönetimi</div>
        <div>İtibar Yönetimi</div>
        <div>SEO Çalışmaları</div>
        <div>Dijital PR Yönetimi</div>
        <div>Masabaşı Video Üretimi</div>
        <div>Youtube Program Çekimleri</div>
      </div>
      <div class="w-1/2">
        <div class="flex flex-col pl-[25%]">
          <div
            class="w-[50%] rounded-2xl bg-[#00FC00] text-center py-[2%] text-xxxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl ml-[20%]"
          >
            Ne Zaman?
          </div>
          <div
            class="w-[50%] rounded-2xl bg-[#fff] text-center py-[2%] text-xxxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl mt-[5%]"
          >
            Şimdi!
          </div>
        </div>
      </div>

      <img
        src="@/assets/kare.webp"
        class="absolute top-[10%] left-[5%] w-auto mask2 opacity-40 !h-[60%]"
      />
      <img
        src="@/assets/kare.webp"
        class="absolute top-[10%] right-[5%] w-auto mask1 opacity-40 !h-[80%]"
      />
    </div>
    <div
      class="text-xxs tel:text-xxs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-thin w-full text-center pt-[5%] justPc"
    >
      Digitaj Dünya ile entegre iletişim ve tasarım stratejilerimizle markanızı "marka" yapıyoruz
    </div>
    <img src="@/assets/bantt.webp" class="w-full bottom-0 z-20" />
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectFade } from 'swiper/modules'

const modules = [Navigation, EffectFade, Pagination, Mousewheel, Keyboard, Autoplay]
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
<style>
:root {
  --main-light-color: #ffff;
  --main-dark-color: #00fc00;
  --main-background-color: black;
}

.box {
  width: 50vh;
  height: 25vh;
  margin: auto;
  position: relative;
  display: block;
}

.dialog-1 {
  height: 20%;
  width: 40%;
  background-color: var(--main-dark-color);
  position: absolute;
  border-radius: 200px;
}

.left-point {
  width: 0;
  height: 0;
  border-left: 1vh solid transparent;
  border-right: 1vh solid transparent;
  border-top: 5vh solid var(--main-dark-color);
  position: absolute;
  top: 45%;
  left: -10%;
  transform: rotate(60deg);
}

.dialog-2 {
  height: 20%;
  width: 40%;
  background-color: var(--main-light-color);
  position: absolute;
  border-radius: 200px;
  right: 0;
}

.right-point {
  width: 0;
  height: 0;
  border-left: 1vh solid transparent;
  border-right: 1vh solid transparent;
  border-top: 5vh solid var(--main-light-color);
  position: absolute;
  top: 45%;
  right: -10%;
  transform: rotate(-60deg);
}
</style>
