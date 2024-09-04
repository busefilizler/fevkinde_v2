<template>
  <header class="bg-transparent flex items-center justify-between px-[10%] w-full h-full">
    <div class="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 2xl:w-1/6">
      <img src="@/assets/fevkinde_logo.webp" alt="fevkinde_ajans_logo" />
    </div>
    <div class="flex flex-row gap-2 sm:gap-3 md:gap-3 lg:gap-6 xl:gap-8 2xl:gap-10">
      <div
        class="font-bold text-xxs tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl custom-font cursor-pointer hover-underline-animation red-underline"
        @click="scrollToSection('hakkimizda')"
      >
        HAKKIMIZDA
      </div>
      <div
        class="font-bold tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl custom-font cursor-pointer hover-underline-animation orange-underline"
        @click="scrollToSection('digital')"
      >
        DIGITAL
      </div>
      <div
        class="font-bold text-xxs tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl custom-font cursor-pointer hover-underline-animation sari-underline"
        @click="scrollToSection('event')"
      >
        EVENT
      </div>
      <div
        class="font-bold text-xxs tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl custom-font cursor-pointer hover-underline-animation green-underline"
        @click="scrollToSection('referans')"
      >
        REFERANS
      </div>
      <div
        class="font-bold text-xxs tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl custom-font cursor-pointer hover-underline-animation blue-underline"
        @click="scrollToSection('iletisim')"
      >
        İLETİŞİM
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
