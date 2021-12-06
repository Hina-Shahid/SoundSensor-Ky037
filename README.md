# SoundSensor-Ky037

To detect sound on an independent platform by using ky-037 sensor .This module consists of a sensitive capacitance microphone for detecting sound and an amplifier circuit. The output of this module is both analog and digital. The digital output acts as a key, and itactivates when sound intensity has reached a certain threshold. The sensitivity threshold can be adjusted via the potentiometer on the sensor.The analog output voltage changes with the intensity of sound received by the microphone. You can connect this output to Arduino analog pins and process the output voltage.

I made a function  for Nuclio, an open source and managed serverless platform that we can run on our home server. It uses RabbitMQ as broker to share MQTT messages around.

This project is for the Serverless Computing class at Università degli Studi di Salerno, I used Nuclio to simulate a fully fledged serverless infrastructure.

# Prerequisite

- Docker
- Nuclio
- RabitMQ
- Arduino IDE

 # How to use it
 
 First of all, clone this repository, then you need to start a Docker to start up a docker instance of Nuclio, with the command:
 
 > $ sudo docker run -p 8070:8070 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp nuclio/dashboard:stable-amd64
 
 And to start up a docker instance of RabbitMQ, with the command:

> sudo docker run -p 9000:15672 -p 1883:1883 -p 5672:5672 cyrilix/rabbitmq-mqtt

# Libraries used

ESP8266WiFi

The ESP8266WiFi library provides a wide collection of C++ methods (functions) and properties to configure and operate an ESP8266 module in station and / or soft access point mode.

Pubsub Client

A client library for MQTT messaging. MQTT is a lightweight messaging protocol ideal for small devices. This library allows you to send and receive MQTT messages





