## Update package.js file to enable e2e test
(Codio)

Let's add the following line under "scripts" in the package.js file that is located in the main project folder:
`"start-e2e": "RN_SRC_EXT=e2e.js react-native start",`

This will enable you to run the e2e tests by typing "start-e2e" in the terminal.