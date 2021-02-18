// @ts-nocheck
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fullprof_doc = require('./fullprof-doc');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "fullprof-vscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('fullprof-vscode.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Fullprof-vscode is now active!');

	});

	vscode.languages.registerHoverProvider('fullprof', {
		provideHover(document, position){
			const range = document.getWordRangeAtPosition(position);
			const word = document.getText(range).toLowerCase();		

 			if(fullprof_doc[word]){
				const hoverContent = fullprof_doc[word].title + "\n\n---\n\n" + fullprof_doc[word].desc
				return new vscode.Hover(hoverContent);
			}
		}
	})

	context.subscriptions.push(disposable);

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
