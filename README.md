# MovieNode-Challenge

Solucion al desafio de Construir a través de NodeJS y Express un microservicio con 3 endpoints que cumplan las siguientes especificaciones:

los Endpoint son:
# 1.- GET http://localhost:3000/movies/search?title=NombreDeLaPelicula
    Adicionalmente puede ir un header opcional que contenga el año de la película (year=año)
    busca una movie por su titulo, verifica si se encuentra en la BD, si esta muestra todos los registros de la BD, si no esta la guarda en BD y devuelve todos los registros.

# 2.- GET http://localhost:3000/movies
    Devuelve todos los nombres de las películas que se han guardado en la BD.
    Si hay más de 5 películas guardadas en BD, se muestran los resultados de 5 en 5
    El número de página debe ir por header.

# 3.- POST http://localhost:3000/movies
    Recibe en el BODY un object como por ejemplo: {movie: star wars, find: jedi, replace: Happ Dev }
    Buscar dentro de la BD y obtener el campo PLOT del registro
    Al string del plot obtenido buscar la palabra enviada en el Body (find) y reemplazar todas sus ocurrencias por el campo enviado en el body (replace)
    Devolver el string con las modificaciones del punto anterior
