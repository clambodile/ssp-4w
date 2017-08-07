# When using git, what exactly do people mean when they talk about "the SHA-1"? How is that related to how git works?

Git is designed to provide an absolute assurance that one person's version of a given codebase is exactly the same as another person's version of a given codebase, at the same revision.

In order to provide this assurance, Git relies heavily on hashing both data (the files themselves) and metadata (such as commit descriptions).

### What's hashing

Remember what "hashing" is -- it's converting an arbitrarily-large input to a small (fixed-length) output in a one-way manner. This is different from encryption, in that an encrypted item can be decrypted.

Git uses the SHA-1 hashing mechanism. SHA-1 converts any string into a 40-character string.

### Git hashes the world

Using SHA-1, git hashes all kinds of things. It hashes the files themselves, it hashes the directory trees that those files live in, it hashes previous commits, it hashes the current commit, and various other bits of metadata.

At each pass of processing, it keeps feeding those hashes in as inputs into other hashes, recursively.

In the end, you get a single commit hash, that represents the full "state of the world" at that time.


# Practically speaking, how does git rebase function vs git merge?

### git rebase
The `git rebase` command "replays" your local commits *after* the newly-pulled-down HEAD. This "rewrites history", creating new commits. Because the commit history before each of these new commits is different than it originally was, and because commit history is one of the inputs in the hashing that occurs to compute the final SHA-1 hash for each commit, each of these new commits ends up with a new SHA-1 hash (different than it had before). 

### git merge
The `git merge` command creates a "merge commit" wherein, as the name suggests, a [3-way merge](http://www.drdobbs.com/tools/three-way-merging-a-look-under-the-hood/240164902) automatically takes place. No "rewriting of history" takes place. The existing branches are left untouched.

### Both git merge and git rebase can trigger 3-way merging
In either style of integrating your changes into a branch, conflicts with previous commits can occur. Those conflicts are resolved in the same way (search for conflict markers).

### Pros and cons

`git rebase` results in a much cleaner commit history. `git merge` litters the commit history with merge commits.

`git rebase` is an invasive operation. If you are working on a shared branch, it is possible to screw over your teammates by rewriting history and pushing that back out to them. The SHA-1 hashes won't match their local copies anymore, and chaos ensures. 

`git merge` is safe, in that respect. It's less likely to create conflicts, and because history is preserved, it's easier to see what happened.

The safe way to use `git rebase` is to only use it on local, private branches, to pull in upstream or remote changes and keep your own changes at the tip of a freshly-updated branch. Thus you can keep up with teammates' changes while maintaining a clean, linear history. 

