source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'puma', '~> 3.11'
gem 'rails', '~> 5.2.0'
gem 'sqlite3'
gem "webpacker"

gem 'bootsnap', '>= 1.1.0', require: false

# gem 'jbuilder', '~> 2.5'
# gem 'bcrypt', '~> 3.1.7'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # gem 'capistrano-rails', group: :development
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end
