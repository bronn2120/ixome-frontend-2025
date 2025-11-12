<template>
  <div class="footer-area bg-f7fafd">
    <div class="container mx-auto px-4">
      <div v-if="footerData" class="row">
        <div class="col-lg-4 col-md-6">
          <h3>{{ footerData.title }}</h3>
          <p v-if="parsedDescription">{{ parsedDescription }}</p>
        </div>
        <div class="col-lg-4 col-md-6">
          <h3>{{ footerData.titleTwo }}</h3>
          <ul class="list-none">
            <li v-for="item in footerData.supportLists || []" :key="item.title">
              <a :href="item.link" class="text-blue-500 hover:text-green-500">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h3>{{ footerData.titleThree }}</h3>
          <p>{{ footerData.address }}</p>
          <p>{{ footerData.email }}</p>
          <p>{{ footerData.phone }}</p>
          <ul class="list-none flex gap-4">
            <li v-for="social in footerData.socialLink || []" :key="social.link">
              <a :href="social.link" target="_blank" :aria-label="social.icon">
                <i :class="social.icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-else-if="error" class="text-center text-red-600">
        <p>Failed to load footer data: {{ error.message }}</p>
      </div>
      <div v-else class="text-center text-gray-600">
        <p>Loading footer data...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const footerData = ref(null);
const error = ref(null);

const { data } = await useAsyncData('footer', async () => {
  try {
    const response = await $fetch('/api/footers?populate=*', {
      baseURL: 'http://127.0.0.1:1337'
    });
    return response.data && response.data.length > 0 ? response.data[0] : null;
  } catch (err) {
    console.error('Footer fetch error:', err);
    error.value = err;
    return null;
  }
});

if (data.value) {
  footerData.value = data.value; // Store the entire data object
} else if (!error.value) {
  console.error('No footer data found');
}

// Extract the description text from the footer field
const parsedDescription = computed(() => {
  if (!footerData.value || !footerData.value.attributes || !footerData.value.attributes.footer) return '';
  // Find the paragraph containing the actual description text
  const descriptionParagraph = footerData.value.attributes.footer.find(paragraph =>
    paragraph.children[0]?.text.includes('Quis ipsum suspendisse')
  );
  return descriptionParagraph ? descriptionParagraph.children[0].text : '';
});
</script>

<style scoped>
.footer-area {
  position: relative;
  z-index: 1;
  background-color: #f7fafd;
  padding: 80px 0;
}

.footer-area h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.footer-area p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.footer-area ul {
  padding: 0;
  list-style: none;
}

.footer-area ul li {
  margin-bottom: 0.5rem;
}

.footer-area ul li a {
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
}

.footer-area ul li a:hover {
  color: #28a745;
}

@media (max-width: 768px) {
  .footer-area {
    padding: 40px 0;
  }

  .footer-area h3 {
    font-size: 1.25rem;
  }

  .footer-area p {
    font-size: 0.9rem;
  }
}
</style>