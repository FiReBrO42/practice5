export default {
  methods: {
    swiper() {
      const swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: 0,
        speed: 10000,
        centeredSlides: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        simulateTouch: false,
        shortSwipes: false,
        followFinger: false,
      });
    },
    swiperCarousel() {
      const swiperCarousel = new Swiper('.swiperCarousel', {
        loop: true,
        spaceBetween: 0,
        speed: 3000,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        simulateTouch: false,
        shortSwipes: false,
        followFinger: false,
      });
    },
    swiperSlotmachine() {
      const swiper = new Swiper('.swiperSlotmachine', {
        loop: true,
        spaceBetween: 0,
        speed: 15000,
        centeredSlides: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        simulateTouch: false,
        shortSwipes: false,
        followFinger: false,
      });
    }
      
  }
}