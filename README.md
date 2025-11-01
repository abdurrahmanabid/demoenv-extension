# 🧩 demoEnv

**demoEnv** is a simple VS Code extension that automatically generates a **demo.env** file from your `.env` file.  
Every time you **save** your `.env` file, it instantly creates or updates a `demo.env` file in the same folder — keeping only the variable names and replacing their values with placeholders like:

```
PORT=YOUR_PORT
API_KEY=YOUR_API_KEY
```

Perfect for sharing your project safely without exposing your real environment variables or secrets.

---

## ✨ Features

- 🔄 Automatically generates or updates `demo.env` whenever you **save** a `.env` file  
- 🪄 Keeps only variable names, replacing values with `YOUR_...` format  
- 📝 Ignores comments (`# ...`) and empty lines  
- ⚙️ Creates `demo.env` next to your original `.env` file  
- 💡 Can also be run manually from the VS Code Command Palette  

---

## 🚀 Usage

1. Open your **VS Code workspace** that contains a `.env` file.  
2. Edit and **save** the `.env` file.  
3. A new file called `demo.env` will automatically appear in the same folder.  

**Example:**  
If your `.env` contains:
```bash
PORT=5000
API_KEY=abcd1234
SECRET=my_secret
```

Then your generated `demo.env` will look like:
```bash
PORT=YOUR_PORT
API_KEY=YOUR_API_KEY
SECRET=YOUR_SECRET
```

---

## ⚡ Manual Generation

If you prefer to create it manually:

1. Open the **Command Palette** (`Ctrl + Shift + P` or `Cmd + Shift + P`)  
2. Search for **“Demo Env”**  
3. Run the command — and `demo.env` will be generated immediately  

---

## 🧠 How It Works

- The extension **watches** your `.env` files for changes.  
- Each time you **save**, it parses all valid `KEY=VALUE` lines.  
- It then writes those keys to a new `demo.env` file, formatting them as `KEY=YOUR_KEY`.  

---

## ⚙️ Limitations

- Only supports simple `KEY=VALUE` lines  
- Comments (`# ...`) and empty lines are ignored  
- Advanced dotenv syntax (multiline, quoted values, `export` keywords, etc.) is not supported yet  

---

## 💡 Why Use `demoEnv`?

- Share `.env` templates safely without exposing secrets  
- Quickly provide example configuration files for teammates  
- Make onboarding easier for new contributors  

---

## 🧾 Example

**Your project files:**
```
.env
│
├── PORT=3000
├── DB_URL=mongodb+srv://user:pass@cluster.mongodb.net/
└── SECRET_KEY=my_secret_123
```

**Generated automatically:**
```
demo.env
│
├── PORT=YOUR_PORT
├── DB_URL=YOUR_DB_URL
└── SECRET_KEY=YOUR_SECRET_KEY
```

---

## 💬 Feedback

Found a bug or have a suggestion?  
Open an issue on the GitHub repository — feedback and contributions are always welcome!
