<template>
  <div id="event" class="bg-white w-full eventApp px-[5%] py-[3%]">
    <!-- Başlık: her zaman üstte, sola yaslı -->
    <h2 class="relative flex flex-col items-start -rotate-6 uppercase italic pl-[4%] mb-3 md:mb-10 leading-none">
      <span
        class="text-black text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black custom-font -rotate-3"
      >
        Event
      </span>
      <span
        class="text-black text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black custom-font -rotate-3 -mt-1 md:mt-0"
      >
        Management
      </span>
    </h2>

    <!-- Maddeler + Video: yan yana, dikey ortalı -->
    <div class="flex flex-row items-center gap-[3%] md:gap-[4%] pt-5 sm:pt-8">
      <div
        class="w-[35%] md:w-[30%] shrink-0 flex flex-col items-center text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-thin light-font leading-tight md:leading-loose"
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

      <div class="w-[65%] md:w-[70%] flex items-center gap-1 md:gap-3">
        <i
          @click="prevVideo"
          class="fa-solid fa-chevron-left cursor-pointer text-sm md:text-2xl text-gray-400 hover:text-gray-600 shrink-0 transition-colors"
        ></i>
        <div ref="videoContainer" class="w-full aspect-video rounded-lg overflow-hidden shadow-md">
          <iframe
            class="w-full h-full"
            :src="iframeSrc"
            title="Fevkinde Ajans etkinlik ve fuar organizasyonu videoları"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <i
          @click="nextVideo"
          class="fa-solid fa-chevron-right cursor-pointer text-sm md:text-2xl text-gray-400 hover:text-gray-600 shrink-0 transition-colors"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const videoUrls = [
  'https://www.youtube.com/embed/HYnQxEdRCj0?si=Z_IFoFPqsBVwNLql&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/3c-Sevziqcs?si=H-1O9d0JloHiZ0HC&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/_oOWfbkSJfU?si=UPbd3ZmRbU48Z8NQ&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/opUc-Rn3HB4?si=IXk6W55QJ5kcK-uK&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/6jO1vl55BDA?si=jJYxm-IM5EyHni8A&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/gxfRibFboE4?si=PUp7ZMd39Nvs254n&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/ByPkLYqnI1o?si=2DdLwCEr9nv4pQ8K&controls=0&modestbranding=1',
  'https://www.youtube.com/embed/DePPCR5DXsc?si=T9SSP3Wbjdz-AR9l&controls=0&modestbranding=1'
]

const currentIndex = ref(0)
const isVisible = ref(false)
const videoContainer = ref(null)
let observer = null

const iframeSrc = computed(() => {
  const base = videoUrls[currentIndex.value]
  const autoplayParams = isVisible.value ? '&autoplay=1&mute=1' : ''
  return base + autoplayParams
})

const nextVideo = () => {
  currentIndex.value = (currentIndex.value + 1) % videoUrls.length
}

const prevVideo = () => {
  currentIndex.value = (currentIndex.value - 1 + videoUrls.length) % videoUrls.length
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    { threshold: 0.5 }
  )
  if (videoContainer.value) {
    observer.observe(videoContainer.value)
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
iframe:focus {
  outline: none;
}
</style>
