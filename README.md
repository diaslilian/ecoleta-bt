<h1 align="center">
    <img src="https://user-images.githubusercontent.com/47895394/86499249-8e4ad380-bd60-11ea-971d-9aa661b81494.png" width="40%"></img> 
    <br>

<h4>Ecoleta é um marketplace que ajuda pessoas a encontrarem pontos de coleta de resíduos de forma eficiente.
</h4>
<h6>Projeto desenvolvido NLW1.0</h6>

![ecoleta](https://user-images.githubusercontent.com/47895394/86499360-3fea0480-bd61-11ea-9cc9-f8477768100c.jpg)

### :books: Layout

Acessar o layout da aplicação utilizando a ferramenta - [Figma](<https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-(Booster)?node-id=0%3A1>).

## :rocket: Tecnologias

### API

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [knex](https://knexjs.org)
- [SQLite](https://github.com/mapbox/node-sqlite3)
- [Multer](https://github.com/expressjs/multer#readme)
- [Cors](https://github.com/expressjs/cors#readme)

### WEB

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Leaflet](https://leafletjs.com/)
- [ReactDropzone](https://github.com/react-dropzone/react-dropzone)
- [Axios](https://github.com/axios/axios)

### MOBILE

- [React Native](http://facebook.github.io/react-native/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios)
- [Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
- [Map View](https://docs.expo.io/versions/latest/sdk/map-view/)

## :information_source: COMO USAR:

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](nodejs) or higher + [Yarn v1.13](yarn) or higher installed on your computer. From your command line:

### **Clonar o repositório**

```bash
# Clone this repository
$ git clone https://github.com/diaslilian/ecoleta-bt

# Go into the repository
$ cd ecoleta-bt
```

### **API**

> Logo após clonar o repositório navegue ate a pasta 'server' e execute o comando npm install.

```bash
# Go into server
$ cd server

# Install dependencies
$ npm install

# Run SQLite
$ npm run knex:migrate

$ npm run knex:seed

# Start the backend server
$ npm run dev
```

### WEB

> Após seguir os passos acima e o server estiver funcionando vá para pasta web.

> Depois das dependências terminarem de instalar execute o comando npm start.

```bash
# Go into frontend web
$ cd web

# Install dependencies
$ npm install

# Start the frontend
$ npm start
```

### :eyes: **Visualizar no navegador**

The frontend web will start on

> http://localhost:3333

### MOBILE

> Para executar o mobile entre na pasta do mobile logo após o backend server estiver funcionando execute npm install.

> Após as dependências terminarem de baixar execute npm start. O expo já estará funcionando para você ler o Qr Code e utilizar a aplicação.

```bash
# On another terminal, go to the mobile folder
$ cd mobile

# Install dependencies
$ npm install

# Start the expo server
$ npm start
```

<br><br>

<hr>

Created by Lilian Dias :wave: [Hi-5!](https://www.linkedin.com/in/dias-lilian/)
