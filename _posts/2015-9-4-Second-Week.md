---
layout: post
title: Second Week
---

This was the first full week of Object Oriented Programming and I still feel like the class is getting our feet wet before we ramp up later. Our current project and discussions have largely revolved around the various toolsets that we will be using for the rest of the class. Our first assignment, for example, is to program the Collatz Conjecture with an implemented cache. Programmatically, this is an incredibly simple and easy project. The difficulty arises when learning so many previously unfamiliar tools.
<br>
<br>
The first step, to setup a C++ environment, took me some time and proved quite arduous. I have decided to program in Windows and test in Linux so I had to setup my environment in both places. Linux took me about five minutes to install all necessary packages (gtest, g++-4.8, doxygen, valgrind, etc.) but Windows fought me before working. And. It. Fought. Hard.
<br>
<br>
Using Cygwin, I installed g++. This automatically fetched 4.9, the latest available to Cygwin. After finding how to revert to an older version (4.8), Cygwin and my other terminals ignored my newly installed 4.8, deciding to instead use 4.7. After many hours I found this was due to CodeBlocks automatically installing MinGW which, in turn, automatically came with G++ 4.7. Deleting this and trying to run make check still did not work. The make file assumed g++ was called g++-4.8 and, in this case, it was called g++. After navigating the installed packages and finding g++ within Cygwin, I copied and renamed g++ to g++4.8 which finally worked. Now I can compile C++ on Windows. I got everything else to work as well with one exception. Gtest would not work. I found a tutorial hack to set up gtest but it did not work. This is why I will be testing in Linux but developing in Windows.
<br>
<br>
<strong>Tip of the week</strong>
<br>
Go ahead and spend the initial (often painful) overhead of setting up a great developing environment. You only set it up once but will use it for (potentially) months.