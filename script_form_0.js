      
      
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').onsubmit = function () {
          const name = document.querySelector('#name').value;
          
          document.querySelector('#saludo').innerHTML = `Hola ${name}`;
          alert(`Hola ${name}`);
    };
});