const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: "《Unix编程艺术》",
        date: "2006-2",
        price: 59.0,
        count: 1,
      },
      {
        id: 3,
        name: "《Java高级编程》",
        date: "2008-1",
        price: 78.0,
        count: 1,
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2007-10",
        price: 128.0,
        count: 1,
      },
      {
        id: 5,
        name: "《计算机网络》",
        date: "2010-9",
        price: 69.0,
        count: 1,
      },
    ],
  },
  methods: {
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandler(index) {
      this.books.splice(index, 1);
    },
  },
  computed: {
    totalPrice() {
      // 1.普通的for循环
      // let totalPrice = 0;
      // for (let i = 0 ; i < this.books.length ; i++) {
      //     totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // 2.for循环的增强使用
      // let totalPrice = 0;
      // for (let i in this.books) {
      //     totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // 3.for(let item of this.books)
      // let totalPrice = 0;
      // for (let item of this.books) {
      //     totalPrice += item.price * item.count
      // }
      // return totalPrice

      // 4.reduce函数
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count;
      }, 0);
    },
  },
  filters: {
    showPrice(price) {
      return "¥" + price.toFixed(2);
    },
  },
});
