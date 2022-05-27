<script setup lang="ts">
import { useProfile } from "@/stores/profile";
import { onMounted, ref } from "vue";
import { localCache } from "@/utils/Cache";

// 引入antd的组件
import { message } from "ant-design-vue";
import type { UploadChangeParam, UploadProps } from "ant-design-vue";
import axios from "axios";

const profileStore = useProfile();
onMounted(() => {
  profileStore.queryProfile();
});

const data = profileStore.$state;

// 数据持久化处理
const name = localCache.getCache("user_name");
const bg_img = localCache.getCache("bg_img");
let avatar = ref(localCache.getCache("avatar"));

// 照片上传列表
let fileList = ref([]);
// 图片上传状态，用来制作加载动画等效果。
const loading = ref<boolean>(false);
const imageUrl = ref<string>("");

// 上传之前的预处理
const beforeUpload = (file: UploadProps["fileList"][number]) => {
  // const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  // if (!isJpgOrPng) {
  //   message.error("You can only upload JPG file!");
  // }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isLt2M;
};

// 获取图片的base64编码数据
// function getBase64(img: Blob, callback: (base64Url: string) => void) {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result as string));
//   reader.readAsDataURL(img);
// }

// 上传过程变化对应执行的函数
const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === "done") {
    message.success("success!");
  }
  if (info.file.status === "error") {
    message.error("error!");
  }
};

// 上传图片处理逻辑
const handleRequest = async (data: any) => {
  const formData = new FormData();
  formData.append("file", data.file);
  const result = await axios.post("/api/user/avatarUpload", formData);

  const imgSrc = result.data.path;
  localCache.setCache("avatar", imgSrc);
  avatar = imgSrc;
};
</script>

<template>
  <div class="profile-page relative">
    <div class="profile-card bg-white absolute flex animate__animated animate__zoomIn">
      <div class="avatar w-2/5 px-10 pt-10" title="修改头像">
        <a-upload
          v-model:file-list="fileList"
          name="file"
          class="avatar-uploader"
          :show-upload-list="false"
          @change="handleChange"
          :before-upload="beforeUpload"
          :customRequest="handleRequest"
          accept="image/*"
        >
          <img :src="avatar" alt="" class="avatar-img" />
        </a-upload>
      </div>
      <div>
        <button class="title mt-10 rounded-md p-2">hello</button><br />
        <span class="title-name">i am {{ name }}</span>
        <div class="mt-3">
          <ul class="info-list-p" v-for="(value, key) in data" :key="key">
            <li class="info-list flex space-x-5" v-if="key !== 'introduction'">
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
  font-size: 1vw;
  border: burlywood solid 1px;
}
.title-name {
  font-size: 2vw;
  font-family: @font-family;
}
.info-list-p {
  height: 2vh;
  .info-list {
    font-size: 1vw;
  }
}

.download {
  font-size: 1.2vw;
  font-weight: 700;
  position: relative;
  top: 30%;
  left: 50%;
  opacity: 0.7;
  transform: translate(-50%, -100%);
  font-family: @font-family;
}

.self-introduction {
  position: absolute;
  font-family: @font-family;
  font-size: 1vw;
  top: 58%;
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
