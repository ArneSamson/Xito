<template>
<div>
    <div>
      Teachable Machine Image Model
    </div>
    <button type="button" @click="init">Start</button>
    <div ref="webcamContainer"></div>
    <div ref="labelContainer"></div>
  </div>

</template>

<script>
import * as ml5 from 'ml5';

export default {
  data() {
    return {
      message: "Please wait...loading model...",
      classifier: null,
      video: null,
    };
  },
  mounted() {
    // add code for loading the model and making predictions here
    // this.classifier = ml5.imageClassifier('../../public/model/model.json', this.modelLoaded);
    
    // Load the image model and setup the webcam
    async function init() {
      const URL = "../../public/model/";
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true;
      webcam = new tmImage.Webcam(200, 200, flip);
      await webcam.setup();
      await webcam.play();
      this.loop();
      this.$nextTick(() => {
        this.$refs.webcamContainer.appendChild(webcam.canvas);
        labelContainer = this.$refs.labelContainer;
        for (let i = 0; i < maxPredictions; i++) {
          labelContainer.appendChild(document.createElement("div"));
        }
      });
    }

    async function loop() {
      webcam.update();
      await predict();
      this.$nextTick(this.loop);
    }
    
    async function predict() {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
          prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
      }
    }


    // Bind the functions to the Vue component instance
    this.init = init.bind(this);
    this.loop = loop.bind(this);
    this.predict = predict.bind(this);
  },

  // methods: {
  //   modelLoaded() {
  //     this.message = "Please allow access to your webcam!";
  //     console.log('Model Loaded!');
  //   },
  //   checkFrame() {
  //     this.video = document.querySelector("#video");
  //     if (!this.video) {
  //       console.error("Video element not found.");
  //       return;
  //     }

  //     const canvas = document.createElement("canvas");
  //     canvas.width = this.video.videoWidth;
  //     canvas.height = this.video.videoHeight;
  //     const context = canvas.getContext("2d");
  //     context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
  //     const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  //     // this.classifier.classify(imageData, this.handleClassification);

  //     this.classifier.classify(imageData, (err, results) => {
  //           console.log(results);
  //           message.innerHTML = `
  //           ${results[0].label} : ${results[0].confidence * 100}% 
  //           <br> ${results[1].label} : ${results[1].confidence * 100}%
  //           <br> ${results[2].label} : ${results[2].confidence * 100}%
  //           <br> ${results[3].label} : ${results[3].confidence * 100}%
  //           <br> ${results[4].label} : ${results[4].confidence * 100}%
  //           `
  //       });
  //   },
  //   handleClassification(error, results) {
  //     if (error) {
  //       console.error(error);
  //       this.message = "Error occurred during classification.";
  //       return;
  //     }

  //     const threshold = 0.7; // Confidence threshold for saving frames
  //     const classesToSave = ["virus", "ripe", "unripe", "unpollinated", "side shoots"];

  //     for (const result of results) {
  //       if (classesToSave.includes(result.label) && result.confidence >= threshold) {
  //         this.saveFrameLocally();
  //         break;
  //       }
  //     }

  //     this.message = "Frame checked.";
  //   },
  //   saveFrameLocally() {
  //     // Add code to save the frame locally here
  //     // This can involve converting the frame to an image or any other desired format
  //   },
  // },
};
</script>
