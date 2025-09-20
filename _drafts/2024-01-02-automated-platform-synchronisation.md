---
title: Automated Platform Synchronisation
---
### Introduction
I had several goals in mind when I created this website, one of them being what I decided to call _automated platform synchronisation_.

_Automated platform synchronisation_ is my idea of there being a single source of truth for every profile page I associate with it.
These associated pages I would like to call _secondaries_, with the source of truth being considered _primary_.
When I make a modification to my primary, these changes should be reflected to all secondaries automatically.

Within this post, I will take a deep dive into building said system, with, for now, two secondaries: GitHub and LinkedIn.
I aim to build the system as modular as possible, so that at a later date, more secondaries may easily be added.
As primary source (source of truth), I consider my personal website ([jortvanleenen.nl](https://jortvanleenen.nl)).

## Primary
For my personal website to act as a primary, it needed to have an easy method for me to get the necessary information from it.
I considered multiple alternatives, for example:
- RSS feeds: I decided against this, as not every piece of information I might want to gather naturally goes well with an RSS feed;
- Page modifications/manual extraction: I could create a special page or (hidden) data structure in an attempt to make data extraction easier.
  I disliked that idea as it would mean I had to duplicate data and/or do manual work. I gave preference more of a set-and-forget solution.

In the end, the only thing I could think of that was relatively easy to implement and would work across the board for numerous types of data, was parsing the HTML DOM from my webpage(s).
At the moment of writing this, I had various 

## Secondaries
As mentioned before, I am looking for a set-and-forget solution, without any manual intervention.
Therefore, I need a way to programmatically interact with my secondaries, GitHub and LinkedIn: REST API's!

