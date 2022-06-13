<script setup lang="ts"></script>

<template>
  <div class="footer h-96 bg-gray-800 text-white flex px-32 mt-60 py-16">
    <div class="footer-title w-2/5 h-full">
      <span class="title text-3xl">CoPlan</span>
      <br />
      <br />
      <br />
      <p class="footer-content w-2/3">
        This system is built entirely by individuals, for the purpose of training their own
        abilities and for their own use, without any commercial or profit-making activities.
      </p>

      <span class="copyright block mt-20">Copyright © 2022 Coisini.MX</span>
    </div>
    <div class="footer-list w-3/5 pl-60 flex space-x-32">
      <ul class="space-y-8">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <ul class="space-y-8">
        <li><a href="https://github.com/Flandre3569">Github</a></li>
        <li><a href="https://twitter.com/Coisini_mx">Twitter</a></li>
        <li><a href="#">Wechat</a></li>
      </ul>
      <div class="contact">
        <p>Contact me:</p>
        <a href="coisini.mx@gmail.com" class="contact-email">coisini.mx@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@ContactColor: #6366f1;
@changeColor: #3437ec;
@fontFamily: proxima-nova, sans-serif;
.footer-title {
  margin: 0 auto;
}

.title {
  font-size: xxx-large;
}

.footer {
  font-family: @fontFamily;
  font-size: medium;
}
.footer-content {
  opacity: 0.7;
}

.footer-list {
  font-size: large;
}

.contact-email {
  color: @ContactColor;
}

.contact {
  font-weight: 700;
}
a {
  color: white;
}

a,
.contact-email {
  transition: color 0.2s ease-in-out !important;
}

a:hover {
  color: #6366f1;
}

.contact-email:hover {
  color: @changeColor;
}
</style>
