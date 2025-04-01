# Reporte y Documentación: Desafio Módulo 8

## Integrantes:
    Luis Cerda
    Eduardo Chasco
    Alexis Jiménes
    Johann Ortiz


## Pruebas Jest Local**

![Summary](/images/jest1.png)



## Pasos
- Crear index.js
- Inicializalizar Node: npm init -y (proceso completo en readme.md)
- Instalar express eslint jest supertest
- Primer commit
- Crear Dockerfile
- Crear Jenkinsfile
- Subir cambios al repositorio
- Instalar Jenkins
- Realizar configuración de un pipeline con repositorio Github rama main
- Correr el pipeline


## Configuración del Pipeline


![Summary](/images/pipeline.png)


## Ejecución del Pipeline


![Summary](/images/checkout.png)


![Summary](/images/dependencias.png)


![Summary](/images/build.png)


![Summary](/images/docker.png)


![Summary](/images/success.png)

## Problemas en la ejecución del proyecto

Jenkins en contenedor dio problemas iniciales pero se soluciono realizando lo siguiente:

- Luego de iniciar el contenedor, instalar npm nodejs
```
docker exec -it --user root jenkins_docker bash
apt update && apt install -y nodejs npm
```
- Instalar docker dentro del contenedor de Jenkins, y compartir el socket de docker para que desde la imagen de Jenkins se pueda llamar al servicio de docker del host.

```
apt install -y docker.io
```

- Crear un contenedor de Jenkins y conectar con socket de Docker Desktop
```
docker run -d --name jenkins-docker ^
    -e DOCKER_HOST=tcp://localhost:2375 ^
    -v D:/jenkins-docker:/var/jenkins_home ^
    -p 8080:8080 ^
    -p 50000:50000 ^
    -p 3000:3000 ^
    jenkins/jenkins:lts

```