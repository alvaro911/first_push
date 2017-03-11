$(document).ready(()=>{
  var url='https://api.nasa.gov/planetary/apod?api_key=rpnAqjU2awM50g0GKlKQSnkJf2JDS7OaI3xBepUA';
  $.ajax({
    url:url,
    success:(res)=>{
      console.log(res);
    }
  });
})
