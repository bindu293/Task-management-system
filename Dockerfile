# Stage 1: Build the application
FROM openjdk:17-jdk-slim AS build

# Install CA certificates and Maven
RUN apt-get update && \
    apt-get install -y ca-certificates maven && \
    update-ca-certificates

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:17-jdk-slim

# Install CA certificates
RUN apt-get update && \
    apt-get install -y ca-certificates && \
    update-ca-certificates

# Set working directory
WORKDIR /app

# Copy built JAR from previous stage
COPY --from=build /app/target/*.jar app.jar

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
