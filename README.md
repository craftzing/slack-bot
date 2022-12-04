# @craftzing/slack-bot

[![code-review](https://github.com/craftzing/slack-bot/workflows/code-review/badge.svg)](https://github.com/craftzing/slack-bot/actions/workflows/code-review.yml)
[![release](https://github.com/craftzing/slack-bot/workflows/release/badge.svg)](https://github.com/craftzing/slack-bot/actions/workflows/release.yml)
![docker image version](https://ghcr-badge.deta.dev/craftzing/slack-bot/latest_tag?label=latest)
![docker image size](https://ghcr-badge.deta.dev/craftzing/slack-bot/size)

## Setup

### Dependencies

```bash
# install node
nvm install

# dependencies
yarn
```

### VSCode

#### Plugins

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

#### Workspace settings

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "eslint.validate": [
    "javascript",
    "typescript",
  ],
}
```

## Linting

```bash
# lint
yarn lint

# lint & try to fix what's possible
yarn lint:fix
```

## Testing

```bash
# run tests
yarn test
```

## Development

```bash
# dev server
yarn dev

# compile source
yarn build
```
