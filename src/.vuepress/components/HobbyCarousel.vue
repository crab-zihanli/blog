<template>
  <div
    class="scroll-wrapper"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <!-- 渐隐遮罩 -->
    <div class="fade-left"></div>
    <div class="fade-right"></div>

    <!-- 滚动内容 -->
    <div
      ref="scrollContainer"
      class="scroll-content"
      :style="scrollStyle"
    >
    <!-- 爱好太少了，得复制三份，，，不然就不够长了 -->
      <div
        v-for="(item, index) in items.concat(items).concat(items)"
        :key="index"
        class="icon-item"
      >
        <div class="icon">{{ item.icon }}</div>
        <div class="label">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { icon: "🏀", name: "篮球" },
      { icon: "🏓", name: "乒乓球" },
      { icon: "🎾", name: "壁球" },
      { icon: "🏸", name: "羽毛球" },
      { icon: "🚴", name: "骑行" },
      { icon: "🏃", name: "跑步" },
      { icon: "🏊", name: "游泳" },
    ],
  },
  speed: {
    type: Number,
    default: 0.08, // px/ms
  },
});//接收的参数，这里设置默认值

const scrollContainer = ref(null);
const offset = ref(0);
const isPaused = ref(false);
let lastTime = null;
let animationFrameId;//这里是用来存储requestAnimationFrame的id

const scrollStyle = computed(() => ({
  transform: `translateX(-${offset.value}px)`,
  transition: 'transform 0s linear',
}));

const animate = (time) => {
  if (!lastTime) lastTime = time;
  const delta = time - lastTime;
  lastTime = time;

  if (!isPaused.value) {
    offset.value += delta * props.speed;
    const el = scrollContainer.value;
    if (el) {
      const contentWidth = el.scrollWidth / 3;
      if (offset.value >= contentWidth) {
        offset.value -= contentWidth;
      }
    }
  }

  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  animationFrameId = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.scroll-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 80px;
  background: #fff;
}

.scroll-content {
  display: flex;
  white-space: nowrap;
  align-items: center;
}

.icon-item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 10px;
  text-align: center;
}

.icon {
  font-size: 24px;
}

.label {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

/* 渐隐遮罩 */
.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  pointer-events: none;
  z-index: 1;
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
}
</style>
