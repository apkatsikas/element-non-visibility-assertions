Asserting for non-visibility can lead to false positives.

Consider how elements load asynchronously in the modern web. In this repo, [index.html](index.html) features an element with text "early", that is loaded immediately, and an element with text "late" that takes just 1/4 of a second to load. To the eye, it seems to load almost instantly, but our test, which expects that is not visibile, passes. Why? Because tools like Playwright are very fast! While checking that a once visible element disappears can be a reliable and meaningful check, testing that something was never visible can be tricky and lead to false positives.

Run `npm i && npx playwright test` to see it in action.
