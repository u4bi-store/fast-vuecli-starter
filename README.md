# fast-vuecli-starter

## Usage

```
$ npm install

$ npm start

$ npm run test
```

#### Directory & File Structure

```bash
fast-vuecli-starter/
├── src/
│   ├── __tests__/
│   │   ├── api.test.js 
│   │   ├── card.test.js 
│   │   └── store.test.js
│   │
│   ├── components/
│   │   └── Card.vue
│   │
│   ├── pages/
│   │   ├── Main.vue
│   │   └── Sub.vue
│   │
│   ├── providers/
│   │   ├── api/
│   │   │   └── index.js
│   │   │
│   │   └── router/
│   │   │   ├── index.js
│   │   │   └── routes.js
│   │   │
│   │   └── store/
│   │       ├── constants/
│   │       │   ├── internal/
│   │       │   │   ├── ActionTypes.js
│   │       │   │   ├── GetterTypes.js
│   │       │   │   └── MutationTypes.js
│   │       │   │
│   │       │   └── index.js
│   │       │
│   │       ├── actions/
│   │       │   ├── app/
│   │       │   │   └── index.js
│   │       │   │
│   │       │   └── index.js
│   │       │
│   │       ├── getters/
│   │       │   ├── app/
│   │       │   │   └── index.js
│   │       │   │
│   │       │   └── index.js
│   │       │
│   │       ├── modules/
│   │       │   ├── app/
│   │       │   │   └── index.js
│   │       │   │
│   │       │   └── index.js
│   │       │
│   │       ├── mutations/
│   │       │   ├── app/
│   │       │   │   └── index.js
│   │       │   │
│   │       │   └── index.js
│   │       │
│   │       └── index.js
│   │
│   ├── App.vue
│   │
│   └── main.js
│
└── package.json
```

#### Requirements

- [vue-cli](https://github.com/vuejs/vue-cli)
- [node-sass](https://github.com/sass/node-sass)
- [vue-router](https://github.com/vuejs/vue-router)
- [vuex](https://github.com/vuejs/vuex)
- [axios](https://github.com/axios/axios)
- [jest](https://github.com/facebook/jest)
- [vue-test-utils](https://github.com/vuejs/vue-test-utils)
- [serve](https://github.com/zeit/serve)
- [json-server](https://github.com/typicode/json-server)

## License
[MIT](LICENSE)