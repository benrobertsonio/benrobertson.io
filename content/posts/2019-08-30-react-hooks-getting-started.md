---
layout: post
author: Ben Robertson
title:  "Getting Started with React Hooks"
date:   2019-08-30 00:00:00 -0500
categories: frontend
snippet: "How to get started with React hooks and write cleaner code."
path: /frontend/react-hooks-getting-started
---

Code wise, the coolest thing I've learned over the summer is how to implement React hooks. I've been using it on a new client Gatsby site, and I think hooks have the potential to really clean up the codebase over what I would write with typical class components.

## useState

The simplest implementation I have so far is using the `useState` hook. This is a really easy way to add state to a component without making it a class.

An example of this is making an input a controlled component. Here's how simple it can be:

```jsx
const TextInput = ({ id, label }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </>
  )
}
```

We call `useState`, passing in an empty string as the default value of our input. `useState` returns an array containing `value`, our new state property, and `setValue`, a method for updating that state property.

We add an `onChange` handler like we would normally, but we can pass our `setValue` method to it instead of having to create our own handler. Whenever the input changes, the value of the input gets sent to `setValue`, creating a new `value`.

We pass our `value` into the value of the input, which keeps the input always up to date.

Overall I think this makes for a much cleaner controlled input.

## useEffect

The other hook I've been messing with is the useEffect hook. This hook is for performing "side effects" in function components (according to the [React docs](https://reactjs.org/docs/hooks-effect.html)). The docs give a few examples of what a side effect is: data fetching, setting up a subscription, and manually changing the DOM.

I've found a couple use cases for this hook so far.

### Manipulating the DOM

A common pattern I work with is a mobile menu that takes over the screen when it is open. When the menu is open, I often find it necessary to prevent scrolling behind the menu and achieve this by adding `position: fixed` to the `<body>`.

Since this is changing the DOM, this is a great example of when you could use the `useEffect` hook.

Here's how I implemented it.

I have a `<MobileNav />` functional component that only renders when the mobile menu is open (ie, when a user clicks on a Menu button). Without hooks, I would achieve this by calling `document.body.classList.add('fixed')` inside of `componentDidMount`, and `document.body.classList.remove('fixed')` inside of `componentWillUnmount`.

With `useEffect`, I can encapsulate this entire workflow:

```js
useEffect(() => {
  // Add a class to the body.
  document.body.classList.add('fixed');

  return () => {
    // Remove the class from the body.
    document.body.classList.remove('fixed');
  };
}, ['fixed']);
```

`useEffect` takes a function that optionally returns a function. The function is called when component mounts, and if you've returned a function, that returned function is called on unmount. So in this example, `document.body.classList.add('fixed');` is called when the component mounts, and `document.body.classList.remove('fixed');` is called when the component unmount.

The second parameter `['fixed']`, is a way to optimize performance. Effects are called on every render, and that can create a performance problem, depending on the amount or kind of effects you are performing. React will compare the value to the previous value it received and if they are the same, the hook will not run.

We can abstract this a little further so we can reuse this hook in multiple components:

```js
const useBodyClass = (className) => {
  useEffect(() => {
  // Add a class to the body.
  document.body.classList.add(className);

  return () => {
    // Remove the class from the body.
    document.body.classList.remove(className);
  };
  }, [className]);
};
```

Now I can call `useBodyClass('someClassName');` inside of any functional component and that class name will be added and removed from the body when the component mounts or unmount.

### Adding and Removing Event Listeners
Sometimes I end up with components that need to render different components based on the size of the browser window. This happens usually in a navigation or something, where we serve a different component to smaller screens.

In order to do this, I typically add an event listener on the window for the resize event in `componentDidMount`, and remove the event listener in `componentWillUnmount`. This means I have to convert my component to a class component if it wasn't one already, and add three new methods to it:

- componentDidMount
- componentWillUnmount
- handleResize (for handling the resize logic)

(Since most of the time I am writing React I am writing Gatsby / server rendered, I have to be careful to only reference window in componentDidMount)

Since all the component really cares about is the window width, this is a pretty good candidate for something that can be abstracted out, and it will cut down on boilerplate in other components if they need to reference the window width too.

Here's what I ended up with:

```js
const useWindowWidth = () => {
  // Set a default width for static rendering.
  // If window is undefined, we will use this value as a default.
  let defaultWidth = 900;

  // Window is only defined in the browser.
  if (typeof window !== 'undefined') {
  defaultWidth = window.innerWidth;
  }

  // Create a width state property and a method to setWidth with.
  // Set width to the default value.
  const [width, setWidth] = useState(defaultWidth);

  // Add / remove an event listener for window resize.
  useEffect(() => {
    // define an event handler so it can be added and removed.
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  // Return the width state value.
  return width;
};

```

When you use the `useEffect` hook, you pass in a function that performs the side effect you want to happen. For us, we passed in a function that creates a resize handler, and then adds an event listener to the window that uses this method.

We also return a function from our function. Returning a function from `useEffect` is optional, but lets you perform cleanup, like you would do with `componentWillUnmount`. In our case, if the component we use `useWindowWidth` inside of unmounts, we don't need the event listener hanging around, so we remove it.

To make this reusable, I've defined it all inside of a `useWindowWidth` method that I can call inside of any functional component that returns the width value!

## Other hooks

These aren't the only hooks out there, but I've found them to be enough to get started and help my React code stay a lot cleaner. This should be enough to get you started before getting into some of the more advanced use cases. The `useContext` hook has also really helped clean up a lot of the boilerplate code you end up with when using React context. You can check out the more advanced hooks like `useReducer`, `useCallback`, etc in the [React Hooks documentation](https://reactjs.org/docs/hooks-reference.html#additional-hooks).
