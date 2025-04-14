FROM openjdk:17

# Copy the Spring Boot JAR file into the container
COPY target/Task-Management-System-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot application will run on
EXPOSE 9090

# Run the JAR file with the Docker profile active
CMD ["java", "-jar", "app.jar", "--spring.profiles.active=docker"]
