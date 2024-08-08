# typescript-eslint-custom-logger-plugin

기본 console.log 및 console.error 대신에 커스텀 로거 사용을 권장하는 ESLint 플러그인입니다.

## 구현 내용

AST 노드 탐색을 통해 console.log와 console.error 호출을 식별하고 커스텀 로거 사용을 권장하는 ESLint 규칙을 구현합니다.

## 사용 기술, 라이브러리, 프레임워크

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## 설치 방법

`npm install --save-dev typescript-eslint-custom-logger-plugin`

## 설정 방법

### [Flat Config Files](https://eslint.org/docs/latest/use/configure/configuration-files)

- eslint.config.js
- eslint.config.mjs
- eslint.config.cjs

```
const typescriptParser = require("@typescript-eslint/parser");
const typescriptRecomended = require("@typescript-eslint/eslint-plugin");
const customLoggerPlugin =
  require("typescript-eslint-custom-logger-plugin").default;

module.exports = [
  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: { typescriptRecomended, customLoggerPlugin },

    rules: {
      "customLoggerPlugin/suggest-custom-logger-rule": "warn",
    },
  },
];
```

### [Config Files(deprecated)](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated)

- .eslintrc.js
- .eslintrc.cjs
- .eslintrc.yaml
- .eslintrc.yml
- .eslintrc.json

```
{
  "plugins": ["custom-logger"],
  "rules": {
    "custom-logger/suggest-custom-logger": "warn"
  }
}
```

## 규칙

### suggest-custom-logger

이 규칙은 console.log와 console.error 대신에 커스텀 로거 사용을 권장합니다.

#### 규칙 세부 사항

이 규칙은 console.log와 console.error 사용을 체크하고 커스텀 로거로 대체할 것을 권장합니다.

#### 예제

다음 패턴은 경고로 간주됩니다:

```
console.log("This is a log message");
console.error("This is an error message");
```

다음 패턴은 경고로 간주되지 않습니다:

```
customLogger.log("This is a log message");
customLogger.error("This is an error message");
```
