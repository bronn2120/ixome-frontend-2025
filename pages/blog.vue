<template>
  <div class="blog-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="section-title">
        <h2>Our Recent Stories</h2>
        <div class="bar"></div>
        <p>Latest news and insights from IXome.ai on smart home technology.</p>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="single-story-box">
                <div class="story-image">
                  <NuxtLink to="/blog-details">
                    <img src="/blog-image/1.jpg" alt="Control4 Tips" loading="lazy" />
                  </NuxtLink>
                </div>
                <div class="story-content">
                  <h3><NuxtLink to="/blog-details">Top 5 Control4 Troubleshooting Tips</NuxtLink></h3>
                  <p>Learn expert tips to quickly resolve common Control4 issues with IXome.ai’s chatbot.</p>
                  <NuxtLink to="/blog-details" class="read-more-btn">Read More</NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="single-story-box">
                <div class="story-image">
                  <NuxtLink to="/blog-details">
                    <img src="/blog-image/2.jpg" alt="Lutron AI" loading="lazy" />
                  </NuxtLink>
                </div>
                <div class="story-content">
                  <h3><NuxtLink to="/blog-details">Mastering Lutron Systems with AI</NuxtLink></h3>
                  <p>Discover how IXome.ai simplifies Lutron troubleshooting for seamless smart home control.</p>
                  <NuxtLink to="/blog-details" class="read-more-btn">Read More</NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="single-story-box">
                <div class="story-image">
                  <NuxtLink to="/blog-details">
                    <img src="/blog-image/3.jpg" alt="AI Future" loading="lazy" />
                  </NuxtLink>
                </div>
                <div class="story-content">
                  <h3><NuxtLink to="/blog-details">The Future of AI in Smart Homes</NuxtLink></h3>
                  <p>Explore how IXome.ai’s autonomous agents are revolutionizing home automation.</p>
                  <NuxtLink to="/blog-details" class="read-more-btn">Read More</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="sidebar">
            <div class="widget widget-search">
              <h3 class="widget-title">Search</h3>
              <form class="search-form">
                <input type="text" placeholder="Search blog..." class="search-field" />
                <button type="submit" class="search-submit">Search</button>
              </form>
            </div>
            <div class="widget widget-categories">
              <h3 class="widget-title">Categories</h3>
              <ul>
                <li><NuxtLink to="/blog">Smart Home Tips</NuxtLink></li>
                <li><NuxtLink to="/blog">Control4</NuxtLink></li>
                <li><NuxtLink to="/blog">Lutron</NuxtLink></li>
                <li><NuxtLink to="/blog">AI Automation</NuxtLink></li>
              </ul>
            </div>
            <div class="widget widget-recent-posts">
              <h3 class="widget-title">Recent Posts</h3>
              <ul>
                <li><NuxtLink to="/blog-details">Control4 Troubleshooting Tips</NuxtLink></li>
                <li><NuxtLink to="/blog-details">Lutron AI Solutions</NuxtLink></li>
                <li><NuxtLink to="/blog-details">Future of Smart Homes</NuxtLink></li>
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
import { onMounted } from 'vue';

onMounted(() => {
  console.log('blog.vue mounted');
});
</script>

<style scoped>
.blog-area {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.section-title .bar {
  width: 50px;
  height: 4px;
  background-color: #007bff;
  margin: 10px auto;
}

.section-title p {
  font-size: 1.1rem;
  color: #666;
}

.single-story-box {
  margin-bottom: 30px;
}

.story-image img {
  width: 100%;
  border-radius: 8px;
}

.story-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 15px 0;
}

.story-content h3 a {
  color: #333;
  text-decoration: none;
}

.story-content h3 a:hover {
  color: #007bff;
}

.story-content p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}

.read-more-btn {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.read-more-btn:hover {
  color: #0056b3;
}

.sidebar {
  padding-left: 20px;
}

.widget {
  margin-bottom: 30px;
}

.widget-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.search-form {
  display: flex;
}

.search-field {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.search-submit {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
}

.search-submit:hover {
  background-color: #0056b3;
}

.widget ul {
  list-style: none;
  padding: 0;
}

.widget ul li {
  margin-bottom: 10px;
}

.widget ul li a {
  color: #333;
  text-decoration: none;
}

.widget ul li a:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .blog-area {
    padding: 40px 0;
  }

  .section-title h2 {
    font-size: 1.5rem;
  }

  .section-title p {
    font-size: 1rem;
  }

  .sidebar {
    padding-left: 0;
    margin-top: 30px;
  }

  .story-content h3 {
    font-size: 1.25rem;
  }

  .story-content p {
    font-size: 0.9rem;
  }
}
</style>