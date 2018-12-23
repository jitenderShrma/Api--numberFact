// accuire number input
let number = document.querySelector('input[type="number"]');
let result = document.getElementById('result');
number.addEventListener('input', function () {
  if (number.value != '') {
    // fetch ajax method
    fetch('http://numbersapi.com/' + number.value + '/math')
      .then(res => res.text())
      .then(numFact => {
        if (numFact != '') {
          result.textContent = numFact;
        }
      })
      .catch(error => console.log(error));
  } else {
    result.textContent = '';
  }
});
