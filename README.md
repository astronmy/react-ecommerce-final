# Tienda de Tecnología

Proyecto Final para el curso de ReactJS dictado por Coderhouse (2022). La presenta SPA permite conectarse con un backend realizdo con Firebas, seleccionar productos, navegar a sus detalles, agregarlos al carrito, poder acceder a él y  simular la compra de los productos. Al clickear sobre el botón "realizar compra", pide llenar un formulario con datos básicos y luego de confirmar se genera un id de orden para el usuario y en firebase se guarda la orden con los productos que compró.


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
