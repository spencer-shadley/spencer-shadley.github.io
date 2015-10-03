---
layout: post
title: Sixth Week
---

Lambda expressions galore! After hearing about all the hype surrounding Java 8’s addition of lambda expression support I finally learned what they really are. Basically, it acts as a temporary function that can be easily inlined without the frustrating overhead of declaring a function. After speaking with Professor Downing after class I discovered that I have actually been using lambda expressions for quite some time without realizing it. In JavaScript, whenever you create a function without a name (usually a callback function), those are lambda expressions. Something I found really neat with C++ lambda expressions are the ability to capture local variables for later use (of course with value and reference support as well). Once variables are added this is called a closure. We additionally focused on iterators again and even implemented our own custom iterator class (which was actually pretty easy!)
<br><br>
Aside from lambda expressions and iterators we gained more insight into const and how it has a dozen different meanings based on context in C++. Apparently you can even append const to the end of a function to signify that we will not modify the value. Other C++ oddities occurred such as finding that we actually have the ability to access/modify private variables of another object so long as they are the same type as the one we are implementing. Different function types were also explored (C functions, C++ wrappers and more). With our first test impending the stress of the class is beginning to rise as everyone anticipates the dreaded test’s arrival on Thursday.
<br><br>
<strong>Tip of the week</strong>
To help understand how to use a standard function, just implement it yourself. You will be able to remember it better and more fully understand the complexities involved with its use.