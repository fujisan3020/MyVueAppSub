(function() {
  'use strict';

  //Components

  var likeComponent = Vue.extend({
    data: function() {
      return {
        count:0
      }
    },
    template: '<button @click="countUp">Like {{ count }}</button>',
    // templete: '<div><button>Like</button><button>Like</button></div>'
    methods: {
      countUp: function() {
        this.count++;
      }
    }
  });

  var app = new Vue({
      el:'#app',
      components: {
        'like-component': likeComponent
      }
  });

})();
