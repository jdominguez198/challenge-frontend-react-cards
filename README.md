# Challenge Frontend - React - Cards

## Introduction

To create a Single Page Application with React + Redux + redux-saga / redux-thunk.

The challenge consists in a Single Page Application with a **list of `cards`**. The `cards` should be retrieved from a JSON
remotely accessible from the Internet.

A sample JSON could be downloaded from [this URL](./server/cards.json).

You should load it in an asynchronously way. You could use any mechanism or third party lib to get the JSON, but it
should be asynchronous.

The `card` model is the following:

```
{
  _id: string,
  name: string,
  imageUrl: string,
  count: {
    total: number
  }
}
```

In the cards page, the user could perform the following **actions**:

- Delete a card.
- Editar a card.
    - Just the name and the image URL should be editable. Both are required.
    - You can't use any third party lib for the form handling.
    - This action should go to another page. After going back to the list, if there was a filter applied, the
    filter should still be applied.
- Filter the cards by name.
    - The filtered cards should be shown as the user is typing.


It is not necessary to implement any server side logic for delete, edit or filter the `cards`.

You should take into consideration the performance. Consider a hypothetical case with a million `cards` in the list,
so you have to try to make it as optimal as possible.

The website must be responsive with a minimum size of 360px.

During the interview, both the usability of the interface and the technical implementation will be discussed.

Finally, you should **send events** to two external **analytics platforms** in order to track:
- The user clicks on any button in the website. The event should be easily identify which button is clicked.
- Number of `cards` the user has.

The external analytics platforms could be two different JavaScript files than expose an interface. So, you could
just create two files (analytics1.js and analytics2.js) with the method defined below.

```
function sendEvent(eventName: string, eventProperties: Object) {
    console.log('analytics 1', { eventName, eventProperties });
}
```

The parameter eventProperties is optional.

To send the events you just have to use those methods by putting the event name you consider appropriate and the
properties you want.

**Bonus (optional)**:
- Testing
- Typescript

## Run the code

1. Use `yarn install` to download all dependencies.
2. Run `yarn server` to bring up a dummy server with the `cards.json` data as response.
3. Run `yarn start` to bring up the development server. Open http://localhost:3000 to view in the browser.
    - Run `yarn build` if you want to build a production bundle and check the performance with a static server.
    - Run `yarn server` after the build is done to serve it under http://localhost:5000
4. Run `yarn test` to launch all the tests made.
