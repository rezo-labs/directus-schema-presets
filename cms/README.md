# Schema for Content Management System

## Collections

Consist of 4 main collections:
1. post
2. post_type
3. collection
4. tag
5. stats

And 1 junction collection:
1. post_tag

## Import

1. Create a folder `CMS`.
2. If none of the above collections have already been created, import the content of `all.json`. Otherwise, import collections with the following order: `collection` -> `tag` -> `stats` -> `post_type` -> `post` -> `post_tag`.
