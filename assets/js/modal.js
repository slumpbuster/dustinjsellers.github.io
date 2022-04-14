const modalImgDisplay = (imgSrc, imgAlt) => {
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById("imgModal");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = imgSrc;
  captionText.innerHTML = imgAlt;

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }
}
