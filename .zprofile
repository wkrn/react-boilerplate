eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
export PATH="$PYENV_ROOT/shims:$PATH"

if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi

export PATH="$PATH:/opt/yarn-[version]/bin"
export PATH="$PATH:`yarn global bin`"

export PATH="/usr/local/opt/openssl/bin:$PATH"

eval "$(rbenv init -)"

export PATH="$HOME/.rbenv/bin:$PATH"



export PATH=$HOME/.nodebrew/current/bin:$PATH

if [ -f ~/.bashrc ]; then
    . ~/.bashrc
fi

export PATH="$HOME/.node_modules_global/bin:$PATH"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"

if which ruby >/dev/null && which gem >/dev/null; then
  PATH="$(ruby -r rubygems -e 'puts Gem.user_dir')/bin:$PATH"
fi

export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

export PGDATA=/usr/local/var/postgres
export PATH=$PATH:/usr/local/Cellar/gettext/YOUR_VERSION/bin

export PATH=/usr/local/Cellar/git:$PATH


export PATH=$HOME/.nodebrew/current/bin:$PATH

export PATH=$PATH:./node_modules/.bin

alias git='LANG=en_GB git'

