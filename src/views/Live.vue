<template>
  <div>
    <!-- add code for displaying the video here -->
    <div>
      <video id="video" width="300" height="200" autoplay></video>
    </div>

    <!-- button that checks the current frame of the video -->
    <div>
      <button type="button" id="button">Check Frame</button>
    </div>

    <!-- display the result of the classification -->
    <div id="message">Please wait...loading model...</div>
  </div>
</template>

<script>
import * as ml5 from 'ml5';

export default {
  mounted() {
    // add code for loading the model and making predictions here
    const message = document.querySelector("#message");
    // Controls the message showing on the screen
    const checkButton = document.querySelector("#button");
    // Button to check the current frame of the video
    const video = document.querySelector("#video");
    // Contains the webcam feed

    // Initialize the Image Classifier method with Xito model
    const classifier = ml5.imageClassifier('../../public/model/model.json', modelLoaded);

    function modelLoaded() {
      message.innerHTML = "Please allow access to your webcam!"
      console.log('Model Loaded!');
    }

    checkButton.addEventListener("click", event => {
      classifier.classify((err, results) => {
        console.log(results);
        message.innerHTML = `
          ${results[0].label} : ${results[0].confidence * 100}% 
          <br> ${results[1].label} : ${results[1].confidence * 100}%
          <br> ${results[2].label} : ${results[2].confidence * 100}%
          <br> ${results[3].label} : ${results[3].confidence * 100}%
          <br> ${results[4].label} : ${results[4].confidence * 100}%
        `;

        if (results[0].confidence > 0.7) {
          // save the current frame of the video
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0);
          const dataURL = canvas.toDataURL();
          console.log(dataURL);
        }
      });
    });

    // get access to the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
        message.innerHTML = "Please click the button to check the current frame of the video.";
      })
      .catch(err => {
        message.innerHTML = "Could not access webcam!";
        console.error(err);
      });
  }
};
</script>