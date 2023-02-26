FROM bellsoft/liberica-openjdk-alpine:latest as build
COPY ./target/web-chat.jar web-chat.jar
#CMD java -jar web-chat.jar