FROM --platform=$BUILDPLATFORM golang:alpine AS build

RUN apk update && apk add openjdk17 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
RUN apk add --no-cache unzip

ENV GRADLE_VERSION 7.3
ENV GRADLE_HOME /opt/gradle
ENV PATH=$PATH:$GRADLE_HOME/bin

WORKDIR /opt
RUN wget -q https://services.gradle.org/distributions/gradle-$GRADLE_VERSION-bin.zip \
   && unzip -q gradle-$GRADLE_VERSION-bin.zip \
   && mv gradle-$GRADLE_VERSION $GRADLE_HOME \
   && rm gradle-$GRADLE_VERSION-bin.zip

# Copy the project files
WORKDIR /app
COPY build.gradle .
COPY src ./src

# Build the application using Gradle
RUN gradle build

# Copy the generated war file to the correct location
RUN cp build/libs/store-*.war /app/app.war

# Set the command to run the application
CMD ["java", "-jar", "/app/app.war"]