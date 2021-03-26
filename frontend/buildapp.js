const fs = require('fs');

class ReactResourceManager {
    constructor() {
        this.reactFragmentFile = "../src/main/resources/templates/fragments/react.html";
        this.resourceJSFolder = "../src/main/resources/static/js";
        this.resourceCSSFolder = "../src/main/resources/static/css";
        this.buildJSFolder = "./build/static/js";
        this.buildCSSFolder = "./build/static/css";
    };

    clearReactDestination() {
        fs.readdirSync(this.resourceJSFolder).filter(file => file.endsWith(".js")).forEach(file => {
            fs.unlinkSync(`${this.resourceJSFolder}/${file}`);
        });
        fs.readdirSync(this.resourceCSSFolder).filter(file => file.endsWith(".css")).forEach(file => {
            fs.unlinkSync(`${this.resourceCSSFolder}/${file}`);
        });
    };

    copyJSFile(srcFileName, destFileName) {
        fs.copyFileSync(`${this.buildJSFolder}/${srcFileName}`, `${this.resourceJSFolder}/${destFileName}`);
    };

    copyCSSFile(srcFileName, destFileName) {
        fs.copyFileSync(`${this.buildCSSFolder}/${srcFileName}`, `${this.resourceCSSFolder}/${destFileName}`);
    };

    createThymeleafFragments(cssFileNames, jsFileNames) {
        let stylesList = [];
        let scriptsList = [];
        cssFileNames.forEach(file => stylesList.push(`<link rel="stylesheet" th:href="@{css/${file}}"/>`));
        jsFileNames.forEach(file => scriptsList.push(`<script th:src="@{js/${file}}"></script>`));

        let fileContent = `<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.w3.org/1999/xhtml">
    <div th:fragment="react-styles" th:remove="tag">
        ${stylesList.join("\n\t\t")}
    </div>
    <div th:fragment="react-scripts" th:remove="tag">
        ${scriptsList.join("\n\t\t")}
    </div>
</html>
        `;

        fs.writeFileSync(this.reactFragmentFile, fileContent);
    }

    build(clear = true) {
        if (clear) {
            this.clearReactDestination();
        }
        let cssFiles = [];
        let jsFiles = [];

        fs.readdirSync(this.buildCSSFolder).filter(file => file.endsWith(".css")).forEach(file => {
            this.copyCSSFile(file, file);
            cssFiles.push(file);
        });
        fs.readdirSync(this.buildJSFolder).filter(file => file.endsWith(".js")).forEach(file => {
            this.copyJSFile(file, file);
            jsFiles.push(file);
        });

        this.createThymeleafFragments(cssFiles, jsFiles);
    };
}

const reactResourceManager = new ReactResourceManager();
reactResourceManager.build();