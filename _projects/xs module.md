---
layout: page
title: XS Python Module
description: A python module that generates Inference Endpoint for the Open-Sourced LLMs.
img: https://i.postimg.cc/Wzbz7LvZ/image.png
importance: 3
category: work
related_publications: false
---

# <p align = 'center'> 📝 pip install llm-xs </p>
<p align = 'center'>
The workflow of the XS module, with a tagline : <b>xs makes you access</b>
</p>

[![xs-module.png](https://i.postimg.cc/pT38G84v/xs-module.png)](https://postimg.cc/KkrR4Kmp)

This module leverages ***Flask, Pyngrok, and Waitress*** to create a simple API endpoint for text generation of all ***Open Source LLMs***.
 
## 🚀 Features

- 🌐 **API Endpoint Creation**: Easily create an API endpoint to access the text generation function.
- 🔀 **Dynamic Port Allocation**: Automatically find an available port to avoid conflicts.
- 🚧 **Ngrok Tunneling**: Expose your local server to the internet using Ngrok.
- 🔄 **Flushing Tunnels**: Clear previous Ngrok tunnels to avoid the max tunnel limit.

## 📦 Installation

To use this module, you need to install by the following command :

```bash
pip install 'git+https://github.com/xprabhudayal/xs.git'
```

## 📋 Tutorials and Usage
### 1 Watch these videos for better Understanding

<table >
  <tr >
    <td >
      <a href="https://www.linkedin.com/posts/xprabhudayal_interactive-tutorial-on-how-to-use-the-xs-activity-7223727702548090881-ik7s?utm_source=share&utm_medium=member_desktop">
        <img src="https://i.ibb.co/fn1tzsf/xs-intro.png" alt="LinkedIn Video" width="400"/>
      </a>
    </td>
   <td>
    </td>
    <td>
     <a href="https://www.youtube.com/watch?v=kLhtd0kM7tk">
     <img src="https://i.postimg.cc/t4wfdBDc/xs-hindi.png" width='400'>
     </a>
    </td>
    <td>
    </td>
    </td>
    <td>
      <a href="https://www.linkedin.com/feed/update/urn:li:activity:7223539588932227072/">
        <img src="https://i.ibb.co/wWnTJZW/xs.png" alt="LinkedIn Video" width="400"/>
      </a>
    </td>
  </tr>
</table>


### 2. Finding an Available Port
### `xs.find_port()`

 It dynamically finds an available port.

### 3. Forward Function 
### `xs.forward(NGROK_API)`

The `xs.forward()` function sets up the Ngrok tunnel and starts the server using Waitress. `NGROK_API` is required here.

### 4. Connect Text Function 
### `xs.connect_text(url, prompt)`

The `connect_text` function allows remote devices to access the API and use the text generation option. It sends a POST request to the API endpoint with the provided data and prints the generated text response.

### 5. Flushing Tunnels 
### `xs.flush()`

The `flush` function clears all previous Ngrok tunnels. **In the free tier, you can have 3 tunnels only!** This is useful if you encounter the maximum tunnel limit error from Ngrok.


## 🔧 Future Features

- **Port Killing**: Automatically kill processes using specific ports before starting the server.
- **Enhanced Error Handling**: Improve the robustness of error handling mechanisms.

## 🛠 Troubleshooting

- **Ngrok Tunnel Error**: If you encounter a max tunnel limit, use the `flush` function to clear previous tunnels.
- **JSON Decode Error**: Ensure the API response is correctly formatted JSON.

## License 📄
This project is licensed under the MIT License.

## Contact 📧
For any inquiries, please reach me at : [MAIL](mailto:pradachan@tuta.io )


Made with 💖 by Prabhudayal
---

Enjoy using the `xs.py` module! 🚀
