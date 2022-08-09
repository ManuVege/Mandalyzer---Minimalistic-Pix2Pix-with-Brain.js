Mandalyzer - Minimalistic Pix2Pix with Brain.js
-----------------------------------------------

Presentation
------------
This project is just a small example, I think that this code has even more potential and that it would be possible to use it for simple Image and Sound filters, even though Brain.js may have limitations and not be convolutional, it is a good option for simple computers and small projects.

Mandalyzer works with only 64 Neurons, the Model weighs 4.3mb, it has a training set of 227 examples. It has been trained for 60,000 iterations and is capable of transforming 20x20 pixel BMP images.

It is an image colorizer with the style of Mandalas.

I have created the code on a Pentium Dual-Core with 2gb of Ram, the training has taken about 7 hours.


Intro
-----

This code is oriented to NodeJs, although it would be possible to implement it also in the browser.
Unfortunately I have not had enough time to create a comfortable interface, so it is necessary to use scripts to make the code work, I have written the scripts for both Linux and Windows.





Manual
------
The code has two modes: Train and Predict
If you are only interested in testing this model, you will only use Predict.
But if you try to create your own model, you will use Train.


predict
--------
It has a script, called "01-Predict"
which uses the file "./InputOutputFile/In.bmp" and creates "./InputOutputFile/Out.bmp"
This model is trained with 20x20 pixel BMPs weighing exactly 1338 bytes. With another measure, it could not work.
I have adapted the different images with ImageMagick and they work perfectly.




Train
------
It has two scripts, the first one is "01-Convert Training Set"
which creates a file called "FullTrainingSet.js", which contains all the examples found in "./TrainingSet/Inputs" and in "./TrainingSet/Outputs"

This script should be executed only if there are changes in the Training Set, and remember that it is important to know that the Inputs and the Outputs are integrated in alphabetical order, the first Input with the first Output, etc.
It is also important to remember that all files must weigh exactly the same, I have used "ImageMagick" to achieve this.
PD: Interesting results did not appear until the error approached 0.005.


The second script is "02-Train"
which creates after training a file called "network_state.json"
To configure the model in its training phase, you must modify the file "script_go.js"



========================================================================
Mandalyzer - Minimalistic Pix2Pix with Brain.js [En español]
========================================================================


Presentacion
------------
Este proyecto es solo un pequeno ejemplo, pienso que este codigo tiene aun mas potencial y que seria posible utilizarlo para filtros simples de Imagenes y Sonidos, aun que Brain.js pueda tener limitaciones y no ser convolucional, es un buena opcion para ordenadores simples y proyectos pequenos.

Mandalyzer funciona con solo 64 Neuronas, el Modelo pesa 4.3mb, cuenta con un training set de 227 ejemplos. Se ha entrenado durante 60.000 iteraciones y es capas de transformar imagenes BMP de 20x20 pixeles.

Se trata un colorador de imagenes con el estilo de Mandalas.

He creado el codigo en un Pentium Dual-Core con 2gb de Ram, el entrenamiento ha tomado unas 7 horas.


Intro
-----

Este codigo esta orientado a NodeJs, aun que seria posible implementarlo tambien en el browser.
Lamentablemente no he dispuesto de tiempo suficiente para crear una interfaz comoda, por lo que es necesario valerse de Scripts para hacer funcionar el codigo, he escrito los scripts tanto para Linux como para Windows.





Manual
------
El codigo cuenta con dos modalidades: Train and Predict
Si solo estas interesado en probar este modelo, solo usaras Predict.
Pero si intentas crear tu propio modelo, usaras Train.


Predict
--------
Cuenta con un script, llamado "01-Predict"
que utiliza el archivo "./InputOutputFile/In.bmp" y crea "./InputOutputFile/Out.bmp"
Este modelo esta entrenado con BMPs de 20x20 pixeles que pesan exactamente 1338 bytes. Con otra medida, no podria funcionar.
Las imagenes diferentes las he adaptado con ImageMagick y funcionan perfectamente.




Train
------
Cuenta con dos scripts, el primero es "01-Convert Training Set"
que crea un archivo llamado "FullTrainingSet.js", que contiene todos los ejemplo que se encuentren en "./TrainingSet/Inputs" y en "./TrainingSet/Outputs"
Este script deberia ser ejecutado solo si hay cambios en el Training Set, y recuerda que es importante saber que los Inputs y los Outputs se integran por orden alfabetico, El primer Input con el primer Output, etc.
Tambien es importante recordar, que todos los archivos deben pesar exactamente lo mismo, yo me he valido de "ImageMagick" para lograr esto.
PD: Los resultados interesantes no han aparecido hasta que el error se aproximo a 0.005.



El segudo script es "02-Train"
que crea luego del entrenamiento un archivo llamado "network_state.json"
Para configurar el modelo en su fase de entrenamiento, debes modificar el archivo "script_go.js"


