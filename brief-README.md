
### Task 3: Project Requirements

Your finished project must include all of the following requirements. **Unlike other projects, the local server used here can not be accessed through the browser. It is started automatically and without the need for starting a server.js file. Feel free to ignore any messages related to MSW or mock service workers. For this and the rest of your sprint challenges, test the functioning of the server directly through your http calls.**

#### Authentication
> *Build a login form to authenticate your users along with all the components and utilities needed to support authentication.*

* [ ] In `Login.js`, build all UI and state functionality needed to capture a username and password.
* [ ] **Make sure that the input for your username and password includes the data-testid="username" and data-testid="password" attributes. These are needed for codegrade testing and codegrade autotests will fail without them.**
* [ ] Build in functionality that would allow an error to be displayed in the provided p tag if either the username or password is incorrect.
* [ ] Construct an http request that retrieves an auth token from the server when the username `Lambda` and the password `School` is passed into the request.
* [ ] Save the token to localStorage.
* [ ] Build a `axiosWithAuth` module within the helpers folder to create an instance of axios with the authentication header.
* [ ] Build a `PrivateRoute` component within the components folder and use it to protect the route that renders the `BubblesPage` component.
* [ ] In `App.js`, build the backend to the logout button. When pressed, send an http request to the logout endpoint and remove the authentication token from localStorage.

#### Consuming the API
> *Add in the http requests and state changes needed to connect our api to the web application. Consider the effect of authentication on your api requests.*

* [ ] In `services/fetchColorServices.js`, build out fetchColorService function to make a GET request to fetch the color data for your bubbles.
* [ ] When `BubblePages` mounts, call fetchColorServices and save it's result in state.
* [ ] In `BubblePage.js`, complete `saveEdit`, and `deleteColor` functions to make API requests for to editing and delete data.
* [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

#### Testing
* [ ] Finish the test in `Color.test.js`, `ColorList.test.js`, `BubblePage.test.js`. You will need to use rerendering, function mocking and spies in order to complete.

**Notes:**
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not change your `package.json` file except to install additional libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.
