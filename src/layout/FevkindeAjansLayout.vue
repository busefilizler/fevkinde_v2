<template>
  <div class="flex w-full flex-col bg-white">
    <div class="sliderApp">
      <slot name="sliderApp"></slot>
    </div>
    <div class="missionApp">
      <slot name="missionApp"></slot>
    </div>
    <div class="marketingApp">
      <slot name="marketingApp"></slot>
    </div>
    <div class="eventApp">
      <slot name="eventApp"></slot>
    </div>
    <div class="jobApp">
      <slot name="jobApp"></slot>
    </div>
    <div class="referenceApp">
      <slot name="referenceApp"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup></script>
