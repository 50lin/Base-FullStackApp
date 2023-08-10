# Nombre del Proyecto
BASE FULL STACK APP  

## Descripción

- Demo de una app Full Stack MERN basica con instrucciones de uso, pruebas, conexion a bd mongo en atlas y docker.
- Pasos para hacer esta app desde cero.

## Tecnologías Utilizadas

- Backend: Node.js, Express, MongoDB, Mongoose
- Frontend: React
- Pruebas: Jest, supertest
- Contenedores: Docker

## Instrucciones de Instalación

1. Crea una carpeta raíz para tu proyecto, por ejemplo, "Mi-Proyecto".

2. Crea dos carpetas dentro de la carpeta raíz llamadas **"server"** para el backend y **"client"** para el frontend.

3. Dentro de cada carpeta en la terminal, ejecuta **npm init** para crear el package.json correspondiente a cada una y agrega el tipo módulos entre las principales caracteristicas: **"type": "module"**

4. Para el backend, instala lo básico necesario:

   **cd server**
   **npm install express dotenv cors mongoose**

5. Instala **"nodemon"** en el backend para el modo desarrollo:

   **cd server**
   **npm install nodemon -D**   

6. Instala **"jest"** y **"supertest"** para el entorno de pruebas en modo desarrollo y modifica el archivo **package.json** del backend y agrega el siguiente script: **"test": "NODE_OPTIONS='--experimental-vm-modules' jest --coverage"**

   **cd server**
   **npm install jest -D**
   **npm install supertest -D**   

7. Para el frontend, instala lo necesario (elige uno de los modos):

  - Modo 1 (recomendado): Crea una aplicación React utilizando Create React App:

   **npx create-react-app client** 

  - Modo 2: Crea una aplicación React utilizando Vite con plantilla:

   **npx create-vite@latest my-react-app --template react**

  - Modo 3: Crea una aplicación React utilizando Vite sin plantilla:

   **npx create-vite@latest my-react-app**   

## Configuración de MongoDB Atlas

Para la base de datos usamos el servidor de bases de datos Atlas de MongoDB.
Pasos para configurar la base de datos en Atlas.
1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) si aún no tienes una.
2. Crea un nuevo clúster y sigue las instrucciones para configurar la base de datos.
3. Copia el URI de conexión proporcionado por MongoDB Atlas y reemplaza **tu_mongo_uri**, **tu_usuario_mongo** y **tu_contraseña_mongo** en el archivo **".env"** (variables de entorno).

## Configuración de Variables de Entorno

Crea un archivo de nombre **".env"** en la carpeta "server" y en la carpeta "raiz" con las siguientes variables de entorno:

Configuración de MongoDB Atlas

   **MONGO_URI=tu_mongo_uri**
   **MONGO_USER=tu_usuario_mongo**
   **MONGO_PASS=tu_contraseña_mongo**

Puerto del servidor backend

   **PORT=5000**

Reemplaza **tu_mongo_uri**, **tu_usuario_mongo** y **tu_contraseña_mongo** con los valores correspondientes que obtuviste de MongoDB Atlas.

## Ejecución

1. Ejecuta el servidor backend:

   **cd server**
   **nodemon index.js**

El servidor estará disponible en http://localhost:5000.

2. Ejecuta el servidor frontend:

   **cd client**
   **npm start**

El frontend estará disponible en http://localhost:3000.

## Pruebas

Para ejecutar las pruebas del backend, en la carpeta "server", debemos crear una carpeta de nombre **test** y dentro de ella creamos otra carpeta de nombre **"index"**, ya que ahi estaran las pruebas al index, dentro de esa carpeta, creamos un archivo llamado **"index.test.js"** donde estara el codigo de las pruebas correspondientes.

Para ejecutar las pruebas, hacemos lo siguiente:
   
   **cd server**
   **npm test**

## Docker (Opcional)

Para ejecutar la aplicación utilizando contenedores Docker:
Asegúrate de tener instalado docker y docker compose en modo global.

   **sudo snap install docker**
   **sudo apt install docker-compose**
   
Crea un archivo para el front end y el backend de nombre **Dockerfile** y en el directorio raíz del proyecto, uno llamado **docker-compose.yml** y configura de manera correcta, verificando bien las rutas de la app.

Finalmente para crear la imagen y poner el servidor en marcha, ejecutar:

   **docker-compose up --build** (para primera vez o luego que se hagan cambios en el codigo)
   **docker-compose up --build** (solo para poner el marcha sin crear imagen nueva)
   **docker-compose down** (para apagar el servidor)

El backend se ejecutará en http://localhost:5000 y el frontend en http://localhost:3000.

Recuerda que esta es una opción opcional para ejecutar la aplicación utilizando contenedores Docker. También puedes ejecutar la aplicación sin esta configuración, como se describe en los mas arriba.

## ESlint (Opcional) 

Instala **"eslint"** para el backend y el frontend en modo desarrollo y la configuracion **standard** para identificar y corregir errores, mantener un estilo de código consistente y mejorar la calidad del código en proyectos JavaScript. Se puede instalar para los proyectos de forma individual o de modo global.

   **npm install eslint -D**
   **npm install standard --global**
   **npm init @eslint/config**

Instalar la extension de visual studio code **Error Lens** para que se muestren los errores en la misma linea del error.







