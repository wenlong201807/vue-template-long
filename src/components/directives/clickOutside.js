// let listener = (e,el, bindings) => {
//   if (e.target === el || el.contains(e.target)) {
//     return;
//   }
//   console.log('xxxx');
//   bindings.value(); // close 事件  v-click-outside="close" 这里对应的
// }

export default {
  clickOutside: {
    inserted(el, bindings, vnode) {
      // el 真实的dom节点
      console.log(el, bindings, vnode);
      document.addEventListener('click', (e) => {
        if (e.target === el || el.contains(e.target)) {
          return;
        }
        // console.log('xxxx');
        bindings.value(); // close 事件  v-click-outside="close" 这里对应的
      });
    },
    unbind() {
      // 在指令卸载的时候，执行此操作
      console.log('卸载自定义指令...');
    },
  },
};
