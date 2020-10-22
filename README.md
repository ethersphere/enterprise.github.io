# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Or, alternatively with npm

```
npm i >> Installation
npm run build >> generates html
npm run serve >> test build files
```

### Deployment

To auto-deploy to GH pages, tag and push tag.

```
git tag -a v0.1.1 -m "v0.1.1"
git push origin v0.1.1
```

### Availability
After deployment, site should be available at:

- https://enterprise.ethswarm.org/
- https://swarm-gateways.net/bzz:/enterprise.swarm.eth/
