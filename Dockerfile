FROM gradle:7.2.0-jdk17 AS build

# Copy the project files
WORKDIR /app
COPY build.gradle .
COPY src ./src

# Build the application using Gradle
RUN gradle build

RUN mkdir "app"
# Copy the generated war file to the correct location
RUN cp build/libs/app-*.war app/app.war

# Set the command to run the application
CMD ["java", "-jar", "./app/app.war"]