<template>
  <section class="skill-improvement-section">
    <div class="section-header">
      <h2>提升绘画技巧</h2>
      <p>跟随AI学习专业绘画技巧，逐步提高水平</p>
    </div>

    <div class="theme-selection">
      <div class="theme-card" v-for="(item, index) in themeItems" :key="index">
        <img :src="item.image" :alt="item.title">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <div class="learning-path">
      <h3>为您推荐的学习路径</h3>
      <ul>
        <li>基础线条训练 → 素描入门 → 色彩理论 → 数位绘画实战</li>
        <li>可选主题教程：《人物表情速成》、《风景构图法则》、《动漫配色技巧》</li>
      </ul>
    </div>

    <div class="action-buttons">
      <a href="#" class="nav-btn">开始学习</a>
      <a href="#" class="nav-btn">挑战自我</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PaintingLearningLanding',
  data() {
    return {
      themeItems: [
        {
          title: '人物肖像',
          description: '掌握面部结构与光影表现，绘制生动的人物形象。',
          image: require('@/assets/images/portrait.png')
        },
        {
          title: '风景写生',
          description: '从自然中汲取灵感，练习透视与色彩搭配。',
          image: require('@/assets/images/landscape.png')
        },
        {
          title: '动漫角色',
          description: '学习比例、动态与表情设计，打造个性角色。',
          image: require('@/assets/images/anime-character.png')
        }
      ]
    };
  }
};
</script>

<style scoped>
.skill-improvement-section {
  padding: 60px 20px;
  background-color: var(--color-background);
  text-align: center;
}

.section-header h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: var(--color-foreground);
}

.section-header p {
  font-size: 16px;
  color: var(--color-muted);
}

.theme-selection {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.theme-card {
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  width: 250px;
  padding: 20px;
  transition: transform var(--transition);
  border: 1px solid var(--color-border);
}

.theme-card:hover {
  transform: translateY(-5px);
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), transparent);
}

.theme-card img {
  width: 100%;
  height: auto;
  border-radius: calc(var(--border-radius) - 2px);
  margin-bottom: 10px;
  border: 1px solid var(--color-border);
}

.theme-card h4 {
  font-size: 20px;
  margin: 10px 0;
  color: var(--color-foreground);
}

.theme-card p {
  font-size: 14px;
  color: var(--color-muted);
}

.learning-path {
  margin-top: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.learning-path ul {
  list-style: none;
  padding: 0;
}

.learning-path li {
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  padding: 12px 20px;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  color: var(--color-foreground);
}

.action-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: var(--border-radius);
  text-align: center;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  color: var(--color-background);
  background: var(--color-primary);
  background-color: var(--color-primary);
}

.nav-btn:hover {
  background: var(--color-primary-hover);
}
</style>