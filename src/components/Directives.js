let observer;
export const resize = {
    mounted(el, binding) {
        observer = new ResizeObserver(() => {
            binding.value();
        })
        observer.observe(el);
    },
    unmounted(el) {
        observer.disconnect();
        console.log('unMount--',el)
    }
}
export default resize