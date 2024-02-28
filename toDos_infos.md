# video link: https://www.youtube.com/watch?v=YK1Sw_hnm58

# TODOs:
  # !!!!!SOLVED!!!!! solve issues with WebGL2:
  =  USE THE OLDER VERSION  0.126.1
    DO NOT USE THE 0.161.0
  - update drivers
  - enable varsion 2.0
  - version is OK

  - [ON CHROME: ] chrome://flags/
  - https://discourse.threejs.org/t/webgl-supported-browsers-and-troubleshooting/3818
  - https://www.soft8soft.com/webgl-supported-browsers-and-troubleshooting/
  - https://get.webgl.org/webgl2/enable.html

  https://www.youtube.com/watch?v=q0-Ap9W9IRU  how to update intel hd 3000 to 4000 on win10

  - latest drivers [2021] for intel hd 4000:
  https://community.intel.com/t5/Graphics/Intel-HD-4000-and-WDDM-2-0/m-p/1294208#:~:text=The%20latest%20driver%20package%20for,should%20try%20installing%20this%20package.




    ///////////////////////////////////////////////


# INFOS -
    per installare three.js copia quello che fa lui
    serve un altro tutorial altrimenti.

    per vite js usa powershell. usa cd per spostarti da Users alla cartella di questo progetto e, sempre dentro powershell, usa il comando npm init ...vite etc
    cosi' in sostanza crei un server di vite nel tuo progetto.
    perche' powershell?? boh
    powershell e; una merda usa git bash e va bene

    $ npm create vite@latest
    Need to install the following packages:
    create-vite@5.2.1
    Ok to proceed? (y) y
    √ Project name: ... three.js_tutorial_vite
    √ Select a framework: » Vanilla
    √ Select a variant: » JavaScript

    Scaffolding project in C:\Users\user\chrisCourses\threeJs\three.js_tutorial_vite...

    Done. Now run:

  cd three.js_tutorial_vite
  npm install
  npm run dev

  /////

  quest ocomando ha appena creato una nuova cartella dal nome `three.js etc etc` nel mio project folder
  contiene un public  e .gitignore e un beh di roba
  

    LAVORA SU QUESTA NUOVA FOLDER MA NON CANCELLARE QUELLA CREATA INIZIALMENTE: threejs

# npm run dev / Local:   http://localhost:5173/
  apri il server provided da vite.js


  - copia in main.js di vite il contenuto per      importare three.js che hai scritto in index.js

  - installation of three.js using vite is complete

  ///////////////////
# step_by_step

  2. create a scene, a camera, a render;

  3. create a plane;

  4. modify to taste with dat.gui;

  5. add hover effect;

  6. add HTML, integrate with JS;

