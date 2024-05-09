function arrobj() {

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
                                                          
                    {"rut": "1-9", "nombre": "Pedro","apellido": "Pérez", "cod_curso":"AE600", "descripcion":"Algoritmos y estructuras de datos"},          
                    {"rut": "2-7", "nombre": "Juan", "apellido": "Jara", "cod_curso": ["BD253", "AE600"], "descripcion":["Bases de Datos", "Algoritmos y estructuras de datos"]}, 
                    {"rut": "3-5", "nombre": "Diego", "apellido": "Díaz", "cod_curso":"BD253", "descripcion": "Bases de datos"},
                    {"rut": "4-4", "nombre": "Maria","apellido": "Martínez", "cod_curso": "BD253", "descripcion": "Bases de Datos"}
                    
                ]

console.log(alumnosMatriculados)
console.log(alumnosMatriculados[0].rut[0])



let alumnosMatriculados2 = [

                    {
                    "rut": ["1-9", "2-7", "2-7", "3-5","4-4"],
                    "nombre": ["Pedro", "Juan", "Juan", "Diego", "Maria"],
                    "apellido": ["Perez", "Jara", "Jara", "Díaz", "Martinez"],
                    "cod_curso": ["AE600", "BS253", "AE600", "BD253", "BD253"],
                    "descripción": ["Algoritmos y estructuras de datos", "Bases de datos", "Algoritmos y estructuras de datos", "Bases de datos", "Bases de datos"]

                    }

                ]               
                
console.log(alumnosMatriculados2)
console.log(alumnosMatriculados2[0].rut[0])                        



let alumno = [
        {
      "rut": "1-9", "nombre": "Pedro", "apellido": "Perez",
      "rut": "2-7", "nombre": "Juan", "apellido": "Jara",
      "rut": "3-5", "nombre": "Diego", "apellido": "Diaz",
      "rut": "4-4", "nombre": "Maria", "apellido": "Martinez"
     
    }

    ]


let alumno1 = {

        "rut":["1-9", "2-7", "3-5", "4-4"],
        "nombre": ["Pedro", "Juan", "Diego", "Maria"],
        "apellido":["Perez", "Jara", "Díaz", "Martinez"]

    }          
    
console.log(alumno)
console.log(alumno[0])
console.log(alumno1)        
console.log(alumno1[2]).apellido[2]     


let matrícula =  [
            {
                "rut": "1-9", "cod_curso": "AE600",
                "rut": "2-7", "cod_curso": ["BD253","AE600"],
                "rut": "3-5", "cod_curso": "BD253",
                "rut": "4-4", "cod_curso": "BD253"

            }
                ]         

let matrícula1 = {
            "rut": ["1-9", "2-7", "2-7","3-5", "4-4"],
            "cod_curso": ["AE600", "BD253", "AE600", "BD253", "BD253"]
            
                }
                                                                 
console.log(matricula)
console.log(matricula[0])
console.log(matricula1)
console.log(matricula1[0]).cod_curso[2]


}   
    

    
    
    