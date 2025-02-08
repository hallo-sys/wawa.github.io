new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "1.jpeg",
            img2: "6.jpeg",
            img3: "2.jpeg",
            title: "Bear",
            isOpen: false,
          },
          {
            img1: "4.jpeg",
            img2: "h.jpeg",
            img3: "5.jpeg",
            title: "School",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });