# LoginURL v1.0.0

Login via a `token` url parameter for react-router.

## Installation

Using npm:

```shell
$ npm i --save login-url
```

## Usage

```
import LoginURL from 'login-url';

<Router>
  <LoginURL token={'secret'}>
    <App />
  </LoginURL>
</Router>
```

![Demo](/test/demo.gif?raw=true "Demo")