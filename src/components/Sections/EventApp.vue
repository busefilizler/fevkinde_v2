<template>
  <div id="event" class="justPc bg-white w-full eventApp pb-12">
    <div class=""></div>
    <div class="pt-[4%] px-[5%] flex flex-row gap-[5%]">
      <div class="w-1/3 flex flex-col gap-12">
        <div
          class="flex flex-col items-center justify-center -rotate-6 uppercase italic pl-[4%] mt-[3%] w-full"
        >
          <div
            class="text-black text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black custom-font z-50 -rotate-3"
          >
            Event
          </div>
          <div
            class="text-black text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black custom-font z-50 -rotate-3"
          >
            Management
          </div>
        </div>
        <div
          class="flex flex-col items-center light-font font-thin text-xxs tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-3xl w-full"
        >
          <div>Proje Kurgu ve Yönetimi</div>
          <div>Stratejik Planlama</div>
          <div>Lansman</div>
          <div>POSM Planlama</div>
          <div>Stand, Fuar Ekipmanları Tasarımı</div>
          <div>Marka Elçiliği Projeleri (BA)</div>
          <div>Üretim ve Tedarik</div>
          <div>Etkinlik Kurgu ve Yönetimi</div>
          <div>Roadshow</div>
          <div>Gerilla Aktivite</div>
          <div>Bayi Toplantısı</div>
          <div>FUAR Organizasyonu</div>
        </div>
      </div>
      <div class="w-2/3 pl-24 flex items-center gap-2">
        <i
          @click="prevVideo"
          class="fa-solid fa-chevron-left cursor-pointer fa-2xl text-gray-500"
        ></i>
        <iframe
          ref="videoIframe"
          class="responsive-iframe"
          width="80%"
          height="100%"
          :src="videoSrc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <i
          @click="nextVideo"
          class="fa-solid fa-chevron-right cursor-pointer fa-2xl text-gray-500"
        ></i>
      </div>
    </div>
  </div>
  <div
    id="event"
    class="justTel bg-white w-full eventApp h-full flex flex-row justify-center py-[5%]"
  >
    <div class="w-1/2 flex flex-col items-center justify-center -rotate-6 pr-10">
      <img src="@/assets/icon1.webp" class="absolute left-[55%] w-[30%]" />
      <div
        class="text-black text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black custom-font z-50 -rotate-3"
      >
        Event
      </div>
      <div
        class="text-black text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black custom-font z-50 -rotate-3 -mt-3"
      >
        Management
      </div>
    </div>
    <div class="w-1/2">
      <div
        class="flex flex-col custom-font font-thin text-xxs tel:text-xxs sm:text-xs md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl"
      >
        <div>Proje Kurgu ve Yönetimi</div>
        <div>Stratejik Planlama</div>
        <div>Lansman</div>
        <div>POSM Planlama</div>
        <div>Stand, Fuar Ekipmanları Tasarımı</div>
        <div>Marka Elçiliği Projeleri (BA)</div>
        <div>Üretim ve Tedarik</div>
        <div>Etkinlik Kurgu ve Yönetimi</div>
        <div>Roadshow</div>
        <div>Gerilla Aktivite</div>
        <div>Bayi Toplantısı</div>
        <div>FUAR Organizasyonu</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const videoUrls = [
  'https://www.youtube.com/embed/3c-Sevziqcs?si=H-1O9d0JloHiZ0HC&amp;controls=0?modestbranding=1',
  'https://www.youtube.com/embed/_oOWfbkSJfU?si=UPbd3ZmRbU48Z8NQ&amp;controls=0?modestbranding=1',
  'https://www.youtube.com/embed/opUc-Rn3HB4?si=IXk6W55QJ5kcK-uK&amp;controls=0?modestbranding=1',
  'https://www.youtube.com/embed/6jO1vl55BDA?si=jJYxm-IM5EyHni8A&amp;controls=0?modestbranding=1',
  'https://www.youtube.com/embed/gxfRibFboE4?si=PUp7ZMd39Nvs254n&amp;controls=0?modestbranding=1',
  'https://www.youtube.com/embed/ByPkLYqnI1o?si=2DdLwCEr9nv4pQ8K&amp;controls=0?modestbranding=1',
  'https://www.youtube.com/embed/DePPCR5DXsc?si=T9SSP3Wbjdz-AR9l&amp;controls=0?modestbranding=1'
]

const currentIndex = ref(0)
const videoSrc = ref(videoUrls[currentIndex.value])

const nextVideo = () => {
  currentIndex.value = (currentIndex.value + 1) % videoUrls.length
  videoSrc.value = videoUrls[currentIndex.value]
}

const prevVideo = () => {
  currentIndex.value = (currentIndex.value - 1 + videoUrls.length) % videoUrls.length
  videoSrc.value = videoUrls[currentIndex.value]
}
</script>

<style>
.responsive-iframe {
  width: 100%;
  height: 100%;
}
iframe:focus {
  outline: none;
}
.responsive-iframe .ytp-chrome-bottom {
  display: none;
}
/* YouTube oynatma düğmesini gizlemek için */
.responsive-iframe .ytp-chrome-bottom {
  display: none !important;
}

/* Videonun başlığını gizlemek için */
.responsive-iframe .title {
  display: none !important;
}

/* Sağ alt köşedeki YouTube logosunu gizlemek için */
.responsive-iframe .ytp-watermark {
  display: none !important;
}
@media (min-width: 320px) {
  .justTel {
    display: flex;
  }
  .justPc {
    display: none;
  }
}
@media (min-width: 768px) {
  .justTel {
    display: none;
  }
  .justPc {
    display: block;
  }
}
</style>
