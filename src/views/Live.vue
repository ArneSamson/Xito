<template>
  <div class="camerasaved">
    <div class="camera">
      <span class="cam">Camera</span>
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
    </div>

  <div class="saved">
      <!-- display saved images -->
      <h2>Saved Images</h2>
      <ul>
        <li v-for="image in savedImages" :key="image.id">
          <img :src="image.url" :alt="image.fileName" width="100" height="100">
          <span> {{ image.highestLabel }} </span>
          <span> {{ image.highestConfidence.toFixed(2) }}% </span>
          <span> {{ new Date(image.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} </span>
          <span> {{ new Date(image.timestamp).toLocaleDateString() }} </span>
          <span> {{ image.row }} </span>
          <span> {{ image.block }} </span>
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

      const row = parseInt(window.prompt("Enter Row Number:"));
      const block = parseInt(window.prompt("Enter Block Number:"));

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
          ${results[0].label} : ${(results[0].confidence * 100).toFixed(2)}% 
          <br> ${results[1].label} : ${(results[1].confidence * 100).toFixed(2)}%
          <br> ${results[2].label} : ${(results[2].confidence * 100).toFixed(2)}%
          <br> ${results[3].label} : ${(results[3].confidence * 100).toFixed(2)}%
          <br> ${results[4].label} : ${(results[4].confidence * 100).toFixed(2)}%
        `;

      // Save the image locally
      const fileName = `image_${Date.now()}.jpeg`;
      saveImageLocally(imageData, fileName, results, row, block);

      });
    }

    const saveImageLocally = (imageData, fileName, results, row, block) => {

      const highestConfidence = results[0].confidence * 100;
      const highestLabel = results[0].label;
      const timestamp = new Date();

      // Save the image in local storage
      const savedImage = {
        id: Date.now(),
        fileName: fileName,
        url: imageData,
        highestConfidence: highestConfidence,
        highestLabel: highestLabel,
        timestamp: timestamp,
        row: row,
        block: block
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

<style scoped>

  .camerasaved {
    display: flex;
    flex-direction: row;
    justify-content:center;
    margin: 10 auto;    
  }
  .camera {
    display: flex;
    flex-direction: column;
    background-color: #F1E9E9;
    border-radius: 20px;
    padding: 20px;
    margin-top: 20px;
  }
  .cam {
    font-family: "Proxima Soft SemiBold";
    font-size: 1.875rem;
    color: #000000;
    margin-bottom: 10px;
  }
  #button {
    background-color: #A8D160;
    border-radius: 20px;
    border: none;
    color: #1B1818;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 0.625rem;
  }
  #message {
    font-family: "Poppins Light";
    font-size: 0.875rem;
    color: #1B1818;
    margin-top: 10px;
  }
  #myCanvas {
    width: 300px;
  }

  .saved {
    margin-left: 20px;
    flex-direction: column;
    background-color: #F1E9E9;
    border-radius: 20px;
    padding: 20px;
    padding-top: 0px;
    margin-top: 20px;
  }

  .saved h2 {
    font-family: "Proxima Soft SemiBold";
    font-size: 1.875rem;
    color: #000000;
    margin-bottom: 10px;
  }

  .saved ul {
    list-style-type: none;
    padding: 0;
  }  

  .saved li {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    font-family: "Poppins Light";
    font-size: 0.875rem;
    color: #1B1818;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #87B4E0;
    border-radius: 20px;
    padding: 10px;

  }

  .saved li img {
    margin-right: 10px;
    border-radius: 20px;
  }

</style>