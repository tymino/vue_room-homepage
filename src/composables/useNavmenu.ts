import { ref } from 'vue';

export const useNavmenu = () => {
  const items = ['Home', 'Shop', 'About', 'Contact'];

  const isOpenMenu = ref(false);

  const handleOpen = () => (isOpenMenu.value = true);
  const handleClose = () => (isOpenMenu.value = false);

  return {
    items,
    isOpenMenu,
    handleOpen,
    handleClose,
  };
};
