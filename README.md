# Playground for Yarn workspaces

## Insights

* Root `node_modules` is used not only for shared modules, but for all non-conflicting dependencies
* If modules are using different versions of the same dependency then Yarn may move already installed versions between root and module's `node_modules`!
* Yarn keeps only one root `yarn.lock` file