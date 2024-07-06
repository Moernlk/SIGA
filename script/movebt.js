        //ATIVADOR POR CLICK
        var isDown = false;

        // POSIÇÃO DO CLICK
        var position = [];

        // POSIÇÃO DO MOUSE
        var mousePosition;

        //DETECTA QUAL BOTÃOFOI MOVIDO
        var loc;

        const agenda = document.getElementById("area-btn-agenda");
        const agdr = document.getElementById("btn-agenda");

        const progresso = document.getElementById("area-btn-progresso");
        const prog = document.getElementById("btn-progresso");

        const recurso = document.getElementById("area-btn-recursos");
        const recr = document.getElementById("btn-recursos");

        // DETECTOR DOS DIVS
        agdr.addEventListener(
          "mousedown",
          function (e) {
            isDown = true;
            position = [
              agenda.offsetLeft - e.clientX,
              agenda.offsetTop - e.clientY,
            ];
            loc = 1;
          },
          true
        );
        recr.addEventListener(
          "mousedown",
          function (e) {
            isDown = true;
            position = [
              recurso.offsetLeft - e.clientX,
              recurso.offsetTop - e.clientY,
            ];
            loc = 3;
          },
          true
        );
        prog.addEventListener(
          "mousedown",
          function (e) {
            isDown = true;
            position = [
              progresso.offsetLeft - e.clientX,
              progresso.offsetTop - e.clientY,
            ];
            loc = 2;
          },
          true
        );
          // MOVIMENTO DO MOUSE
        document.addEventListener(
          "mousemove",
          function (e) {
            e.preventDefault();
            if (isDown) {
              mousePosition = {
                x: e.clientX,
                y: e.clientY,
              };
              // OBRIGA A ESTAR DENTRO DA TELA
              if (
                window.innerWidth > mousePosition.x == true &&
                mousePosition.x >= 0 == true
              ) {
                if (loc == 1) {
                  agenda.style.left = mousePosition.x + position[0] + "px";
                  agenda.style.top = mousePosition.y + position[1] + "px";
                }
                if (loc == 2) {
                  progresso.style.left = mousePosition.x + position[0] + "px";
                  progresso.style.top = mousePosition.y + position[1] + "px";
                }
                if (loc == 3) {
                  recurso.style.left = mousePosition.x + position[0] + "px";
                  recurso.style.top = mousePosition.y + position[1] + "px";
                }
              } else {
                isDown = false;
              }
            }
            /*           
            $(document).mouseout(function () {
              isDown = false;
            });
*/
          },
          true
        );
          // DETECTOR DA PARADA
        document.addEventListener(
          "mouseup",
          function () {
            isDown = false;
            loc = 0;
            //Jquery
          },
          true
        );



        /*const cl = document.getElementById("calendario");
        const agd = document.getElementById("btn-agenda");
        cl.style.opacity = "0";
        agd.addEventListener("click", function () {
          if (cl.style.opacity == "100") {
            cl.style.opacity = "0";
            agd.style.backgroundColor = "#a0ff97d2";
          } 
          else 
          {
       
            cl.style.opacity = "100";
            agd.style.backgroundColor = "whitesmoke";
         
          }
        });*/