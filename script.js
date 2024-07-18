document.addEventListener('DOMContentLoaded', function () {
  const contentDiv = document.getElementById('contentDiv')
  const icon1 = document.getElementById('icon1')
  const icon2 = document.getElementById('icon2')

  let contentIndex = 0
  const contentArray = [
    'Free shipping on orders over 250 USD',
    'Carbon neutral shipping on all orders.'
  ]

  function changeContent (newContent) {
    contentDiv.classList.remove('fade-in')
    contentDiv.classList.add('fade-out')

    setTimeout(() => {
      contentDiv.textContent = newContent
      contentDiv.classList.remove('fade-out')
      contentDiv.classList.add('fade-in')
    }, 500) // Match this timing with the CSS transition duration
  }

  icon1.addEventListener('click', () => changeContent('Free shipping on orders over 250 USD'))
  icon2.addEventListener('click', () => changeContent('Carbon neutral shipping on all orders.'))

  setInterval(() => {
    contentIndex = (contentIndex + 1) % contentArray.length
    changeContent(contentArray[contentIndex])
  }, 4000) // Change content every 3 seconds

  var countdownTime = 6 * 60 * 60; // 6 hours in seconds

  var timer = setInterval(function() {
      countdownTime--;

      // Calculate hours, minutes, and seconds
      var hours = Math.floor(countdownTime / 3600);
      var minutes = Math.floor((countdownTime % 3600) / 60);
      var seconds = countdownTime % 60;

      // Update the HTML with the new values
      document.getElementById('hours').textContent = formatTime(hours);
      document.getElementById('minutes').textContent = formatTime(minutes);
      document.getElementById('seconds').textContent = formatTime(seconds);

      // Check if the countdown is finished
      if (countdownTime <= 0) {
          clearInterval(timer);
          alert('Sale has ended!');
      }
  }, 1000); // Update every second

  // Function to format time to always show two digits
  function formatTime(time) {
      return time < 10 ? `0${time}` : time;
  }
})
