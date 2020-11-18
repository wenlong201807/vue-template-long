export default {
  // mounted() {
  //   console.log('normal...')
  // },
  props: {
    render: {
      type:Function
    },
    item: {
      type:String
    }
  },
  render(h) { // createElement
    return this.render(h,this.item)
  },
}