      
      
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').onsubmit = function () {
          const name = document.querySelector('#name').value;
          alert(`Hola ${name}`);
          //document.querySelector('#saludo').innerHTML = `Hola ${name}`;
    };
});