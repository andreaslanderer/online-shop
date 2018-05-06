FROM openjdk

VOLUME /tmp
ADD maven/online-shop-backend-1.0-SNAPSHOT.jar online-shop.jar
RUN sh -c 'touch /online-shop.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/online-shop.jar"]
