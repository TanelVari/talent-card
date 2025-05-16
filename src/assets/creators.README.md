## Prompt for dummy data

I'm creating a small database for digital creators. for that I need some dummy data with person details. generate me a json file inside /src/assets in the file creators.json with 15 dummy persons. every person/creator has to have following properties in json:
- name
- avatar/Image name (create this from person name, i.e. Alex Altman has image file as alex-altman.png). if you can, generate those image assets as well for every person under /src/assets/avatars
- age
- gender
- pronouns
- location (keep it simple and only use random US locations)
- an array about their presence in digital social media platforms (handle and number of followers. followers can be anywhere from couple of thousands to couple of millions. don't round the numbers). social media platforms should be Youtube, Snapchat, Instagram and tik-tok. not every person has to have all four, but not less than two. let most of the creators have 4 platforms, a little bit less have 3 platforms and couple of them 2 platforms.
- since they are digital creators / influencers, generate some bio for each one of them as well while describing what they might be doing in this business. keep the bio  creative but not nonsensical. keep it not too long (approx 4-10 sentences). bio should reflect what content they are creating and on which walk of life
- an array of tags which reflect what they do (you can derive those from their bio)
