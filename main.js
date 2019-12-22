var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true //false
    }
  })
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })
  //    ******************* Handling User Input***************
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })
  //*******************Computed Properties**************** 
  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // a computed getter
      reversedMessage: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      }
    }
  })

  // ****************Computed vs Watched Property**********
  var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
      //fullName: 'Foo Bar'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
              return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
              var names = newValue.split(' ')
              this.firstName = names[0]
              this.lastName = names[names.length - 1]
            }
          }
       // fullName: function () {
         // return this.firstName + ' ' + this.lastName
       // }
      }
   //watch: {
     // firstName: function (val) {
      //  this.fullName = val + ' ' + this.lastName
      //},
      //lastName: function (val) {
       // this.fullName = this.firstName + ' ' + val
     // }
    //}
  })
  //****************Watchers******************* 
  var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
     
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
 
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }
  })
  //************************    Class and Style Bindings     *********************
  var exClassBind = new Vue({
      el: '#ex-class-bind',
      data :{
        isActive: true, //false
        hasError: true  //true
      }
  })

  var exClassBind2 = new Vue({
    el: '#ex-class-bind2',
    data: {
        isActive: true,
        error: null
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
})
var exClassBind3 = new Vue({
    el: '#ex-class-bind3',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
      }
})