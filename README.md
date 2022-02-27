# Bienvenid@ a [GeekUP](https://geekup.com)

 ### Integrantes 💼
 - [Pedro Ángel Ramirez Villarreal 1738240](https://github.com/TrickyPS)
 - [David Alejandro Montemayor Veliz 1732228](https://github.com/DavidAlMove)
 - [Jesus Angel Paredes Sauceda 1937860](https://github.com/Angel03paredes)


### Descripción del proyecto 🚀
GeekUp será una página dedicada a todo público interesado en temas relacionados a la computación, noticias de tecnología, programación y diversas ramas que derivan de ella.

Nuestra meta es la de facilitar la búsqueda de información y autoaprendizaje, brindar una herramienta que proporcione al usuario un medio para comunicarse de manera dinámica al momento de requerir apoyo, ofreciendo información reciente y veraz brindada por y para la comunidad.

##### ¿Qué ofrecemos?
- Foros en los cuales todo usuario registrado podrá publicar acerca de cualquier tema relacionado a informática o computación con una caja de comentarios.
- Noticias recientes referentes al mundo de la computación, englobando todos los intereses de un Geek.
- Perfil personalizado del usuario registrado el cual contara con valoraciones de sus aportaciones y servicios que este brinde a la comunidad.
- El usuario podrá filtrar sus dudas, especificando el tema relacionado a lo que necesita resolver, llegando así a la comunidad más apropiada.

### Contenido de carpetas 📁

> Backend


```
./
├── src/
│   ├── models/
│   │   └── *.model.js
│   ├── controllers/
│   │    └── *.controller.js
│   ├── routes/
│   │    └── *.routes.js
│   ├── middlewares/
│   │    └── auth.js
│   ├── db/
│   │    └── index.js
│   ├── utils/
│   │    └── *.js
│   └── app.js
├── index.js
├── .env
├── packaga-lock.json
└── package.json
```

En esta carpeta de backend se encuentra la API  de nuestro proyecto, aquí se encuentra la lógica y conexiones a la base de datos.

- **src:** Aquí se encuentra todo el código del proyecto que almacena otra carpetas que son importantes.
- **models:** En esta carpeta se encuentra todos los esquemas que se necesitan para la base de datos.
- **controllers:** Cada archivo de esta carpeta contiene una serie de funciones que son utilizadas y llamadas en cada endpoint, administrando todos los datos (parametros,body,queries) que se procesarán para su manipulación.
- **middlewares:** Aquí se guardarán los middlewares que pueden ser necesarios para la API como el manejo de la autentificación de tokens.
- **db:** La carpeta contiene la conexión a la base de datos MongoDB.
- **utils:** Contiene funciones que son utiles en la aplicación y solo es necesario llamarlo si se ocupan en cualquier parte del código.

#### Empieza

``` bash  
git clone https://github.com/TrickyPS/Programacion-web-II.git
cd .\Programacion-web-II\backend
npm i
npm start
```


