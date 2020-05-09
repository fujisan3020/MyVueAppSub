(function() {
  'use strict';

  //Components

  var likeComponent = Vue.extend({
    //prosp(プロパティーズ)というキーで受け取る
    // props: ['message'],
    // propsは、デフォルト値や型を指定することもできる
    props: {
      message: {
        type: String,
        default: 'LIke'
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    // templete: '<div><button>Like</button><button>Like</button></div>'
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment');
      }
    }
  });

  var app = new Vue({
      el: '#app',
      components: {
        'like-component': likeComponent
      },
      data: {
        total: 0
      },
      methods: {
        incrementTotal: function() {
          this.total++;
        }
      }
  });

})();
