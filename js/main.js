const Counter = {
  data() {
    return {
      title: "",
      price: "",
      amount: "",
      orders: [],
    };
  },

  methods: {
    addOrder(e) {
      e.preventDefault();

      this.orders.push({
        id: Date.now(),
        title: this.title,
        price: Number(this.price),
        amount: Number(this.amount),
      });

      this.title = "";
      this.price = "";
      this.amount = "";
    },

    deleteOrder(id) {
      this.orders = this.orders.filter(order => order.id !== id);
    },
  },

  computed: {
    totalPrice() {
      return this.orders.reduce(
        (res, order) => (res += order.price * order.amount),
        0
      );
    },

    sortOrders() {
      return this.orders.sort((a, b) => b.price - a.price);
    },
  },
};

Vue.createApp(Counter).mount("#app");
