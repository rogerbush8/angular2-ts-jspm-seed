## Angular 2 Play with jspm, typescript, system.js and gulp tasks

I used zanettin's original seed as a starting point.

## N.B.
- Currently, angular2 (beta8), jspm and Typescript do not play well together
  - Issue is Typescript does not yet have support for jspm-style module resolution.
    - Path mapping feature (not sure if this is workaround)
      - https://github.com/Microsoft/TypeScript/issues/5039
    - Here is one of the problem manifestations:
      - https://github.com/systemjs/systemjs/issues/434
    - Note #5039 seems to be targetted for Typescript 2.0, which as of 3/5/16, is
      not available.
  - Note can see that things start to fail in later versions of angular2
    when bundling is introduced.

- Because of this I'm going to temporarily change course
    - Angular 2.0 (beta 8) official Typescript tutorial works fine with npm.
    - For now, abandon loader and use a bundling strategy.
    - Bundling is de facto for production loads anyway, so as of this moment
      JSPM incrmental loading strategy (in absence of HTTP/2 far future),
      merely helps development.
    - Reiterating, current strategy is to preference Angular2 and Typescript
      and ignore the JSPM loader.
 
## Credits & Thanks
- https://github.com/zanettin/angular2-seed-jspm

## Tooling
- angular
- jspm
- systemjs
- typescript

## Installation
- npm install -g typescript tsd gulp
- git clone this repo
- npm install
- jspm install
- run 'gulp' on console (fires live server and ts file watcher)
