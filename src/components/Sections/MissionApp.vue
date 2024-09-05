<template>
  <div id="hakkimizda" class="missionApp flex flex-row items-center w-full bg-white justPc">
    <div class="w-[60%] pl-[5%] h-full flex flex-col justify-center pr-8">
      <div
        class="text-base tel:text-sm sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-russo -rotate-3 font-black custom-font flex flex-col items-start pb-[4%]"
      >
        <div>SINIRLARA MEYDAN</div>
        <div>OKUMA HEDEFİ</div>
      </div>
      <div
        class="flex gap-2 flex-col mt-[3%] text-xxs tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-thin light-font w-full text-justify"
      >
        <div class="pr-[5%]">
          Stratejik uzmanlık. Orijinal düşünme. Ödüllü uygulama. Hepsini bir araya getirdiğinizde
          işletmenizi diğerlerinden farklı kılacak yaratıcı bir ajansa sahip olursunuz.
        </div>
        <div>İşte tam da bu yüzden sonu olmayan bir yolculuktayız.</div>
      </div>
    </div>
    <div class="w-[40%] h-full flex flex-col justify-center items-center">
      <div>
        <img
          class="object-fit h-[90%] w-auto"
          src="@/assets/fevkindeSlogan.webp"
          alt="fevkindeAjans"
        />
      </div>
    </div>
  </div>
  <div
    id="hakkimizda"
    class="missionApp flex flex-row items-center w-full bg-white justTel pb-5 pt-5"
  >
    <div class="w-full pl-[5%] h-full flex flex-row justify-center items-center pr-8">
      <div
        class="w-[50%] text-base tel:text-sm sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-russo -rotate-3 font-black custom-font flex flex-col items-start pb-[4%]"
      >
        <div>SINIRLARA MEYDAN</div>
        <div>OKUMA HEDEFİ</div>
      </div>
      <div
        class="flex gap-2 w-[50%] flex-col mt-[3%] text-xxs tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-thin light-font text-justify"
      >
        <div class="pr-[5%]">
          Stratejik uzmanlık. Orijinal düşünme. Ödüllü uygulama. Hepsini bir araya getirdiğinizde
          işletmenizi diğerlerinden farklı kılacak yaratıcı bir ajansa sahip olursunuz.
        </div>
        <div>İşte tam da bu yüzden sonu olmayan bir yolculuktayız.</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
    display: flex;
  }
}
</style>
