# Cloud functions

**Note:** All commands bellow should be run in the `/functions` directory.

## Local development

Create file with config variables

```shell script
firebase functions:config:get > .runtimeconfig.json
```

Start cloud functions locally:

```shell script
npm run serve
```

## Deployment

Deploy all cloud functions

```shell script
npm run deploy
```
