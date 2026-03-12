# Installation

To run this Jekyll site locally, ensure you have Ruby and Jekyll installed. Then:

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

# Customization

## Update Site Information

Edit `_config.yml` to:
- Change your name and email
- Add social media usernames
- Update the site title and description

## Create New Pages

Add new `.md` files in the root directory with front matter:

```yaml
---
layout: page
title: Your Page Title
permalink: /your-page/
---
```

## Create Blog Posts

Add posts to the `_posts` directory following the naming convention: `YYYY-MM-DD-title.md`

```yaml
---
layout: post
title: Post Title
date: YYYY-MM-DD
author: Your Name
---
```

## Add CV

Place your CV file (`cv.pdf`) in the root directory and it will be linked in the navigation.

# Structure Overview

- `_includes/` - Reusable HTML components (header, footer)
- `_layouts/` - Layout templates (default, page, post, home)
- `_posts/` - Blog post files
- `assets/css/` - Stylesheets
- `assets/images/` - Image assets
- `_config.yml` - Site configuration
