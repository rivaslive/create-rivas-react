# create-rivas-react

**create-rivas-react** is a boilerplate to create reactjs or nextjs projects, with its different versions, Nextjs, Vitejs and create-react-app, all these projects implement an Atomic Design architecture together with a considerable amount of pre-built Atoms that They tend to be super used elements like Title, Text, Button, Container, Grid, etc...

All project generated for **create-rivas-react** can be with <span style="color: #f0db4f">javascript</span> or <span style="color: #3178C6">typescript</span>.

## What benefits do you have?

* <span style="color: #61DBFB">Reactjs</span> or <b>Nextjs</b>
* Atomic Design (Architecture)
* styled-components or Stitches(Coming Soon!)
* Pre build components ready for use
* Nextjs, Vitejs or create-react-app
* <span style="color: #f0db4f">javascript</span> or <span style="color: #3178C6">typescript</span>
* AuthProvider
* ThemeProvider
* Vitejs fixed absolute paths and support for proccess.env
* create-react-app support for styled-components displayName
* Nextjs support for styled-components displayName

# How to use it?

    npx create-rivas-react

or

    npx create-rivas-react [name] [template] [language] [styled-lib]

* [name]: Name of the project
* [template]: Template to use, can be: vitejs | Vitejs | Vite | vite | nextjs | Nextjs | next | Next | cra | create-react-app
* [language]: Language to use, can be: javascript | js | jsx | --js | --jsx  | typescript | ts | tsx | --ts | --tsx
* [styled-lib]: Styled-lib to use, can be: styled-components | sc | --sc | stitches | --stitches

example:

I am automatically resolving the names, so you can enter the app name with spaces.
    
    npx create-rivas-react my-first-app

    npx create-rivas-react my-first-app vitejs

    npx create-rivas-react my-first-app nextjs --js

    npx create-rivas-react my-first-app nextjs --ts --styled


## Pre Build components

### Atoms
* Title
* Text
* Button
* Container
* Grid
  * Row
  * Col
* Checkbox
* GoogleButton
* Input
* Image
* Form
  * Form
  * FormItem
* Loading

## Molecules
* HeadAllComponents

## Organisms
* AllComponents

## Templates
* Home

## Hooks
* useModal: Hook for admin open modal, toggleState, closeModal, openModal. 

      const {
        isOpen,
        openModal,
        closeModal,
        toggleModal
      } = useModal();

* useScrollPosition: Hook for return scroll to bottom, util for change navbar in to scroll.

       const { detached } = useScrollPosition();

* useStorage: Hook for save data in localStorage or sessionStorage.

       const KEY_TO_SAVE = 'data-store';
       const type = 'local'; // or 'session'
       const { setItem, getItem, removeItem } = useStorage(KEY_TO_SAVE, { type });


## Utils
* storage: Function that returns setItem, getItem, removeItem, useful to store data in localStore and parse data to save; 

      import { storage } from '@/utils/storage'

## File System Tree
There may be light differences in pages if the project is built in Nextjs or Vitejs/CRA

### Javascript

```
.
├── README.md
├── jsconfig.json
├── next.config.js                  # optional if project is with Nextjs
├── package.json
├── public
│ ├── favicon.ico
│ ├── logo-dark.svg
│ └── logo.svg
└── src
    ├── components
    │ ├── Atoms
    │ │ ├── Button
    │ │ │ ├── Button.jsx
    │ │ │ ├── index.js
    │ │ │ └── style.js
    │ │ ├── Checkbox
    │ │ │ ├── Checkbox.jsx
    │ │ │ ├── index.js
    │ │ │ └── style.js
    │ │ ├── Container
    │ │ │ ├── Config.js
    │ │ │ ├── Container.jsx
    │ │ │ ├── index.js
    │ │ │ └── style.js
    │ │ ├── Form
    │ │ │ ├── Form.jsx
    │ │ │ ├── FormItem.jsx
    │ │ │ ├── index.js
    │ │ │ └── style.js
    │ │ ├── GoogleButton
    │ │ │ ├── GoogleButton.jsx
    │ │ │ ├── index.js
    │ │ │ └── style.js
    │ │ ├── Grid
    │ │ │ ├── Col.jsx
    │ │ │ ├── Row.jsx
    │ │ │ ├── RowContext.jsx
    │ │ │ ├── index.js
    │ │ │ └── responsiveObserve.js
    │ │ ├── Input
    │ │ │ ├── Input.jsx
    │ │ │ ├── Search.jsx
    │ │ │ ├── index.js
    │ │ │ └── style.js
    │ │ ├── Loading
    │ │ │ ├── Loading.jsx
    │ │ │ ├── index.js
    │ │ │ └── style.js
    │ │ ├── Text
    │ │ │ ├── Text.jsx
    │ │ │ ├── index.js
    │ │ │ └── style.js
    │ │ └── Title
    │ │     ├── Title.jsx
    │ │     ├── index.js
    │ │     └── style.js
    │ ├── Molecules
    │ │ └── HeadAllComponents
    │ │     ├── HeadAllComponents.jsx
    │ │     └── index.js
    │ ├── Organisms
    │ │ └── AllComponents
    │ │     ├── AllComponents.jsx
    │ │     ├── index.js
    │ │     └── style.js
    │ └── Template
    │     └── Home
    │         ├── Home.jsx
    │         ├── index.js
    │         └── style.js
    ├── config
    │ └── routes.js
    ├── context
    │ ├── AppTheme.jsx
    │ └── AuthContext.jsx
    ├── hooks
    │ │ ├── useFlexGapSupport.js
    │ │ ├── useModal.js
    │ │ ├── useScrollPosition.js
    │ │ └── useStorage.js
    ├── layout
    │ ├── PrivateRoute.jsx
    │ └── PublicRoute.jsx
    ├── pages
    │ ├── 404.jsx
    │ ├── _app.jsx                     # optional if project is with Nextjs
    │ ├── _document.jsx                # optional if project is with Nextjs
    │ ├── app
    │ │ └── index.jsx
    │ ├── auth
    │ │ └── Logout.jsx
    │ └── index.jsx
    ├── styles
    │ ├── global.js
    │ ├── grid.css
    │ └── theme.js
    └── utils
        └── storage.js
```

### Typescript

```
.
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── jsconfig.json
├── next-env.d.ts                        # optional if project is with Nextjs
├── next.config.js                       # optional if project is with Nextjs
├── package.json
├── public
│ ├── favicon.ico
│ ├── logo-dark.svg
│ └── logo.svg
└── src
    ├── components
    │ ├── Atoms
    │ │ ├── Button
    │ │ │ ├── Button.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ ├── Checkbox
    │ │ │ ├── Checkbox.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ ├── Container
    │ │ │ ├── Config.ts
    │ │ │ ├── Container.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ ├── Form
    │ │ │ ├── Form.tsx
    │ │ │ ├── FormItem.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ ├── GoogleButton
    │ │ │ ├── GoogleButton.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ ├── Grid
    │ │ │ ├── Col.tsx
    │ │ │ ├── Row.tsx
    │ │ │ ├── RowContext.tsx
    │ │ │ ├── index.ts
    │ │ │ └── responsiveObserve.ts
    │ │ ├── Image
    │ │ │ ├── Imagen.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ ├── Input
    │ │ │ ├── Input.tsx
    │ │ │ ├── Search.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ ├── Loading
    │ │ │ ├── Loading.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ ├── Text
    │ │ │ ├── Text.tsx
    │ │ │ ├── index.ts
    │ │ │ └── style.ts
    │ │ └── Title
    │ │     ├── Title.tsx
    │ │     ├── index.ts
    │ │     └── style.ts
    │ └── Molecules
    │ ├── Organisms
    │ │ └── AllComponents
    │ │     ├── AllComponents.tsx
    │ │     ├── index.ts
    │ │     └── style.ts
    │ └── Template
    │     └── Home
    │         ├── Home.tsx
    │         └── index.ts
    ├── config
    │ └── routes.ts
    ├── context
    │ ├── AppTheme.tsx
    │ └── AuthContext.tsx
    ├── hooks
    │ ├── useFlexGapSupport.ts
    │ ├── useModal.ts
    │ ├── useScrollPosition.ts
    │ └── useStorage.ts
    ├── layout
    │ ├── PrivateRoute.tsx
    │ └── PublicRoute.tsx
    ├── pages
    │ ├── 404.tsx
    │ ├── _app.tsx                               # optional if project is with Nextjs
    │ ├── app
    │ │ └── index.tsx
    │ ├── auth
    │ │ └── Logout.tsx
    │ └── index.tsx
    ├── styles
    │ ├── global.ts
    │ ├── grid.css
    │ └── theme.ts
    └── utils
        └── storage.ts
```

Created with love ❤️ by **rivaslive**
