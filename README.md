
## Run application on different locales

ng extract-i18n --output-path src/locale

ng build --localize

http-server dist/angular-localization

http://domain:8080/es-PR/ OR http://domain:8080/es-US/
