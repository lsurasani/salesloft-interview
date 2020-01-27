# SalesLoft Interview Challenge

###
Use the original [README](https://github.com/SalesLoft/DevelopmentInterviewStarterKit/blob/master/README.md) for initial setup.

You will need:
- A SalesLoft Authtoken (fill in your `.env` file)

###
**What this application does**

1) Uses the [SalesLoft API](https://developers.salesloft.com/api.html#!/People/get_v2_people_json) to get a list of people and displays them in a table using their name, email address, and job title.
- You can page through results
2) Shows the frequency of characters in the email addresses currently on the page
3) Shows the potential duplicate email addresses currently on the page
- Done by calculating the [Levenshtein distance](#levenshtein-distance) between the email addresses on that page.

Other things this application does well:
- It's *very* component-ized, there's a separation of concerns to a fault, if I'm being honest (I had trouble finding some components after I refactored it all :grimacing: )
- Show potential duplicates. I started out by trying to do something like `[...string1].filter(x => ![...string2].includes(x))` but I realized that this approach did a better job of telling me which email addresses had the most similar characters instead. Then, I tried to use the frequency-calculating code to narrow it down further and find which ones had frequencies of characters that were most similar, but that resulted in another variation of still just getting email addresses that have the most similar characters. Then, I tried to do a longest common substring match, but it was hard to figure out where the boundaries of that should be -- how 'long' is long enough? Finally, I found myself wishing I could just do a SQL `LIKE` operator which brought me to fuzzy matching, then some wikipedia articles later, to Levenshtein distance. 

###
**What this application could do better**

1) **Testing**: I would've liked to add some component tests to the components using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and some api call tests using [VCR](https://github.com/vcr/vcr)

2) **Error Handling**: React provides some pretty handy ways to add [Error boundaries](https://reactjs.org/docs/error-boundaries.html) and I didn't use any of them :frowning:

3) **Take more advantage of Redux**: My Redux is quite rusty and I spent some time brushing up on it, but unfortunately didn't take full advantage of it, especially for handling the async API calls (for example, [this](https://github.com/lsurasani/salesloft-interview/blob/master/client/src/components/people-page/index.js#L59) would've been a good place to use Redux to handle a situation where I didn't have all of the data yet)

## Levenshtein Distance

The Levenshtein distance can be described as the distance between two words, measured by the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word to another.

For example, the Levenshtein Distance between the words "rat" and "cat" is 1, because you just need to change the "r" to a "c".

Similarly, the Levenshtein Distance between the words `sunday` and `runaway` is 3:

sunday => **r**unday

runday => run**w**ay

runway => run**a**way

The words sunday and runaway are pretty far from each other for human error, despite having such a low Levenshtein distance, so I limited the "suggested duplicates" to words that had a distance of at most, 2, though even that may be too high.

## Notes

I took a lot of notes during this process and had some planning notes, all of which can be found in the Wiki.
