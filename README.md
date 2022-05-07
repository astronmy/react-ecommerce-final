# Tienda de Tecnología

Proyecto Final para el curso de ReactJS dictado por Coderhouse (2022). La presenta SPA permite conectarse con un backend realizdo con Firebas, seleccionar productos, navegar a sus detalles, agregarlos al carrito, poder acceder a él y  simular la compra de los productos. Al clickear sobre el botón **"Finalizar compra"**, pide llenar un formulario con datos básicos y luego de confirmar se genera un id de orden para el usuario y en firebase se guarda la orden con los productos que compró.


## Tecnologías y librerías:

- Interfaz realizada con ReactJS - Create React App
- Estilos con Bootstrap
- Ruteo con React Router Dom
- Backend con Firebase

## Estructura del proyecto
![image](https://user-images.githubusercontent.com/3026139/167240732-f6f591c7-a700-4b6a-b5e3-d812b66e4486.png)

## Descargar y correr el proyecto:

### `npm install`

## Configurando variables de entorno
Dentro de la raiz del proyecto encontraran un archivo .env.production con las siguientes variables

```
REACT_APP_FIREBASE_API_KEY=""
REACT_APP_FIREBASE_DOMAIN=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_BUCKET=""
REACT_APP_FIREBASE_MESSAGING_ID=""
REACT_APP_FIREBASE_APP_ID=""

```
Cada una de estas variables representa un parámetro de configuración de Firebase. Ya que como se menciono anteriormente el proyecto utiliza firebase como backend.
Por un tiempo limitado dentro del proyecto encontrará la configuración a una coleccion en Firebase que se posee info para poder interactuar con la SPA. La cuál se encontrará vigente hasta el 22 de Mayo del 2022. Pasado este tiempo deberá crear su propia colección y configurarla con el proyecto.

## Corriendo el proyecto

Una vez configurado el archivo .env.production deberá ejecutar el siguiente comando 

### `npm run start:prod`

Este comando se encargara de ejecutar el proyecto de manera local tomando como configuración lo definido en el archivo antes mencionado.
Se abrirá una pestaña en su navegador principal apuntado al puerto 3000.

Si esto no funciona copiar la siguiente URL y pegarla en la barra de navegación de su navegador
`http://localhost:3000`

Si quisiera optar por un entorno de desarrollo y otro de produccion que apunten a diferentes proyectos de firebase podra hacerlo definiendo un archivo con la misma estructura que **.env.production** pero con el nombre **.env.development**. Cada uno con su respectiva configuración.

Para correr el servidor en entorno desarrollo ejecutar el siguiente comando

### `npm run start:staging`

## Backend:
El backend fue realizado en Firebase, actualmente se encuentra desplegado en un firestore que expirará el 22 de Mayo del 2022.

## Screenshots

![image](https://user-images.githubusercontent.com/3026139/167241156-95a0acc7-1e1b-4159-aded-b86575407faa.png)
![image](https://user-images.githubusercontent.com/3026139/167241172-6ccd9029-2aa3-4afd-a542-60351513a19a.png)
![image](https://user-images.githubusercontent.com/3026139/167241194-319f9671-6557-4a37-8508-21c404253a8f.png)
![image](https://user-images.githubusercontent.com/3026139/167241205-daf07e60-0deb-42c5-8a4b-3b931d431b10.png)
![image](https://user-images.githubusercontent.com/3026139/167241213-3d48e2d9-4400-4905-8a2c-a03eab1742ff.png)
![image](https://user-images.githubusercontent.com/3026139/167241245-2ea9976e-55a7-4086-8377-0460b673a5c6.png)
![image](https://user-images.githubusercontent.com/3026139/167241266-4a29f7bb-ead0-48ad-8bbb-807d87eca2d1.png)
![image](https://user-images.githubusercontent.com/3026139/167241270-84d12aa0-81d8-48bf-a821-f556f300247c.png)

## Proba la Tienda Online
Podes probar la tienda accediendo al siguiente link
`https://tiendacoder.renzovinci.com.ar/`

[Ver versión online](https://tiendacoder.renzovinci.com.ar/)




