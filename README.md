# WeTube

Cloning Youtube with Vanilla and NodeJS

## summary

- cookieParser : cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어
  ex) 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용

- bodyParser : 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어
  ex) request정보에서 form이나 json 형태로 된 body를 검사

- helmet 미들웨어 : application이 더 안전하도록 만들어 줌

- morgan 미들웨어 : application에서 발생하는 모든일 들을 logging하는 것
