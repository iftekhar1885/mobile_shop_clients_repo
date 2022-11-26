import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">This Is Blog Section</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">1. What are the different ways to manage a state in a React application?</summary>
                        <div className="px-4 pb-4">
                            <p>The Four Kinds of React State to Manage
                                When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                                There are four main types of state you need to properly manage in your React apps:

                                1.Local state
                                2.Global state
                                3.Server state
                                4.URL state</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">2. How does prototypical inheritance work?</summary>
                        <div className="px-4 pb-4">
                            <p>How does prototype inheritance work?
                                Image result for How does prototypical inheritance work?
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">3.What is a unit test Why should write unit tests?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">4. React vs. Angular vs. Vue?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                                React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                                React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;