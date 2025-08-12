source "https://rubygems.org"

platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data", "~> 1"
end

gem "wdm", "~> 0.2", install_if: Gem.win_platform?

gem "jekyll", "~> 4"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem 'jekyll-paginate-v2', '~> 3.0'
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-target-blank", "~> 2.0"
end
