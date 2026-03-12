source 'https://rubygems.org'

# ── Local development ─────────────────────────────────────────────
gem 'jekyll', '~> 4.3.2'  # pinned to 4.3.x for Ruby 4.0 compat
gem 'webrick'              # required for Ruby 3.0+

# ── GitHub Pages deployment ───────────────────────────────────────
# To deploy via GitHub Pages, comment out the two lines above and
# uncomment the line below (exact gem versions are managed for you):
# gem 'github-pages', group: :jekyll_plugins

group :jekyll_plugins do
  gem 'jekyll-seo-tag', '~> 2.8'
  gem 'jekyll-sitemap', '~> 1.4'
  # jekyll-feed omitted — pulls in http_parser.rb which doesn't
  # compile on Ruby 4.0; add back if you switch to Ruby 3.x
end
