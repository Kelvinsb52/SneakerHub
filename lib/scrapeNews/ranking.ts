/* 
Given: Dataset of items with a certain set of features scraped from X.
Goal: figure out the weight(importance) of each feature to sort items by popularity

I think what I am currently looking for is papers that tell me the ground truth features(How it was determined something was popular) 
used to predict popularity.
It follows then that the authors of this paper will find items and ways to collect the ground truth features of these items.
Then they will train weights to correctly predict based on the item's ground truth features.

It follows that I should then try to collect as many of these ground truth features, to predict popularity, of my dataset.
And train weights to predict popularity. 

Here is a potential problem. Lets say the paper I am basing my ground truth features on is predicting popularity for slightly different items.
For example, they are predicting popularity for the shirts, pants, and shoes of a the gen z, millenial and gen x market.

But the items in my dataset that I am trying to predict popularity for are for a niche market which is the sneaker and streetwear for gen Z market.

How can I demonstrate that that the ground truth features of that papers will transfer over to the items in my dataset.

I think where I am at now I have two options, create my own dataset with labels in order to learn weights for features of my X scraped data.
Or I can use transfer learning, from a dataset in a similar domain, and either train it on my dataset which is going to be unsupervised learning or simply use the 
weights as is.

*/