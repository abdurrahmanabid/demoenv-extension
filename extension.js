const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
  console.log('✅ Auto Env Demo extension activated');

  // Listen for any document save event
  const onSave = vscode.workspace.onDidSaveTextDocument((document) => {
    const fileName = path.basename(document.fileName);
    if (fileName === '.env') {
      generateDemoEnv(document.fileName);
    }
  });

  // Register command to manually generate demo.env
  const helloCmd = vscode.commands.registerCommand('demo-env.helloWorld', async () => {
    try {
      const envFiles = await vscode.workspace.findFiles('**/.env', '**/node_modules/**', 10);
      if (!envFiles || envFiles.length === 0) {
        vscode.window.showInformationMessage('No .env file found in workspace.');
        return;
      }

      // For simplicity, generate for the first matched .env
      const envUri = envFiles[0];
      await generateDemoEnv(envUri.fsPath);
    } catch (err) {
      vscode.window.showErrorMessage('Error running demo-env command: ' + err.message);
    }
  });

  async function generateDemoEnv(envPath) {
    try {
      const envData = fs.readFileSync(envPath, 'utf-8');

      const keys = envData
        .split('\n')
        .filter(line => line.trim() && !line.startsWith('#'))
        .map(line => line.split('=')[0].trim())
        .filter(Boolean); // remove empty lines

      const outputPath = path.join(path.dirname(envPath), 'demo.env');
      const demoLines = keys.map((k) => `${k}=YOUR_${k}`);
      fs.writeFileSync(outputPath, demoLines.join('\n'));
      vscode.window.showInformationMessage(`demo.env updated (${keys.length} keys)`);
      console.log(`✅ demo.env updated at ${outputPath}`);
    } catch (err) {
      vscode.window.showErrorMessage('Error generating demo.env: ' + err.message);
    }
  }

  context.subscriptions.push(onSave, helloCmd);
}

function deactivate() { }

module.exports = {
  activate,
  deactivate
};
