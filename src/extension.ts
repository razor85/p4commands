// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function runP4(command: String, arg: String) {
		console.log('Running P4 cmd[' + command + '], arg[' + arg + ']');
		let terminal = vscode.window.createTerminal({name: 'P4 Commands', hideFromUser: true});
		terminal.sendText('p4 ' + command + ' "' + arg + '"');
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "p4commands" running!');

	let p4edit = vscode.commands.registerCommand('p4commands.p4edit', (uri: vscode.Uri) => {
		runP4('edit', uri.fsPath.toString());
	});

	let p4add = vscode.commands.registerCommand('p4commands.p4add', (uri: vscode.Uri) => {
		runP4('add', uri.fsPath.toString());
	});

	let p4revert = vscode.commands.registerCommand('p4commands.p4revert', (uri: vscode.Uri) => {
		runP4('revert', uri.fsPath.toString());
	});
    
	let p4start = vscode.commands.registerCommand('p4commands.p4start', () => {
		console.log('START!');
	});
	
	context.subscriptions.push(p4edit);
	context.subscriptions.push(p4add);
	context.subscriptions.push(p4revert);
	context.subscriptions.push(p4start);
}

// this method is called when your extension is deactivated
export function deactivate() {}
