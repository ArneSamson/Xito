<template>
  <div>
    <div>
      <!-- add code for displaying the video here -->
      <video ref="video" width="300" height="200" controls autoplay></video>
    </div>

    <div>
      <!-- button that checks the current frame of the video -->
      <button type="button" id="button" @click="checkFrame">Check Frame</button>
    </div>

    <canvas id="myCanvas" width="300" height="200"></canvas>

    <div id="message">{{ message }}</div>

    <div>
      <!-- display saved images -->
      <h2>Saved Images</h2>
      <ul>
        <li v-for="image in savedImages" :key="image.id">
          <img :src="image.url" :alt="image.fileName" width="100" height="100">
          <span>{{ image.highestLabel }}</span>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import * as ml5 from 'ml5';
// import axios from 'axios';

export default {

  data() {
    return {
      savedImages: [] // array of saved images
    };
  },
  mounted() {
    const message = document.querySelector("#message");
    const checkButton = document.querySelector("#button");
    const video = this.$refs.video;

    // Retrieve saved images from local storage
    const savedImages = localStorage.getItem("savedImages");
    if (savedImages) {
      this.savedImages = JSON.parse(savedImages);
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    checkButton.addEventListener("click", () => userImageUploaded());

    const classifier = ml5.imageClassifier('../../public/model/model.json', modelLoaded);

    function userImageUploaded() {
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/jpeg", 0.75);

      const image = new Image();
      image.src = imageData;
      message.innerHTML = "Image was loaded!"

      classifier.classify(image, (err, results) => {
        console.log(results);
        message.innerHTML = `
          ${results[0].label} : ${results[0].confidence * 100}% 
          <br> ${results[1].label} : ${results[1].confidence * 100}%
          <br> ${results[2].label} : ${results[2].confidence * 100}%
          <br> ${results[3].label} : ${results[3].confidence * 100}%
          <br> ${results[4].label} : ${results[4].confidence * 100}%
        `;

        // Save the image locally
        const fileName = `image_${Date.now()}.jpeg`;
        saveImageLocally(imageData, fileName, results);

      });
    }

    const saveImageLocally = (imageData, fileName, results) => {

      const highestConfidence = results[0].confidence * 100;
      const highestLabel = results[0].label;

      // Save the image in local storage
      const savedImage = {
        id: Date.now(),
        fileName: fileName,
        url: imageData,
        highestConfidence: highestConfidence,
        highestLabel: highestLabel,
      };
      this.savedImages.push(savedImage);

      localStorage.setItem("savedImages", JSON.stringify(this.savedImages));
    }

    function modelLoaded() {
      message.innerHTML = "Model Loaded";
      console.log('Model Loaded!');
    }
  }
}
</script>
