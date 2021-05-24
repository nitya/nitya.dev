# Behind the Blog

I will be using the [GoHugo](https://gohugo.io/) framework for this site. Three reasons why:
 * It is a fast, open-source, static site generator.
 * It has an active community with many customizable themes.
 * I've set up a Hugo blog before, and it worked out well!

---

## Decisions

The main decisions are where to host the site, what framework and theme to use, and what kind of content it should provide. Here are my answers:

 * Host on GitHub pages initially till stable, proven
 * Use a theme with dark mode, tags, categories, timing
 * Host a blog, and also key project/content pages.

My initial choice: [hugo-clarity](https://github.com/chipzoller/hugo-clarity#features)

---

## Setup Hugo Site 

`STEP 1:` 

Install Hugo for development. I work on a Mac so I went the [homebrew route](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo).

```
$ brew install hugo
$ hugo version
hugo v0.83.0+extended darwin/amd64 BuildDate=unknown
```

`STEP 2:`

Create a new website (in www). Then add the theme dependency.

```
$ hugo new site www
$ cd www
$ git submodule add https://github.com/chipzoller/hugo-clarity themes/hugo-clarity
```


`STEP 3:`

Copy example site over as starting point. Run local server to test (validate) posts. Use "-D" option to see draft posts as well.

```
$ cp -a themes/hugo-clarity/exampleSite/* .
$ hugo -D server
```

`STEP 4:`

Configure the theme using [this guidance](https://github.com/chipzoller/hugo-clarity#configuration). Make changes in the `config/_default/config.toml` file (not in `www/config.toml`)


`STEP 5:`

Build static site for deploy. We want to have this built in `docs/` subfolder for easy GH pages hosting, so set the `publishDir` property in config.toml. Then build using this. 

Add "-D" if you want deployed site built with draft versions of docs.

```
$ hugo 
```