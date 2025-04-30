
FROM openjdk:17-jdk-slim AS build


RUN apt-get update && \
    apt-get install -y ca-certificates maven && \
    update-ca-certificates


WORKDIR /app


COPY . .


RUN mvn clean package -DskipTests


FROM openjdk:17-jdk-slim


RUN apt-get update && \
    apt-get install -y ca-certificates && \
    update-ca-certificates


WORKDIR /app


COPY --from=build /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
