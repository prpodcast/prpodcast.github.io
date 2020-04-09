# PR Podcast

<div dir="rtl"></div>

### Installation
```
brew upgrade ruby
brew link --overwrite ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
gem install --user-install bundler jekyll 
gem install jalalidate
gem install jekyll-paginate 
```

### Running
- Build: `jekyll build --watch`
- Serve: `jekyll serve --host 0.0.0.0 --incremental --watch`
