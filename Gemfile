source "https://rubygems.org"

gem "jekyll"
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem 'jekyll-target-blank'
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?
end
