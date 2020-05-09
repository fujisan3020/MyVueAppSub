(function() {
  'use strict';

  //Components

  var likeComponent = Vue.extend({
    //prosp(プロパティーズ)というキーで受け取る
    // props: ['message'],
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
      }
    }
  });

  var app = new Vue({
      el: '#app',
      components: {
        'like-component': likeComponent
      }
  });

})();
