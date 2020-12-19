const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] ||  '/';
    // #/1/  valor inicial
    //location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
    //slice(1) me permite elimiar el primer elemento en este caso el #
    //toLocaleLowerCase() retorna la cadena de texto desde la que se llama convertida en minúsculas 
    //split('/') divide un objeto de tipo String en un array (vector) ejemplo  // ['','1','']
    //[1] por lo tanto accedemos al valor en la posicion 1 que contiene a 1  // ['1']

    // ||  '/' En dado caso que no encuentre una ruta retorna '/'

    export default getHash;