function uploadFile(file) {
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", (event) => {
    if (event.lengthComputable) {
      const percentComplete = Math.floor((event.loaded / event.total) * 100);
      console.log(`Upload progress: ${percentComplete}%`);
      // Update your progress bar UI here
      const progress = document.getElementById("progress");
      progress.value = percentComplete;
    }
  });

  console.info("change");

  xhr.addEventListener("load", () => {
    console.log("Upload complete");
    // Hide or reset your progress bar UI here
  });

  xhr.addEventListener("error", () => {
    console.error("Upload failed");
    // Handle upload failure here
  });

  xhr.open("POST", "https://httpbin.org/anything", true);
  xhr.send(file);
}

// Example usage
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    uploadFile(file);
  }
});
