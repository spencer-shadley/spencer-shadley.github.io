---
layout: post
title: Ninth Week
---

Another hectic week! This week has been quite busy for me and interviews are taking full force. I had my first flying out interview (albeit only to Dallas) and the process took out my entire weekend (Thursday through Sunday). As a result, I am playing catch up in all of my classes right now. In Object Oriented Programming we discussed how to set default values for arguments and implemented vector.
<br><br>
The default arguments setup in C++ is really fascinating and is something I have not seen in other languages. I am continually impressed by the amount of flexibility C++ offers. Vector was much trickier than I anticipated. We templated even the Allocator so that someone can specify their own allocator for vector if they so wish (defaulted to the std::allocator). In vector, we also took quite a bit of time to ensure that the default constructor was not called twice (bringing complexity from O(2N) to O(N) on initialization). We briefly discussed the complexities of the copy constructor as compared to the assignment operator and why we would want to use one over the other. It was also discussed on how we would template some of the standard C++ collections and policy patterns in C++. We discovered, for example, that a Queue does not allow a vector as its underlying data structure since that would be so inefficient.
<br><br>
Our allocator project was due on Thursday and was a bit of a struggle to complete due to interviews constantly intervening as well as one midterm. I worked on the project solo for the first time but managed to get it done a bit early.
<br><br>
<strong>Tip of the week</strong>
Make sure to generalize every solution you create since you never know what future applications you may want from it.
