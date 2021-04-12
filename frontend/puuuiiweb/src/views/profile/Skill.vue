<template>
  <div class="prifile-skill-body uk-flex uk-flex-wrap uk-flex-center">
    <div v-for="(skill, i) in skill_keys" :key="i" :id="skill" class="chart uk-width-2-5@m"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import ApexCharts from 'apexcharts';
import skilldata from './skill.json';

export default defineComponent({
  name: 'Skill',

  setup(props, context) {
    // 変数定義
    const skill_levels = skilldata.levels;
    const skill_keys = Object.keys(skilldata.skill);

    onMounted(() => {
      Object.entries(skilldata.skill).forEach(elem => {
        const key = elem[0];
        const data = elem[1];
        const title = data['title'];
        const labels = data['labels'];
        const values = data['values'];

        new ApexCharts(document.querySelector(`#${key}`), {
          chart: { type: 'radar' },
          series: [{ data: values }],
          labels: labels,
          theme: { mode: 'dark' },
          title: { text: title, align: 'center', style: { fontSize: '24px', color: "#D3D3D3" } },
          xaxis: { labels: { style: { fontSize: '20px' } } },
          yaxis: { show: false, min: 0,  max: 5, tickAmount: 5},
          dataLabels: {
            enabled: true,
            background: { enabled: true }
          },
          colors: ['#2673B8']
        }).render();
      });
    });

    return { skill_keys }
  }
});
</script>

<style scoped>
  .chart {
    background-color: #28282c;
  }
</style>