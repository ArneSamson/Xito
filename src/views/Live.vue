<template>
  <div>
    <div>
      <!-- add code for displaying the video here -->
      <video ref="video" width="300" height="200" autoplay></video>
    </div>

    <div>
      <!-- button that checks the current frame of the video -->
      <button type="button" id="button" @click="checkFrame">Check Frame</button>
    </div>

    <canvas id="myCanvas" width="300" height="200"></canvas>

  
    <div id="message">{{ message }}</div>
  </div>
</template>

<script>
import * as ml5 from "ml5";

export default {
  data() {
    return {
      message: "Please wait...loading model...",
      video: null,
      classifier: null,
      isModelLoaded: false,
      predictions: null,
      identityImage: null,
      canvas: null,
      ctx: null,
    };
  },

  mounted() {
    this.video = this.$refs.video;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.video.srcObject = stream;
        this.video.play();
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    this.classifier = ml5.imageClassifier(
      "../../public/model/model.json",
      this.onModelLoaded
    );
  },

  methods: {
    onModelLoaded() {
      this.message = "Model loaded!";
      this.isModelLoaded = true;
      console.log("Model loaded!");
    },
    checkFrame() {
      this.canvas = document.getElementById("myCanvas"); // Add this line
      this.ctx = this.canvas.getContext('2d'); // Update this line

      this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height); // Update this line

      this.classifier.classify(this.canvas, (err, results) => {
            console.log(results);
            message.innerHTML = `
            ${results[0].label} : ${results[0].confidence * 100}% 
            <br> ${results[1].label} : ${results[1].confidence * 100}%
            <br> ${results[2].label} : ${results[2].confidence * 100}%
            <br> ${results[3].label} : ${results[3].confidence * 100}%
            <br> ${results[4].label} : ${results[4].confidence * 100}%
            `
        });
    },
  },
};
</script>
