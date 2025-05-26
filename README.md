# salesforce-web-lightning
The following repository contains my learning of salesforce lightning components 🌩️

# ⚡ Salesforce Lightning Web Components CLI Project

![Salesforce](https://img.shields.io/badge/Salesforce-LWC-blue.svg)
![License: BSD 3-Clause](https://img.shields.io/badge/license-BSD--3--Clause-brightgreen.svg)

A modern Salesforce DX-based project built using **Lightning Web Components (LWC)** and the **Salesforce CLI**, enabling scalable and modular front-end components for your Salesforce orgs.

---

## 📸 Screenshots

### 📍 Custom Lightning Web Component UI
![LWC UI Screenshot](docs/images/lwc-ui.png)

### 📍 Component Configuration Panel
![Config Panel](docs/images/config-panel.png)

---

## 📦 Features

- ✅ Built with Salesforce DX (SFDX)
- ⚡ Modular Lightning Web Components
- 🧪 Jest Unit Testing support
- 🛠 Local development with LWC Previewer
- 📁 Organized project structure for scalability
- 🔐 Authenticated deployment to Scratch Orgs or Sandboxes
- 📘 BSD-3 License for permissive reuse

---

## 🛠️ Project Structure

.
├── force-app/
│ └── main/
│ └── default/
│ └── lwc/ # Lightning Web Components
│ └── aura/ # Aura Components (if used)
├── scripts/ # Optional CLI deployment scripts
├── docs/ # Images, diagrams, documentation
├── .sfdx/ # Local SFDX data (ignored)
├── .gitignore
├── sfdx-project.json # SFDX project config
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 🔧 Prerequisites

- [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli)
- [Node.js](https://nodejs.org/) (v16.x or 18.x recommended)
- A Salesforce Developer Hub (Dev Hub) enabled org

---

### ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-org/salesforce-lwc-project.git
cd salesforce-lwc-project

# Install dependencies
npm install

# Authorize your Dev Hub
sfdx auth:web:login -d -a DevHub

# Create a scratch org
sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-org

# Push source to the scratch org
sfdx force:source:push

# Open the org in browser
sfdx force:org:open
🧪 Running Tests
bash
Copy
Edit
# Run LWC unit tests
npm run test:unit

# Run SFDX Apex tests
sfdx force:apex:test:run --resultformat human --outputdir test-results
📄 License
This project is licensed under the BSD 3-Clause License – see the LICENSE file for details.

👨‍💻 Authors & Contributors
FrostTech – Lead Developer

Open to contributions via pull requests and issues.

🌐 Useful Resources
Lightning Web Components Dev Guide

Salesforce CLI Guide

Salesforce Developer Hub


