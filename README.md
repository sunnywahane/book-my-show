# book-my-show-app

## Getting started

Configure your environment by adding an `NPM_TOKEN` environment variable:

- Create github personal access token with `read:packages` access. You can refer [this](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) article to create PAT.
- If you’re on a Mac, run `echo “export NPM_TOKEN=${<PERSONAL_NPM_TOKEN>}” >> ~/.zshrc && source ~/.zshrc`
- If on another system, set the `NPM_TOKEN` environment variable appropriately.
- run `yarn` to install the dependencies
- run `yarn watch` to start the server

Add proper okta app config in <public/appConfig.json>
