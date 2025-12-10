# Simple Calculator

Basic arithmetic calculator UI built with Tailwind utility classes and a straightforward expression evaluation workflow.

## 🚀 Features

- Addition / Subtraction / Multiplication / Division / Modulo
- Expression preview + display
- Clear & Backspace actions
- Button grid layout

## 📂 Project Structure

```text
simple-calculator/
├── index.html
├── assets/
│   └── js/app.js
└── README.md
```

## 🛠️ Tech Stack

- HTML / Tailwind (inline config)
- Vanilla JavaScript

## ⚙️ Setup

Open `index.html` directly.

## 🧩 Usage

1. Click number/operator buttons
2. Press `=` to evaluate
3. Use `C` to clear / Back to remove last char

## 🧱 Architecture

- Event delegation per button category (number, operation, action)
- Builds expression string, evaluates via `eval()`

## 🗄️ Data / Storage

None.

## 🔧 Scripts

None.

## 🧪 Testing

Manual: chained operations, floating point input.

## 📦 Deployment

Static.

## 📝 Notes

- `eval()` risky if user input not constrained—here limited to buttons
- No operator precedence preview aside from native evaluation
- Could implement custom parser for safety

## 📄 License

MIT

## Learning Outcomes

- UI grid layout
- Dynamic expression building
- Tailwind styling & theming
