<script setup lang="ts">
import { useProfile } from "@/stores/profile";
import { onMounted, ref } from "vue";
import { localCache } from "@/utils/Cache";

// 引入antd的组件
import { message } from "ant-design-vue";
import type { UploadChangeParam, UploadProps } from "ant-design-vue";

const profileStore = useProfile();
onMounted(() => {
  profileStore.queryProfile();
});

const data = profileStore.$state;

// 图片数据持久化处理
const name = localCache.getCache("user_name");
const avatar = localCache.getCache("avatar");
const bg_img = localCache.getCache("bg_img");

// 照片上传列表
const fileList = ref([]);
// 图片上传状态
const loading = ref<boolean>(false);
const imageUrl = ref<string>("");

// 上传之前的预处理
const beforeUpload = (file: UploadProps["fileList"][number]) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

// 上传过程变化对应执行的函数
const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === "uploading") {
    loading.value = true;
    return;
  }
  if (info.file.status === "done") {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("upload error");
  }
};
</script>

<template>
  <div class="profile-page relative">
    <div class="profile-card bg-white absolute flex animate__animated animate__zoomIn">
      <div class="avatar w-2/5 px-10 pt-10" title="修改头像">
        <a-upload
          v-model:file-list="fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="api/user/avatarUpload"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img :src="avatar" alt="" class="avatar-img" />
        </a-upload>
      </div>
      <div>
        <button class="title mt-10 rounded-md p-2">hello</button><br />
        <span class="title-name">i am {{ name }}</span>
        <div class="mt-10">
          <ul v-for="(value, key) in data" :key="key">
            <li class="flex justify-start space-x-5" v-if="key !== 'introduction'">
              <h2>{{ key }}</h2>
              <span>{{ value }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="h-14 w-full bg-gray-600 bottom-0 fixed flex justify-center items-center space-x-10"
      >
        <img
          src="https://uploads-ssl.webflow.com/5b6c49393d9b8434816f33f3/5b6d81519e9b6fd1303b7a93_facebook-letter-logo.svg"
          width="20"
          class="image"
        />
        <img
          src="https://uploads-ssl.webflow.com/5b6c49393d9b8434816f33f3/5b6d81513d9b846e05705c38_twitter-logo.svg"
          width="22"
          class="image-2"
        />
      </div>
    </div>

    <img class="bg-top h-1/4 w-full" :src="bg_img" />

    <button class="download border rounded-md border-gray-600 px-6 py-4">DOWNLOAD RESUME</button>
    <div class="w-full flex justify-center items-center">
      <div class="self-introduction w-1/2 text-center">
        {{ data.introduction }}
      </div>
    </div>

    <div class="bg-buttom absolute h-1/4 bottom-0 text-center w-full">
      <h1 class="footer_title">My Technology Stack</h1>
      <div class="footer_container w-2/3 h-3/4 bg-white flex justify-around items-end">
        <div class="tech_first">
          <img
            src="https://uploads-ssl.webflow.com/5b6c49393d9b8434816f33f3/5b6d8cd11ea16a69da81eff3_graphic-design.svg"
            width="50"
          />
        </div>
        <div class="tech_second">
          <img
            src="https://uploads-ssl.webflow.com/5b6c49393d9b8434816f33f3/5b6d8cd1b3323e7bcd00d063_web-design.svg"
            width="50"
          />
        </div>
        <div class="tech_third">
          <img
            src="https://uploads-ssl.webflow.com/5b6c49393d9b8434816f33f3/5b6d8ccf9e9b6f7f863b8244_wordpress.svg"
            width="50"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
  Verdana, sans-serif;

.profile-page {
  height: 70vw;
}
.bg-top {
  background-size: cover;
  background-position: center center;
}
.profile-card {
  z-index: 10;
  height: 25vw;
  width: 50vw;
  top: 10%;
  left: 50%;
  transform: translateX(-25vw);
  box-shadow: 0px 0px 8px 3px #6a7693;
}
.avatar-img {
  margin: 0 auto;
  height: 80%;
  cursor: pointer;
}

.title {
  font-size: large;
  border: burlywood solid 1px;
}
.title-name {
  font-size: xxx-large;
  font-family: @font-family;
}

.download {
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;
  top: 30%;
  left: 50%;
  opacity: 0.7;
  transform: translate(-50%, -100%);
  font-family: @font-family;
}

.self-introduction {
  position: relative;
  font-family: @font-family;
  font-size: large;
  bottom: -30rem;
}
.footer_title {
  font-size: 2rem;
  font-family: @font-family;
}
.footer_container {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}

.tech_first,
.tech_second,
.tech_third {
  height: 90%;
  width: 20%;
  padding: 1rem;
}
.bg-buttom {
  box-shadow: 0px 0px 8px 3px #6a7693;
}
</style>
