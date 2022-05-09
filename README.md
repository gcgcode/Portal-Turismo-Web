# TouristMap | Portal de Turismo
Este producto está diseñado para aportar valor a municipios que carecen de un buen portal de turistmo.
TouristMap permite a administradores designados por ayuntamientos, dar de alta lugares y añadir información personalizada relativa a una localidad.

A través de imágenes, mapas e información detallada el turista potencial podrá apreciar el lugar que va a vistar/está visitando, además de mantener también informados a la población del patrimonio y eventos que existen.

# Código
Al tratarse de un proyecto de desarrollo colaborativo, yo me he centrado principalmente en desarrollar el 100% de las funcionalidades del back-end de nuestra apliación web. Los archivos que he construido son los siguientes:

- _Touristmap-Portal-Turismo-Web/**php/**_
  - **api/** _creación de API rest para las operativas con la base de datos_
    - **getCoordenada.php**
    - **maps_api.php**
  - **database/** _establece parametros de conexionado con la base de datos_
    - **db_conn.php**
  - **forms/** _API de comunicacion con la base de datos para formularios_
    - **login.php**
    - **register.php**
   
- _Touristmap-Portal-Turismo-Web/**assets/**_
  - **js/** _modelado de peticiones/respuestas del cliente para la comunicación con la API php haciendo uso de AJAX_
    - **addElements.js**
    - **ajaxLogin.js**
    - **ajaxRegister.js**
    - **getCategory.js**
    - **getMap.js**
    - **getMonumento.js**
    - **getUserData.js**
    - **insertUserData.js**
    - **updateCoordenada.js**
    - **msg.js**
   
   
# Database
- El SGBD usado ha sido **MySQL**
- El Script de creación de la base de datos: 
```sql CREATE DATABASE TOURISTMAP;

CREATE TABLE TOURISTMAP.LOCALIDAD
(ID_LOCALIDAD INT NOT NULL AUTO_INCREMENT,
NOMBRE VARCHAR(255) NOT NULL,
PRIMARY KEY (ID_LOCALIDAD));

CREATE TABLE TOURISTMAP.CATEGORIA
(ID_CATEGORIA INT NOT NULL AUTO_INCREMENT,
NOMBRE VARCHAR(255) NOT NULL,
ICON VARCHAR(255) NOT NULL,
PRIMARY KEY (ID_CATEGORIA));

CREATE TABLE TOURISTMAP.COORDENADA
(ID_COORDENADA INT NOT NULL AUTO_INCREMENT,
LATITUD DECIMAL(9,7) NOT NULL,
LONGITUD DECIMAL(8,7) NOT NULL,
TITULO VARCHAR(255) NOT NULL,
DESCRIPCION LONGTEXT NOT NULL,
DIRECCION VARCHAR(255) NOT NULL,
TELEFONO INT(9) NOT NULL,
IMG VARCHAR(255) NOT NULL,
ID_CATEGORIA INT NOT NULL,
PRIMARY KEY (ID_COORDENADA),
FOREIGN KEY (ID_CATEGORIA) REFERENCES CATEGORIA (ID_CATEGORIA));

CREATE TABLE TOURISTMAP.IMG
(ID_IMG INT NOT NULL AUTO_INCREMENT,
SRC VARCHAR(255) NOT NULL,
ID_COORDENADA INT NOT NULL,
PRIMARY KEY (ID_IMG),
FOREIGN KEY (ID_COORDENADA) REFERENCES COORDENADA (ID_COORDENADA));

CREATE TABLE TOURISTMAP.USUARIO
(ID_USUARIO INT NOT NULL AUTO_INCREMENT,
USERNAME VARCHAR(35) NOT NULL,
PASSWORD VARCHAR(255) NOT NULL,
EMAIL VARCHAR(60) NOT NULL,
NOMBRE_APELLIDOS VARCHAR(255) NOT NULL,
ID_LOCALIDAD INT NOT NULL,
PRIMARY KEY (ID_USUARIO),
FOREIGN KEY (ID_LOCALIDAD) REFERENCES LOCALIDAD (ID_LOCALIDAD));

INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Aguadulce');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Alanís');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Albaida del Aljarafe');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Alcalá de Guadaíra');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Alcalá del Río');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Alcolea del Río');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'La Algaba');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Algámitas');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Almadén de la Plata');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Almensilla');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Arahal');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Aznalcázar');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Aznalcóllar');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Badolatosa');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Benacazón');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Bollullos de la Mitación');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Bormujos');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Brenes');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Burguillos');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Las Cabezas de San Juan');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Camas');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'La Campana');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Cantillana');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Cañada Rosal');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Carmona');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Carrión de los Céspedes');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Casariche');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Castilblanco de los Arroyos');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Castilleja de Guzmán');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Castilleja de la Cuesta');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Castilleja del Campo');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Castillo de las Guardas');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Cazalla de la Sierra');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Constantina');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Coria del Río');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Coripe');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Coronil');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Los Corrales');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Cuervo de Sevilla');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Dos Hermanas');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Écija');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Espartinas');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Estepa');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Fuentes de Andalucía');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Garrobo');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Gelves');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Gerena');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Gilena');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Gines');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Guadalcanal');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Guillena');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Herrera');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Huévar del Aljarafe');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Isla Mayor');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Lantejuela');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Lebrija');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Lora de Estepa');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Lora del Río');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'La Luisiana');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Madroño');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Mairena del Alcor');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Mairena del Aljarafe');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Marchena');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Marinaleda');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Martín de la Jara');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Los Molares');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Montellano');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Morón de la Frontera');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Las Navas de la Concepción');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Olivares');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Osuna');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Los Palacios y Villafranca');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Palomares del Río');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Paradas');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Pedrera');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Pedroso');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Peñaflor');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Pilas');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Pruna');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'La Puebla de Cazalla');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'La Puebla de los Infantes');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'La Puebla del Río');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Real de la Jara');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'La Rinconada');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'La Roda de Andalucía');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Ronquillo');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Rubio');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Salteras');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'San Juan de Aznalfarache');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'San Nicolás del Puerto');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Sanlúcar la Mayor');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Santiponce');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Saucejo');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Sevilla');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Tocina-Los Rosales');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Tomares');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Umbrete');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Utrera');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Valencina de la Concepción');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Villamanrique de la Condesa');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Villanueva de San Juan');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Villanueva del Ariscal');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Villanueva del Río y Minas');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'Villaverde del Río');
INSERT INTO TOURISTMAP.LOCALIDAD VALUES (default,'El Viso del Alcor');
```

# Contribuyentes
Este proyecto ha sido desarrollado en equipo por los siguientes integrantes:

- _Pedro Solís_ - _Desarrollador Front-End_
- _Borja González_ - _Desarrollador Front-End_
- _Jesus Jiménez_ - _Desarrollador Front-End_
- **_Gonzalo Cantos_** - _Desarrollador **Back-End**_

   
 **_No se permite el uso para fines lucrativos._**

**© Gonzalo Cantos**
