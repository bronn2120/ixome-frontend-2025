<template>
  <div class="footer-area bg-f7fafd">
    <div class="container mx-auto px-4">
      <div class="row" v-if="footerData || fetchError">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <div class="logo">
              <NuxtLink to="/">
                <img v-if="footerLogoUrl" :src="footerLogoUrl" alt="ixome.ai logo" loading="lazy" />
                <img v-else src="~/assets/img/logo.png" alt="ixome.ai default logo" loading="lazy" />
              </NuxtLink>
            </div>
            <p class="text-gray-600">{{ footerData?.shortDesc || "Empowering smart homes with AI-driven solutions." }}</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget pl-5">
            <h3 class="text-xl font-bold mb-4">{{ footerData?.title || "Company" }}</h3>
            <ul class="list-none space-y-2">
              <li v-for="company in footerData?.companyLists || fallbackCompanyLists" :key="company.id || company.title">
                <NuxtLink v-if="isInternalLink(company.link)" :to="mapInternalLink(company.link)" class="footer-link text-gray-600 hover:text-blue-500">{{ company.title }}</NuxtLink>
                <a v-else :href="company.link" target="_blank" class="footer-link text-gray-600 hover:text-blue-500">{{ company.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3 class="text-xl font-bold mb-4">{{ footerData?.titleTwo || "Support" }}</h3>
            <ul class="list-none space-y-2">
              <li v-for="support in footerData?.supportLists || fallbackSupportLists" :key="support.id || support.title">
                <NuxtLink v-if="isInternalLink(support.link)" :to="mapInternalLink(support.link)" class="footer-link text-gray-600 hover:text-blue-500">{{ support.title }}</NuxtLink>
                <a v-else :href="support.link" target="_blank" class="footer-link text-gray-600 hover:text-blue-500">{{ support.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3 class="text-xl font-bold mb-4">{{ footerData?.titleThree || "Contact" }}</h3>
            <ul class="footer-contact-info list-none space-y-2">
              <li class="flex items-center"><i class="fas fa-map-marker-alt mr-2 text-blue-500"></i>{{ footerData?.address || "3701 Dorothy Ln" }}</li>
              <li class="flex items-center"><i class="fas fa-envelope mr-2 text-blue-500"></i><a :href="`mailto:${footerData?.email || 'pasona@gmail.com'}`" class="text-gray-600 hover:text-blue-500">{{ footerData?.email || "pasona@gmail.com" }}</a></li>
              <li class="flex items-center"><i class="fas fa-phone mr-2 text-blue-500"></i><a :href="`tel:${footerData?.phone || '321984754'}`" class="text-gray-600 hover:text-blue-500">{{ footerData?.phone || "321984754" }}</a></li>
            </ul>
            <ul class="social-links flex space-x-3 mt-4">
              <li v-for="social in footerData?.socialLink || fallbackSocialLinks" :key="social.id || social.icon">
                <a :href="parseSocialLink(social.link)" target="_blank" :aria-label="social.title || 'Social Media'" class="text-gray-600 hover:text-blue-500"><i :class="social.icon || 'fab fa-facebook'"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 mt-8">
          <div class="copyright-area text-center border-t pt-4">
            <p class="text-gray-600">Copyright ©{{ currentYear }} IXome. All Rights Reserved</p>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-gray-600">
        <p>Loading footer data...</p>
      </div>
    </div>
    <img src="~/assets/img/map.png" class="map" alt="map" loading="lazy" />
    <div class="shape1"><img src="~/assets/img/shape1.png" alt="shape" loading="lazy" />
    </div>
    <div class="shape8 rotateme"><img src="~/assets/img/shape2.svg" alt="shape" loading="lazy" />
    </div>
    <div :class="['go-top', { active: isTop }]" @click="scrollToTop()" role="button" aria-label="Scroll to top" class="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 cursor-pointer">
      <i class="fas fa-arrow-up"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NuxtLink } from '#components';
import axios from 'axios';

const isTop = ref(false);
const currentYear = ref(new Date().getFullYear());
const footerData = ref(null);
const fetchError = ref(null);
const footerLogoUrl = ref(null);
const STRAPI_BASE_URL = '/strapi-api';

const fallbackCompanyLists = [
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Contact', link: '/contact' }
];
const fallbackSupportLists = [
  { title: 'Support', link: '/support' },
  { title: 'Pricing', link: '/pricing' }
];
const fallbackSocialLinks = [
  { link: 'https://facebook.com', icon: 'fab fa-facebook', title: 'Facebook' },
  { link: 'https://twitter.com', icon: 'fab fa-twitter', title: 'Twitter' },
  { link: 'https://linkedin.com', icon: 'fab fa-linkedin-in', title: 'LinkedIn' },
  { link: 'https://instagram.com', icon: 'fab fa-instagram', title: 'Instagram' }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const isInternalLink = (link) => {
  return link && (link.startsWith('/') || link === 'ixome.ai');
};

const mapInternalLink = (link) => {
  if (link === 'ixome.ai') {
    return '/';
  }
  return link;
};

const parseSocialLink = (link) => {
  try {
    const parsed = JSON.parse(link.replace('socialLink: ', ''));
    return parsed.link || 'https://facebook.com';
  } catch {
    return link || 'https://facebook.com';
  }
};

onMounted(async () => {
  window.addEventListener('scroll', () => {
    isTop.value = window.scrollY >= 100;
  });

  try {
    const timestamp = new Date().getTime();
    const footerResponse = await axios.get(`${STRAPI_BASE_URL}/api/footers?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT || '0cd0e40004e6754b99c87190736e1c94094ae5383fab2896f0cceb79f63df1ce3d788d04f45057fd06830bb22a8d91e9af9d6d79ae28694a94df84dcc4c93b490b3a6c72b795195702e380ec0ca9280ba9ca958cf5ef190d548eba87982c9459453c00d92948c94122606f9f4cee9964bef15f2d406e2e7de45bfac23fc4aa22'}`
      }
    });
    const footerResponseData = footerResponse.data;
    footerData.value = footerResponseData?.data?.[0]?.attributes || {};

    if (!footerData.value?.logo?.data?.attributes?.url) {
      const sitelogoResponse = await axios.get(`${STRAPI_BASE_URL}/api/sitelogo?populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_JWT || '0cd0e40004e6754b99c87190736e1c94094ae5383fab2896f0cceb79f63df1ce3d788d04f45057fd06830bb22a8d91e9af9d6d79ae28694a94df84dcc4c93b490b3a6c72b795195702e380ec0ca9280ba9ca958cf5ef190d548eba87982c9459453c00d92948c94122606f9f4cee9964bef15f2d406e2e7de45bfac23fc4aa22'}`
        }
      });
      const sitelogoResponseData = sitelogoResponse.data;
      const relativeUrl = sitelogoResponseData?.data?.attributes?.SHT?.data?.attributes?.url || null;
      footerLogoUrl.value = relativeUrl ? `${STRAPI_BASE_URL}${relativeUrl}` : null;
    } else {
      const relativeUrl = footerData.value?.logo?.data?.attributes?.url || null;
      footerLogoUrl.value = relativeUrl ? `${STRAPI_BASE_URL}${relativeUrl}` : null;
    }
  } catch (error) {
    console.error('Error fetching footer data:', error);
    fetchError.value = true;
    footerData.value = {};
  }
});
</script>

<style scoped>
.footer-area {
  position: relative;
  z-index: 1;
}

.single-footer-widget h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.footer-link {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #007bff;
}

.footer-contact-info li {
  margin-bottom: 10px;
}

.social-links li i {
  font-size: 18px;
}

.map {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}

.shape1,
.shape8 {
  position: absolute;
}

.shape1 {
  bottom: 0;
  left: 0;
}

.shape8 {
  top: 0;
  right: 0;
}

.rotateme {
  animation: rotateme 24s linear infinite;
}

@keyframes rotateme {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>