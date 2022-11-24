

// Don't judge me, I threw this together in like 10 minutes, ok
// Probably needs to be run through babel to run on my iPod Touch
setInterval(function () {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();

  document.querySelectorAll('.time')[0].innerText = (hours > 12 ? hours - 12 : hours) + ':' + ((minutes < 10 ? '0' : '') + minutes);

  var classList = document.body.className = ((hours < 6 || hours > 17) ? 'night' : 'day');
}, 1000);
