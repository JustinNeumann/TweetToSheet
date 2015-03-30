Get a slim "Twitter Streaming API to Google Spreadsheet on Windows Azure Website integration scenario" ready to run!

1.Get an GitHub account. Fork this project into your own project.
2.Get an Windows Azure account. Create a Website in the freely available version and use your GitHub project as the linked source control.
3.Enter your access information stating your Google's (application-specific) password (to obtain from your Google account) in the app.js
4.Enter your private/public spreadsheet key (from your spreadsheet url) in the app.js
5.Enter your Twitter consumer key/secret, and access token key/secret in the app.js
6.Finally you have to write the following headers into the top row of your spreadsheet (keep in order in order to match Twitter Streaming API JSON)

created-at	id-str	text	source	truncated	in-reply-to-status-id	in-reply-to-status-id-str	in-reply-to-user-id	in-reply-to-user-id-str	in-reply-to-screen-name	user	geo	coordinates	place	contributors	retweet-count	favorite-count	entities	favorited	retweeted	possibly-sensitive	filter-level	lang	timestamp-ms