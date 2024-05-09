function logica() {
                      
    var numeros = [
                    "Cristhian", 
                    "David", 
                    "Carlos", 
                    "Miguel", 
                    true, 
                    5.5, 
                    "Karina"
                ]
    //console.log(numeros[0] + " - " + numeros[1])
        
    // Ciclos                       
    /* 
        Cristhian    i = 0;  0 < 5 ; i++ // 0 = 0 + 1 
        David        i = 1;  1 < 5 ; i++ // 1 = 1 + 1
        Carlos       i = 2;  2 < 5 ; i++ // 2 = 2 + 1
        Miguel       i = 3;  3 < 5 ; i++ // 3 = 3 + 1
        Andres       i = 4;  4 < 5 ; i++ // 4 = 4 + 1
        Termina Aqui i = 5;  5 < 5 ; i++             
    */
   
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i])
    }

    for (let i = 2; i < 20; i = i + 2) {
        console.log(i)
    }
   
}

//var = Global y Local // No se reinician - No libera espacio en memoria
//let = Local          // Se reinicia     - Libera memoria

/*var servidor  = "10.5.5.2.1";
var prueba2 = 0;

function name() {
    prueba2
    let prueba3 = 5
}*/


/*
function acelerar(numero1,numero2) {
    // Codigo a ejecutar
}

acelerar(5,5)



let multiplicar  = function (numero1,numero2) {
    // codigo 
}*/


function arrobj() {

    /*let variablea
    variablea = 0

    let variableb
    variableb = 0

    let variablec = 0 
    let variabled = 0 

    let variablex, variabley
    variablex = variabley = 0*/

    let cursos = [
                    {"cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
                    {"cod_curso" : "BD253","descripcion" : "Bases de Datos"}
                ]
    
    console.log(cursos)   
    console.log(cursos[0].cod_curso) 
    console.log(cursos[1].cod_curso)          
    
    let cursos2 = [
                    {
                    "cod_curso" : ["AE600","BD253"],
                    "descripcion" : ["Algoritmos y Estructura de datos", "Bases de Datos"]
                    }
                ]
    console.log(cursos2)
    console.log(cursos2[0].cod_curso[0]) 
    console.log(cursos2[0].cod_curso[1]) 


    let alumnosMatriculados = [
                                                                      
                                {"rut": "1-9", "nombre": "Pedro","apellido": "Pérez", "cod_curso":"AE600", "descripcion":"Algoritmos y estructuras de datos"},          
                                {"rut": "2-7", "nombre": "Juan", "apellido": "Jara", "cod_curso": "BD253", "descripcion":"Bases de Datos"},
                                {"rut": "2-7", "nombre": "Juan", "apellido": "Jara", "cod_curso":"AE600", "descripcion":"Algoritmos y estructuras de datos"},
                                {"rut": "3-5", "nombre": "Diego", "apellido": "Díaz", "cod_curso":"BD253", "descripcion": "Bases de datos"},
                                {"rut": "4-4", "nombre": "Maria","apellido": "Martínez", "cod_curso": "BD253", "descripcion": "Bases de Datos"}
                                
                            ]


    let alumnosMatriculados1 = [
                                                                      
                                {"rut": "1-9", "nombre": "Pedro","apellido": "Perez", "cod_curso":"AE600", "descripcion":"Algoritmos y estructuras de datos"},          
                                {"rut": "2-7", "nombre": "Juan", "apellido": "Jara", "cod_curso": ["BD253", "AE600"], "descripcion":["Bases de Datos", "Algoritmos y estructuras de datos"]}, 
                                {"rut": "3-5", "nombre": "Diego", "apellido": "Diaz", "cod_curso":"BD253", "descripcion": "Bases de datos"},
                                {"rut": "4-4", "nombre": "Maria","apellido": "Martinez", "cod_curso": "BD253", "descripcion": "Bases de Datos"}
                                
                            ]

    


    let alumnosMatriculados2 = [

                                {
                                "rut": ["1-9", "2-7", "2-7", "3-5","4-4"],
                                "nombre": ["Pedro", "Juan", "Juan", "Diego", "Maria"],
                                "apellido": ["Perez", "Jara", "Jara", "Diaz", "Martínez"],
                                "cod_curso": ["AE600", "BS253", "AE600", "BD253", "BD253"],
                                "descripcion": ["Algoritmos y estructuras de datos", "Bases de datos", "Algoritmos y estructuras de datos", "Bases de datos", "Bases de datos"]

                                }

                            ]                               

    console.log(alumnosMatriculados)
    console.log(alumnosMatriculados1[1].cod_curso[0])
    console.log(alumnosMatriculados2[0].cod_curso[0])                                            



    let alumno = [
                    {
                  "rut": "1-9", "nombre": "Pedro", "apellido": "Perez",
                  "rut": "2-7", "nombre": "Juan", "apellido": "Jara",
                  "rut": "3-5", "nombre": "Diego", "apellido": "Díaz",
                  "rut": "4-4", "nombre": "Maria", "apellido": "Martinez"
                 
                }

                ]


    let alumno1 = {

                    "rut":["1-9", "2-7", "3-5", "4-4"],
                    "nombre": ["Pedro", "Juan", "Diego", "Maria"],
                    "apellido":["Perez", "Jara", "Diaz", "Martinez"]

                }             

console.log(alumno)
console.log(alumno1[2])


    let matricula =  [
                        {
                            "rut": "1-9", "cod_curso": "AE600",
                            "rut": "2-7", "cod_curso": ["BD253","AE600"],
                            "rut": "3-5", "cod_curso": "BD253",
                            "rut": "4-4", "cod_curso": "BD253"

                        }
                     ]         

    let matricula1 = {
                        "rut": ["1-9", "2-7", "2-7","3-5", "4-4"],
                        "cod_curso": ["AE600", "BD253", "AE600", "BD253", "BD253"]
                        
                    }
                                                                             
    console.log(matricula)
    console.log(matricula1[0])                        

                        
                    
                    
    
                





    /*for (let i = 0; i < cursos.length; i++) {
        console.log(curut, rsos[i].cod_curso)
    }*/



    
    
}












