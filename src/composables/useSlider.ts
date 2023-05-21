import { IDescribe } from '@/types/IDescribe';
import { ref, computed } from 'vue';

export const useSlider = () => {
  const describes: IDescribe[] = [
    {
      header: 'Discover innovative ways to decorate',
      body: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      header: 'We are available all across the globe',
      body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      header: 'Manufactured with the best materials',
      body: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ];

  const activeSlide = ref(1);
  const activeDescribe = computed(() => describes[activeSlide.value - 1]);

  const switchSlide = (direction: number) => {
    const position = activeSlide.value + direction;

    activeSlide.value =
      direction < 0
        ? Math.max(1, position)
        : Math.min(position, describes.length);
  };

  return {
    activeSlide,
    activeDescribe,
    switchSlide,
  };
};
