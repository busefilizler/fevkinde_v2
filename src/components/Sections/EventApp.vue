<template>
  <div id="event" class="bg-white w-full eventApp pb-8 md:pb-12">
    <div class="pt-[4%] px-[5%] flex flex-col md:flex-row gap-6 md:gap-[5%]">
      <div class="w-full md:w-1/3 flex flex-col gap-6 md:gap-12">
        <div
          class="flex flex-col items-center justify-center -rotate-6 uppercase italic pl-[4%] mt-[3%] w-full"
        >
          <div
            class="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black custom-font z-50 -rotate-3"
          >
            Event
          </div>
          <div
            class="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black custom-font z-50 -rotate-3"
          >
            Management
          </div>
        </div>
        <div
          class="flex flex-col items-center light-font font-thin text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-3xl w-full"
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
      <div class="w-full md:w-2/3 md:pl-24 flex items-center gap-2">
        <i
          @click="prevVideo"
          class="fa-solid fa-chevron-left cursor-pointer text-lg md:fa-2xl text-gray-500 shrink-0 p-2"
        ></i>
        <div v-if="!videoLoaded" class="relative w-full aspect-video cursor-pointer group" @click="loadVideo">
          <img
            :src="'https://img.youtube.com/vi/' + currentVideoId + '/hqdefault.jpg'"
            alt="Video önizleme"
            class="w-full h-full object-cover rounded"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        <iframe
          v-else
          ref="videoIframe"
          class="w-full aspect-video rounded"
          :src="videoSrc + '&autoplay=1'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <i
          @click="nextVideo"
          class="fa-solid fa-chevron-right cursor-pointer text-lg md:fa-2xl text-gray-500 shrink-0 p-2"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const videoUrls = [
  'https://www.youtube.com/embed/3c-Sevziqcs?si=H-1O9d0JloHiZ0HC&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/_oOWfbkSJfU?si=UPbd3ZmRbU48Z8NQ&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/opUc-Rn3HB4?si=IXk6W55QJ5kcK-uK&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/6jO1vl55BDA?si=jJYxm-IM5EyHni8A&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/gxfRibFboE4?si=PUp7ZMd39Nvs254n&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/ByPkLYqnI1o?si=2DdLwCEr9nv4pQ8K&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/DePPCR5DXsc?si=T9SSP3Wbjdz-AR9l&controls=0&modestbranding=1'
]

const videoIds = videoUrls.map(url => {
  const match = url.match(/embed\/([^?]+)/)
  return match ? match[1] : ''
})

const currentIndex = ref(0)
const videoLoaded = ref(false)

const videoSrc = computed(() => videoUrls[currentIndex.value])
const currentVideoId = computed(() => videoIds[currentIndex.value])

function loadVideo() {
  videoLoaded.value = true
}

const nextVideo = () => {
  currentIndex.value = (currentIndex.value + 1) % videoUrls.length
  videoLoaded.value = false
}

const prevVideo = () => {
  currentIndex.value = (currentIndex.value - 1 + videoUrls.length) % videoUrls.length
  videoLoaded.value = false
}
</script>

<style scoped>
iframe:focus {
  outline: none;
}
</style>
