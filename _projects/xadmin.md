---
layout: page
title: XAdmin Bot
description: A Telegram Bot that provides Reverse Shell Access to the Victim's PC.
img: assets/img/prj/xadmin.webp
importance: 5
category: fun
related_publications: false
---

# 🚀 XAdmin: Remote Access Bot

⚠️ **Disclaimer:** Do not use this for hacking purposes without explicit permission. Misuse could lead to legal penalties, for which I will not be liable. ⚠️

---

## Tutorials

<table>
   <tr>
      <td align="center">
         <h3>YouTube Video on xAdmin (Hindi + English)</h3>
         <a href="https://www.youtube.com/watch?v=WWFra-7nBOY">
            <img src="https://imgur.com/4pfmKu9.png" alt="YouTube Tutorial" width="400"/>
         </a>
      </td>
      <td align="center">
         <h3>English Tutorials on LinkedIn</h3>
         <a href="https://www.linkedin.com/feed/update/urn:li:activity:7196088521957224449/">
            <img src="https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png" alt="LinkedIn Part 1" width="100"/>
            <p>Part 1</p>
         </a>
         <a href="https://www.linkedin.com/feed/update/urn:li:activity:7199457151847714816/">
            <img src="https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png" alt="LinkedIn Part 2" width="100"/>
            <p>Part 2</p>
         </a>
      </td>
   </tr>
</table>

---

## Overview

XAdmin is a Telegram Bot designed to provide **remote shell access** to a host PC. 

[![xadmin.png](https://i.postimg.cc/cL6vJ3Yb/xadmin.png)](https://postimg.cc/v4FYqc0r)

Unlike 🔒 **SSH**, 💻 **Remote Desktop Connection**, or 📞 **Telnet**, this bot connects the CMD to the Telegram Bot with a simple execution on the host PC.

---

## Features

- 🖥️ **Remote Shell Access:** Execute shell commands on the remote PC via Telegram BOT.
- 📸 **Screenshot Capture:** Use the `/ss` command to capture and send screenshots.
- 📂 **File Sharing:** Prepend `@` before the file name to share files.
- ⚙️ **Fetch Random Commands:** Use `/random` to retrieve random Windows commands from [THIS WEBSITE](https://www.computerhope.com/msdos.htm#commands).
- 🌐 **IP Address Extraction:** Get the external IP address using the `/ip` command.
- 💾 **Disk and File Listing:** List all logical disks with `/list` and files with `/files`.

---

## Installation

[![steps-to-create-bot-in-telegram.png](https://i.postimg.cc/Kjg98HZ8/steps-to-create-bot-in-telegram.png)](https://postimg.cc/fSD7H5tG)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/xprabhudayal/xadmin.git
   cd xadmin
   ```
2. **Install Dependencies:** 
Ensure you have Python installed, then run:
```python
pip install -r requirements.txt
```

3. **Configure Bot Token**:
Open **main.py** and replace **TOKEN** with your Telegram bot token.

4. **Run gui.py to run the bot.**


### Made with 💖 by Prabhudayal Vaishnav 
- [Repository Link](https://github.com/xprabhudayal/xadmin) 
- [LinkedIn](https://www.linkedin.com/in/xprabhudayal/)

## License
This project is licensed under the MIT License.