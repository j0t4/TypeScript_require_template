//Configuración de la aplicación:
//Establece las dependencias de require.js


require.config({
 
    baseUrl: 'www/',
 
    paths: {
        //main libraries
        jquery: 'scripts/jquery',
 
        //shortcut paths
        templates: '../templates',
        data: '../data',
 
    },
 
    shim: {
        jquery: {
            exports: '$'
        }
    }
});