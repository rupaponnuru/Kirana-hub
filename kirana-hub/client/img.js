function register()
{
  var imgElem = document.getElementById('image').value;
  var imgData = JSON.stringify(getBase64Image(imgElem));
  $.ajax({
  url: 'http://localhost:3000/collectionapi/user_details',
  dataType: 'json',
  data: imgData,
  type: 'POST',
  success: function(data) {
    console.log(data);
    }
  });
}

function getBase64Image(imgElem) {
// imgElem must be on the same server otherwise a cross-origin error will be thrown "SECURITY_ERR: DOM Exception 18"
    var canvas = document.createElement("canvas");
    canvas.width = imgElem.clientWidth;
    canvas.height = imgElem.clientHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgElem, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
