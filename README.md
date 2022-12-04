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

All suggested extensions and settings can be found in the `.vscode` directory.
When opening the repo for the first time you will be prompted to install the suggested extensions.

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

## Deployment

An arm64v8 Docker image is built on tag & deployed automatically on the Raspberry Pi @ Gent office.

```bash
# small bugfix
yarn patch

# new (small) features
yarn minor

# new (big) release
yarn major
```
