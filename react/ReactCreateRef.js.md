## ReactCreateRef.js

### export
```js
export function createRef()
```

#### createRef
```js
export function createRef() {
  const refObject = {
    current: null,
  };
  if (__DEV__) {
    Object.seal(refObject);
  }
  return refObject;
}
```
只返回了一个对象。如果在DEV中，则直接冻结这个对象