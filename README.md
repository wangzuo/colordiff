[![Build Status](https://travis-ci.org/wangzuo/colordiff.svg?branch=master)](https://travis-ci.org/wangzuo/colordiff)

# colordiff
wrapper for diff with color output

[![NPM](https://nodei.co/npm/colordiff.png?compact=true)](https://nodei.co/npm/colordiff/)

## Installation
``` sh
npm install colordiff -g
```

## Usage
``` sh
colordiff new original # wrap
diff new original | colordiff # piping
```
svn diff (~/.subversion/config)
``` diff
- # diff-cmd = diff_program (diff, gdiff, etc.)
+ diff-cmd = colordiff
```
