<p align="center">
  <img src="./assets/hyuns.jpg" width="10%" alt="Opize" />
</p>
<h1 align="center">react-notion-cacher-client</h1>
<h5 align="center">React Notion Cacher의 편리한 이용을 위한 클라이언트</h5>
<p align="center">
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-blue"/></a>
  <img alt="MIT License" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

---

## install

```bash
# yarn
yarn add react-notion-cacher-client

# npm
npm install react-notion-cacher-client
```

## Usage

```typescript
import { ReactNotionCacherClient } from "react-notion-cacher-client";

const client = new ReactNotionCacherClient({
    auth: "...", // client.page.get() 만 이용할 예정이라면 auth는 작성하지 않아도 됩니다.
    baseUrl: "...",
});

// 만약 auth 속성을 인스턴스 생성 시점이 아닌 다른 시점에서 하고 싶다면 client.updateAuth('TOKEN') 을 사용하세요
client.updateAuth("TOKEN");

(async () => {
    console.log(
        await client.page.get({
            pageId: "...",
        })
    );
})();
```

## API Map

각 엔드포인트의 payload는 API 문서에 적힌 내용과 같습니다. API 자체에 대한 문서는 [react-notion-cacher-backend의 README.md](https://github.com/HyunsDev/react-notion-cacher-backend)를 참고하세요.

| Endpoint             | Function                      |
| -------------------- | ----------------------------- |
| POST /auth/signin    | `client.auth.signIn()`        |
| POST /auth/signup    | `client.auth.signUp()`        |
| DELETE /auth/account | `client.auth.deleteAccount()` |
| GET /page            | `client.page.get()`           |
| GET /pages           | `client.page.list()`          |
| PATCH /page/:pageId  | `client.page.patch()`         |
| DELETE /page/:pageId | `client.page.delete()`        |

### API Object

자주 사용되는 오브젝트는 별도의 타입으로 분리되어 있습니다.

-   `PageObject`

```ts
type PageObject = {
    pageId: string;
    pageCode: string | undefined;
    domain: string;
    cachedAt: string;
    recordMap: any;
};
```
