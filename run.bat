docker build . -t test/api-nestjs
docker run -p  80:3000  test/api-nestjs