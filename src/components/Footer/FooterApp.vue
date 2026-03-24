<template>
  <div
    id="iletisim"
    class="bg-black w-full h-full px-[5%] md:px-[7%] flex flex-col justify-center gap-4 md:gap-8 pb-3 overflow-y-auto"
  >
    <div class="flex flex-row justify-between items-center px-[3%] md:px-[5%] pt-[5%] gap-4">
      <div
        class="flex justify-center flex-col pl-[3%] -rotate-3 font-black custom-font italic w-[50%]"
      >
        <div
          class="text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#ffff] uppercase"
        >
          {{ currentSlogan }}
        </div>
        <div
          class="text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#ffff] uppercase"
        >
          EVERY DAY
        </div>
      </div>
      <div class="flex justify-center items-center polygon !-rotate-3">
        <div
          class="bg-[#D7D4D1] hover:bg-[#b2b1af] text-black custom-font items-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black px-5 py-2 !-rotate-3 italic"
        >
          <a href="mailto:hi@fevkinde.com.tr">BİZE ULAŞIN</a>
        </div>
      </div>
    </div>
    <div class="bg-black w-full flex items-center flex-col">
      <div class="flex justify-center">
        <img
          src="@/assets/FevkindeBeyazLogo.webp"
          alt="Fevkinde Ajans logosu - İstanbul reklam ajansı"
          loading="lazy"
          decoding="async"
          class="pt-[2%] w-1/4 sm:w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/6 2xl:w-1/6"
        />
      </div>
      <div class="w-full px-[5%] text-[#D7D4D1]">
        <div class="divider w-full py-[3%]"></div>
        <div class="flex flex-row flex-wrap justify-between gap-1 sm:gap-0">
          <div class="flex items-center gap-1 text-xxxs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl hover:underline">
            <i class="fa-solid fa-location-dot"></i>
            <span class="hidden sm:inline">/İstanbul & Balıkesir</span>
            <span class="sm:hidden">İstanbul</span>
          </div>
          <a href="https://www.youtube.com/@fevkindereklam" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-xxxs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl hover:underline cursor-pointer">
            <i class="fa fa-youtube-play"></i>
            <span class="hidden sm:inline">/Fevkindereklam</span>
            <span class="sm:hidden">Youtube</span>
          </a>
          <a href="https://www.linkedin.com/company/fevkindeajans/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-xxxs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl hover:underline cursor-pointer">
            <i class="fa-brands fa-linkedin-in"></i>
            <span class="hidden sm:inline">/Fevkindeajans</span>
            <span class="sm:hidden">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/fevkindeajans/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-xxxs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl hover:underline cursor-pointer">
            <i class="fa fa-instagram"></i>
            <span class="hidden sm:inline">/Fevkindeajans</span>
            <span class="sm:hidden">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slogan: [
        'CAMPAIGN',
        'DESIGN',
        'MARKETING',
        'EVENT',
        'CREATIVE',
        'SOCIAL MEDIA',
        'ROADSHOW',
        'PROJECT',
        'PRODUCTION',
        'LANSMAN'
      ],
      currentSloganIndex: 0
    }
  },
  computed: {
    currentSlogan() {
      return this.slogan[this.currentSloganIndex]
    }
  },
  mounted() {
    this.intervalId = setInterval(this.changeSlogan, 3000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  methods: {
    changeSlogan() {
      this.currentSloganIndex = (this.currentSloganIndex + 1) % this.slogan.length
    }
  }
}
</script>
<style>
.polygon {
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
}
.divider {
  border-bottom: 1px solid #e0e0e0;
  height: 1px;
}
</style>
