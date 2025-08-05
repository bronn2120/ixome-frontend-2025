<template>
  <div class="blog-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="single-blog-post p-6 rounded-md shadow-lg transition-transform duration-600">
                <div class="blog-image">
                  <NuxtLink to="/blog">
                    <img src="~/assets/img/blog-image/1.jpg" alt="Control4 Tips" loading="lazy" class="rounded-t-md w-full">
                  </NuxtLink>
                </div>
                <div class="blog-content p-5">
                  <h3 class="text-xl font-bold mb-2">
                    <NuxtLink to="/blog" class="text-blue-500 hover:text-green-500">Top 5 Control4 Troubleshooting Tips</NuxtLink>
                  </h3>
                  <p class="text-gray-600">Learn expert tips to quickly resolve common Control4 issues with IXome.ai's chatbot.</p>
                  <NuxtLink to="/blog" class="read-more-btn text-blue-500 hover:text-green-500">
                    Read More
                    <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-1" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="single-blog-post p-6 rounded-md shadow-lg transition-transform duration-600">
                <div class="blog-image">
                  <NuxtLink to="/blog">
                    <img src="~/assets/img/blog-image/2.jpg" alt="Lutron AI" loading="lazy" class="rounded-t-md w-full">
                  </NuxtLink>
                </div>
                <div class="blog-content p-5">
                  <h3 class="text-xl font-bold mb-2">
                    <NuxtLink to="/blog" class="text-blue-500 hover:text-green-500">Mastering Lutron Systems with AI</NuxtLink>
                  </h3>
                  <p class="text-gray-600">Discover how IXome.ai simplifies Lutron troubleshooting for seamless smart home control.</p>
                  <NuxtLink to="/blog" class="read-more-btn text-blue-500 hover:text-green-500">
                    Read More
                    <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-1" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="single-blog-post p-6 rounded-md shadow-lg transition-transform duration-600">
                <div class="blog-image">
                  <NuxtLink to="/blog">
                    <img src="~/assets/img/blog-image/3.jpg" alt="AI Future" loading="lazy" class="rounded-t-md w-full">
                  </NuxtLink>
                </div>
                <div class="blog-content p-5">
                  <h3 class="text-xl font-bold mb-2">
                    <NuxtLink to="/blog" class="text-blue-500 hover:text-green-500">The Future of AI in Smart Homes</NuxtLink>
                  </h3>
                  <p class="text-gray-600">Explore how IXome.ai's autonomous agents are revolutionizing home automation.</p>
                  <NuxtLink to="/blog" class="read-more-btn text-blue-500 hover:text-green-500">
                    Read More
                    <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-1" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="widget-area">
            <div class="widget widget_search">
              <h3 class="widget-title text-xl font-bold mb-5 text-gray-800">Search</h3>
              <form class="search-form relative">
                <input type="text" class="search-field w-full p-2 pl-3 border border-gray-300 rounded-md text-base" placeholder="Search blog...">
                <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-none border-none text-xl text-blue-500"><i class="bx bx-search-alt"></i></button>
              </form>
            </div>
            <div class="widget widget_categories">
              <h3 class="widget-title text-xl font-bold mb-5 text-gray-800">Categories</h3>
              <ul class="list-none space-y-2">
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">Smart Home Tips</NuxtLink></li>
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">Control4 Solutions</NuxtLink></li>
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">Lutron Support</NuxtLink></li>
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">AI Automation</NuxtLink></li>
              </ul>
            </div>
            <div class="widget widget_recent_posts">
              <h3 class="widget-title text-xl font-bold mb-5 text-gray-800">Recent Posts</h3>
              <ul class="list-none space-y-2">
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">Top 5 Control4 Troubleshooting Tips</NuxtLink></li>
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">Mastering Lutron Systems with AI</NuxtLink></li>
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">The Future of AI in Smart Homes</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faArrowRight);

useHead({
  title: 'IXome.ai - Blog',
  meta: [
    { name: 'description', content: 'Explore the latest news and insights on smart home technology from IXome.ai.' },
    { name: 'keywords', content: 'smart home blog, Control4 troubleshooting, Lutron support, AI chatbot' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
  ]
});
</script>

<style scoped>
.blog-area {
  position: relative;
  z-index: 1;
}

.single-blog-post {
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  transition: 0.6s;
}

.single-blog-post .blog-image {
  position: relative;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
}

.single-blog-post .blog-image img {
  border-radius: 5px 5px 0 0;
  transition: 0.6s;
}

.single-blog-post .blog-content {
  padding: 20px;
}

.single-blog-post .blog-content h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.single-blog-post .blog-content p {
  margin-bottom: 0;
}

.single-blog-post .read-more-btn {
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #007bff;
  margin-top: 20px;
  position: relative;
  text-decoration: none;
}

.single-blog-post .read-more-btn::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #007bff;
  transition: 0.6s;
}

.single-blog-post .read-more-btn:hover {
  color: #28a745;
  letter-spacing: 1px;
}

.single-blog-post .read-more-btn:hover::before {
  width: 100%;
}

.single-blog-post:hover .blog-image img {
  transform: scale(1.1);
}

.widget-area .widget {
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.widget-area .widget-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
}

.widget-area .search-form {
  position: relative;
}

.widget-area .search-form input {
  width: 100%;
  padding: 10px 40px 10px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.widget-area .search-form button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 20px;
  color: #007bff;
}

.widget-area .widget_categories ul,
.widget-area .widget_recent_posts ul {
  list-style: none;
  padding: 0;
}

.widget-area .widget_categories ul li,
.widget-area .widget_recent_posts ul li {
  margin-bottom: 10px;
}

.widget-area .widget_categories ul li a,
.widget-area .widget_recent_posts ul li a {
  color: #007bff;
  font-size: 16px;
  text-decoration: none;
}

.widget-area .widget_categories ul li a:hover,
.widget-area .widget_recent_posts ul li a:hover {
  color: #28a745;
}
</style>