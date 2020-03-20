# poc-single-spa

Proof Of Concept / playground for trying out single-spa as a framework for micro-frontends.

> Note that this repository contains several sub-projects. In a real system, each of these top-level directories would be their own git repo, with their own CI/CD process.

This structure was mainly taken from the https://github.com/react-microfrontends project.

## Project structure

`root-config` - JavaScript/webpack. This project is really the 'glue' and its sole purpose is to register all of the various sub-applications and indicate when they should be mounted / unmounted from the DOM. It also outputs the index.html file (using templated JS) that will be served.

`api` - JavaScript. Set of common JS libraries that all subapplications can use. Note that this could have been a build-time dependency pulled into each sub-application, and in our real implementation, would probably be done like that

`styleguide` - JavaScript / CSS. A global stylesheet with body level styles and CSS variables that can be used by subapplications. I'm not a fan of this approach, but it's a good example of what's possible with this architecture.

`ships` - Angular v8. Subapplication for a list of ships

## Running locally

You'll need to open a separate terminal window/tab for each subdir, and then simply do the following in each dir:

```
cd styleguide
yarn install
yarn start
```

```
cd navbar
yarn install
yarn start
```

```
cd ships
yarn install
yarn start
```

```
cd root-config
yarn install
yarn start
```

Navigate to `http://localhost:9000` and you should be able to play around with the app!
