<template>
  <main class="flex w-full flex-col bg-white">
    <section class="sliderApp" aria-label="Ana Slider">
      <slot name="sliderApp"></slot>
    </section>
    <section class="missionApp" aria-label="Hakkımızda">
      <slot name="missionApp"></slot>
    </section>
    <section class="marketingApp" aria-label="Dijital Pazarlama Hizmetleri">
      <slot name="marketingApp"></slot>
    </section>
    <section class="eventApp" aria-label="Etkinlik Yönetimi">
      <slot name="eventApp"></slot>
    </section>
    <section class="jobApp" aria-label="Neden Fevkinde">
      <slot name="jobApp"></slot>
    </section>
    <section class="referenceApp" aria-label="Referanslar">
      <slot name="referenceApp"></slot>
    </section>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </main>
</template>
<script setup></script>
