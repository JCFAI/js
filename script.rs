      let counter = 0;
      function count() {
        counter++;
        const heading = document.querySelector("h1");
        heading.innerHTML = counter;

        if (counter % 10 == 0) {
          document.querySelector(
            "#tenths"
          ).innerHTML = `La cuenta llego a ${counter}`;
        }
      }
      document.addEventListener("DOMContentLoaded", function () {
        //document.querySelector("button").onclick = count;
        document.querySelector("button").addEventListener("click", count);
      });
