import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mt-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <span className='fw-bold fs-5'>What is cors?</span></Accordion.Header>
                    <Accordion.Body>
                        <span className='text-secondary fw-semibold'>CORS</span> or Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><span className='fw-bold fs-5'>Why are you using firebase? What other options do you have to implement authentication?</span> </Accordion.Header>
                    <Accordion.Body>
                        <span className='text-secondary fw-semibold'>Reason of using Firebase:</span> <ul>
                            <li>Being able to authenticate our users securely, it offers a customized experience to them based on their interests and preferences.</li>
                            <li>We can ensure that they have no problems accessing their private data while using our app from multiple devices.</li>
                            <li>Firebase Authentication provides all the server-side stuff for authenticating the user. Firebase Authentication becomes easy with SDK. It makes API easy to use.</li>
                            <li>Firebase Authentication also provides some user interface libraries which enable screens for us when we are logging it</li>
                            <li>Firebase authentication supports authentication using a password, phone numbers, popular identity provider like Google, Facebook, and Twitter, etc.</li>
                        </ul>
                        <span className='text-secondary fw-semibold'>Authentication implementation:</span> <ul>
                            <li>Add and initialize the Authentication SDK.</li>
                            <li>(Optional) Prototype and test with Firebase Local Emulator Suite.</li>
                            <li>Sign up new users.</li>
                            <li>Sign in existing users.</li>
                            <li>Set an authentication state observer and get user data.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><span className='fw-bold fs-5'>How does the private route work?</span></Accordion.Header>
                    <Accordion.Body>
                        <span className='text-secondary fw-semibold'>The private route component</span> is similar to the public route, the only change is that redirect URL and authenticate condition.

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><span className='fw-bold fs-5'>What is Node? How does Node work?</span></Accordion.Header>
                    <Accordion.Body>
                        <span className='text-secondary fw-semibold'>Node.js</span> is an open-source backend javascript runtime environment.
                        <br /> <span className='text-secondary fw-semibold'>Working process:</span> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;