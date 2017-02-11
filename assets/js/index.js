import Medium from 'babel-loader!../../../vue-medium-editor'
import Vue from 'vue/dist/vue.js'

const exhaustiveOptions = {
  toolbar: {
      /* These are the default options for the toolbar,
         if nothing is passed this is what is used */
      allowMultiParagraphSelection: true,
      buttons: ['bold', 'italic', 'strikethrough','underline', 'anchor', 'h2', 'h3', 'quote'],
      diffLeft: 0,
      diffTop: -10,
      firstButtonClass: 'medium-editor-button-first',
      lastButtonClass: 'medium-editor-button-last',
      relativeContainer: null,
      standardizeSelectionStart: false,
      static: false,
      /* options which only apply when static is true */
      align: 'center',
      sticky: false,
      updateOnEmptySelection: false
  }
}

const simpleOptions = {
  toolbar: {
      /* These are the default options for the toolbar,
         if nothing is passed this is what is used */
      allowMultiParagraphSelection: true,
      buttons: ['bold', 'anchor', 'h2']
  }
}

let simpleEditor = Medium(simpleOptions)
let exhaustiveEditor = Medium(exhaustiveOptions)

let vm = new Vue ({
  data: {
    msg: 'Hi'
  },
  el: '#app',
  components: {
    "medium-editor": simpleEditor,
    "medium-editor-plus": exhaustiveEditor
  }
})
