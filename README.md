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
.

# Contribuyentes
Este proyecto ha sido desarrollado en equipo por los siguientes integrantes:

- **_Gonzalo Cantos_**
- _Pedro Solís_
- _Borja González_
- _Jesus Jiménez_

   
  
