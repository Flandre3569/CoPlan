import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

// 封装一个Hook方法实现数据懒加载
export const useLazyData = (apiFn: any) => {
  // 当前组件进入可视区时触发接口调用
  // 被监听的DOM元素
  const target = ref(null);
  // 调用接口获取的结果
  const result = ref([]);
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // 进入可视区
      apiFn().then((data: any) => {
        result.value = data.result;
      });
      // 停止监听
      stop();
    }
  });
  return { result, target };
};
