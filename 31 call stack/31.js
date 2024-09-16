/*
Certainly! The call stack is a fundamental concept in JavaScript (and other programming languages) that helps manage function execution. Here’s a brief explanation:

What Is the Call Stack?

The call stack is a stack data structure that tracks function calls in your program. It operates on a Last In, First Out (LIFO) principle, meaning the last function added to the stack will be the first one to be removed.

How It Works

1. Function Call:
   - When a function is called, a new stack frame is created and pushed onto the stack. This frame contains information about the function’s execution context, including local variables, the function’s arguments, and the point in the code where the function was called.

2. Function Execution:
   - The JavaScript engine executes the function’s code. During execution, if the function calls other functions, new stack frames are pushed onto the stack for those calls.

3. Function Return:
   - When a function completes its execution, its stack frame is popped off the stack, and control returns to the function that was executing before it. The result of the function (if any) is returned to the calling function.

4. Stack Overflow:
   - If functions call each other indefinitely (e.g., through recursion), the stack can grow too large, leading to a stack overflow error. This occurs because there is a limit to the stack size, and exceeding it results in an error.

Example

Here’s a simple example to illustrate how the call stack works:

*/
function first() {
  console.log('First function');
  second();
}

function second() {
  console.log('Second function');
  third();
}

function third() {
  console.log('Third function');
  // first();                    // Call first() again, causing a stack overflow error. (Maximum call stack size exceeded)
}

first();
/*
Recursion:
is a programming technique where a function calls itself in order to solve a problem. A recursive function typically breaks down a problem into smaller, more manageable subproblems, eventually reaching a base case that terminates the recursion.

How It Works
Base Case: The condition under which the recursion stops. It is crucial to prevent infinite recursion.
Recursive Case: The part of the function where it calls itself with modified arguments to progress toward the base case.
*/


/*

#Call Stack Execution:

1. Call first():
   - The first function is pushed onto the stack.
   - first calls second, so second is pushed onto the stack.

2. Call second():
   - The second function is now on top of the stack.
   - second calls third, so third is pushed onto the stack.

3. Call third():
   - The third function is now on top of the stack.
   - third completes and is popped off the stack.

4. Return to second():
   - Execution returns to second, which completes and is popped off the stack.

5. Return to first():
   - Execution returns to first, which completes and is popped off the stack.

The call stack now returns to being empty.

Summary

- The call stack manages function calls and execution in a LIFO manner.
- Stack frames are pushed onto the stack when functions are called and popped off when functions return.
- Stack overflow errors occur when the call stack grows too large, often due to infinite recursion.

Understanding the call stack is crucial for debugging and optimizing code, especially when dealing with recursive functions and asynchronous operations.*/
