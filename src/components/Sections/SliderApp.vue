<template>
  <SliderAppLayout>
    <template #swipperApp>
      <swiper
        :cssMode="true"
        :navigation="true"
        :mousewheel="true"
        :keyboard="true"
        :modules="modules"
        class="siderHeaderGap w-full flex flex-col"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false
        }"
      >
        <div class="absolute bg-transparent top-0 headerMarginGap z-50">
          <HeaderApp />
        </div>
        <swiper-slide v-for="(component, index) in sliderComponents" :key="index">
          <component :is="component" />
        </swiper-slide>
        <img src="@/assets/bantt.webp" class="absolute w-full bottom-0 z-20" />
      </swiper>
    </template>
  </SliderAppLayout>
</template>
<script setup>
import SliderAppLayout from '../../layout/SliderAppLayout.vue'
import HeaderApp from '../Header/HeaderApp.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
import FirstPage from '@/components/Sections/SliderPages/FirstPage.vue'
import SecondPage from '@/components/Sections/SliderPages/SecondPage.vue'
import ThirdPage from '@/components/Sections/SliderPages/ThirdPage.vue'
import FourthPage from '@/components/Sections/SliderPages/FourthPage.vue'
import FifthPage from '@/components/Sections/SliderPages/FifthPage.vue'
import { markRaw } from 'vue'
const modules = [Navigation, Pagination, Mousewheel, Keyboard, Autoplay]
const sliderComponents = [
  markRaw(FirstPage),
  markRaw(SecondPage),
  markRaw(ThirdPage),
  markRaw(FourthPage),
  markRaw(FifthPage)
]
</script>
<style>
.gap {
  gap: 4rem;
}
:root {
  --swiper-navigation-size: 30px !important;
}

.swiper-button-prev::before,
.swiper-button-next::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 50;
  left: 25;
  width: 80px;
  height: 100px;
  background-color: #3d3c3c;
  border-radius: 100% 0% 0% 100%; /* Yarı daire şeklini elde etmek için */
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff !important;
  position: relative; /* Ana öğe için pozisyonu belirtin */
}

.swiper-button-prev::before {
  transform: rotate(180deg); /* Yarı dairenin ters yönde olmasını sağlar */
}
/* Small Screen tel */
@media (min-width: 320px) and (max-width: 414px) {
  .gap {
    gap: 2rem;
  }
  :root {
    --swiper-navigation-size: 6px !important;
  }
  .swiper-button-prev::before,
  .swiper-button-next::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50;
    left: 25;
    width: 20px;
    height: 25px;
    background-color: #3d3c3c;
    border-radius: 100% 0% 0% 100%; /* Yarı daire şeklini elde etmek için */
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff !important;
    position: relative; /* Ana öğe için pozisyonu belirtin */
  }
}

@media (min-width: 415px) and (max-width: 639px) {
  .gap {
    gap: 2rem;
  }
  :root {
    --swiper-navigation-size: 6px !important;
  }
  .swiper-button-prev::before,
  .swiper-button-next::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50;
    left: 25;
    width: 20px;
    height: 25px;
    background-color: #3d3c3c;
    border-radius: 100% 0% 0% 100%; /* Yarı daire şeklini elde etmek için */
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff !important;
    position: relative; /* Ana öğe için pozisyonu belirtin */
  }
}

/* Medium Screen */
@media (min-width: 640px) and (max-width: 767px) {
  .gap {
    gap: 3rem;
  }
}
/* Large Screen */
@media (min-width: 768px) and (max-width: 1023px) {
  .gap {
    gap: 2rem;
  }
}

/* Extra Large Screen */
@media (min-width: 1024px) and (max-width: 1279px) {
  .gap {
    gap: 3rem;
  }
}

/* 2XL Screen */
@media (min-width: 1280px) and (max-width: 1680px) {
  .gap {
    gap: 4rem;
  }
}
@media (min-width: 1681px) and (max-width: 2808px) {
  .gap {
    gap: 1rem;
  }
}

.swipperSliderHeight {
  height: 30vh;
}

@media (min-width: 480px) {
  .swipperSliderHeight {
    height: 30vh;
  }
}
@media (min-width: 640px) {
  .swipperSliderHeight {
    height: 30vh;
  }
}
@media (min-width: 768px) {
  .swipperSliderHeight {
    height: 50vh;
  }
}
@media (min-width: 1024px) {
  .swipperSliderHeight {
    height: 50vh;
  }
}
@media (min-width: 1280px) {
  .swipperSliderHeight {
    height: 100vh;
  }
}
@media (min-width: 1536px) {
  .swipperSliderHeight {
    height: 100vh;
  }
}
</style>
