1. What problem does the context API help solve?

Context API prevents the need to drill props. It allows you to store data on an object (aka context object) and then grab that data without using props. We are passing information through the component tree without manually passing props at all levels. Typically, data is shared from top-down using props with numerous components. Context allows us to share these values between components without passing props through every level of the component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

I recently read a blog that used an interesting analogy to explain this.
We can think of of a redux app as a human body. The state/store is the BRAIN where everything is stored. Reducers act like a brain stem where‘types’ and ‘actions’ arrive and are sorted before being stored in the brain. Actions are like the wires for nervous system. They take in dispatched information (electrical impulses) and communicate to the reducers (brain stem). Side-note: the face in front of our brain is our UI component(s).

The store is basically an object that holds the state of our application. The reducer is a function that returns our state data (triggered by an action type). Actions are objects that inform the reducer on how to change state. We use action ‘types’ and payload properties to accomplish this.

The store is the single source of truth in that the only way we change data in UI (face) is by dispatching actions that change state in the reducer (brain stem). Our components then watch the reducer for changes. The UI (face) then changes as well. This does not work the other way around- meaning it is the single source of truth.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global. Meaning, any component can access it if they are connected. Component state is local and state is only in that specific component. It is only updated in that component and is passed to its children by using props.  
Application state is better used for larger applications. This prevents/reduces prop drilling and messy code. Component state is better for smaller applications where passing prop passing is easier to follow.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Asynchronous = (of two or more objects or events) not existing or happening at the same time.
In Redux the Reducers are synchronous by default. This is troublesome if we need to communicate with an external API.  
We need middleware to handle asynchronous requests. Middleware sits between an action being dispatched and the action reaching the reducer.
Redux-thunk is a node package (middleware) for calling action creators that return a function to us instead of an action object. This function gets the store’s dispatch method that is used for dispatching synchronous actions within the function once the asynchronous operations are finished.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API seems a bit easier to grasp. However, I am not saying I like redux more, I just enjoy the challenge and am starting to feel more comfortable with it. I just want to get more experienced with it because I feel that if I can someday master Redux, I can master almost anything in software development.
