<template>
    <div>
      <!-- add code for displaying the image here -->
      <div> 
      <!-- button that selects which image to pick to check-->
      <form action="#">
        <label for="lang">Select an image.</label>
        <select name="languages" id="imgNumber">
          <option value="1">  1  </option>
          <option value="2">  2  </option>
          <option value="3">  3  </option>
        </select>
      </form>

    </div>

    <div>
      <button type="button" id="button">Check Image</button>
    </div>

    <div>
      <img id="img">
    </div>

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
    // Provides the access to upload image
    const img = document.querySelector("#img");
    // Contains the uploaded image
    const imgNumber = document.querySelector("#imgNumber");
    //a button that lets users choose a set image based on the number and image name


    checkButton.addEventListener("click", event => loadFile(event));
    img.addEventListener("load", () => userImageUploaded());

    // Initialize the Image Classifier method with Xito model
    const classifier = ml5.imageClassifier('../../public/model/model.json', modelLoaded);

    function loadFile(event) {
        img.src = "../src/assets/tomato-images/"+ imgNumber.value + ".jpg"
        console.log(imgNumber.value);
        console.log("Image uploaded!");
    }

    function userImageUploaded() {
        message.innerHTML = "Image was loaded!"

        classifier.classify(img, (err, results) => {
            console.log(results);
            message.innerHTML = `
            ${results[0].label} : ${results[0].confidence * 100}% 
            <br> ${results[1].label} : ${results[1].confidence * 100}%
            <br> ${results[2].label} : ${results[2].confidence * 100}%
            <br> ${results[3].label} : ${results[3].confidence * 100}%
            <br> ${results[4].label} : ${results[4].confidence * 100}%
            `
        });
    }

    // When the model is loaded
    function modelLoaded() {
        message.innerHTML = "Please upload an image of a tomato plant!"
        console.log('Model Loaded!');
    }

        }
    }
  </script>
  