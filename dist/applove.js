"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applove = void 0;
const svgIcon = (type) => {
    if (type === "warning") {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>';
    }
    else if (type === "error") {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"  viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>';
    }
    else if (type === "info") {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>';
    }
    else if (type === "question") {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 512 512"> <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>';
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>';
};
const popupOverlay = `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 9999;
opacity: 0; 
transition: opacity 0.3s ease; `;
const popupCard = `
position: relative;
background-color: #fff;
padding: 32px;
border-radius: 12px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
max-width: 420px;
width: 100%;
margin: 25px;
opacity: 0; 
transform: translateY(50px); 
transition: opacity 0.3s ease, transform 0.3s ease;
`;
const popupContent = `
display: flex;
align-items: center;
flex-direction: column;
margin-top: 5px;
`;
const styleTrueButton = `
font-family: 'Kanit', sans-serif;
margin-right: 5px;
background-color: #000000CC;
color: white;
height: 40px;
padding: 0px 20px;
border: none;
border-radius: 15px;
font-size: 16px;
cursor: pointer;
`;
const styleFalseButton = `
font-family: 'Kanit', sans-serif;
  margin-left: 5px;
  background-color: white;
  color: #000000CC;
  height: 40px;
  padding: 0px 20px;
  border: 1px solid #000000CC;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
`;
exports.applove = {
    confirm: ({ title = "Please confirm", confirmButtonLabel = "Confirm", cancelButtonLabel = "Cancel", type = "question", iconColor = "currentColor", fontFamily = "'Kanit', sans-serif" }) => {
        return new Promise((resolve, reject) => {
            document.body.style.fontFamily = fontFamily;
            const overlay = document.createElement("div");
            overlay.style.cssText = popupOverlay;
            const card = document.createElement("div");
            card.style.cssText = popupCard;
            const content = document.createElement("div");
            content.style.cssText = popupContent;
            const strong = document.createElement("strong");
            strong.textContent = title;
            strong.style.marginTop = "15px";
            strong.style.fontSize = "24px";
            strong.style.color = "#000000CC";
            strong.style.display = "block";
            strong.style.textAlign = "center";
            const buttonContainer = document.createElement("div");
            buttonContainer.style.marginTop = "13px";
            const trueButton = document.createElement("button");
            trueButton.style.cssText = styleTrueButton;
            trueButton.textContent = confirmButtonLabel;
            const falseButton = document.createElement("button");
            falseButton.style.cssText = styleFalseButton;
            falseButton.textContent = cancelButtonLabel;
            const svgStr = svgIcon(type);
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgStr, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            svgElement.setAttribute("fill", iconColor);
            buttonContainer.appendChild(trueButton);
            buttonContainer.appendChild(falseButton);
            content.appendChild(svgElement);
            content.appendChild(strong);
            content.appendChild(buttonContainer);
            card.appendChild(content);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
            trueButton.focus();
            trueButton.addEventListener("click", () => {
                const response = { result: true, detail: "" };
                resolve(response);
                close();
            });
            falseButton.addEventListener("click", () => {
                const response = { result: false, detail: "" };
                resolve(response);
                close();
            });
            setTimeout(() => {
                overlay.style.opacity = "1";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
            const close = () => {
                overlay.style.opacity = "0";
                card.style.opacity = "0";
                card.style.transform = "translateY(50px)";
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            };
        });
    },
    success: ({ title = "Example", exitButtonLabel = "Close", iconColor = "currentColor", fontFamily = "'Kanit', sans-serif" }) => {
        return new Promise((resolve, reject) => {
            document.body.style.fontFamily = fontFamily;
            const overlay = document.createElement("div");
            overlay.style.cssText = popupOverlay;
            const card = document.createElement("div");
            card.style.cssText = popupCard;
            const content = document.createElement("div");
            content.style.cssText = popupContent;
            const strong = document.createElement("strong");
            strong.textContent = title;
            strong.style.marginTop = "15px";
            strong.style.fontSize = "24px";
            strong.style.color = "#000000CC";
            strong.style.display = "block";
            strong.style.textAlign = "center";
            const buttonContainer = document.createElement("div");
            buttonContainer.style.marginTop = "13px";
            const trueButton = document.createElement("button");
            trueButton.style.cssText = styleFalseButton;
            trueButton.textContent = exitButtonLabel;
            const svgStr = svgIcon("success");
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgStr, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            svgElement.setAttribute("fill", iconColor);
            buttonContainer.appendChild(trueButton);
            content.appendChild(svgElement);
            content.appendChild(strong);
            content.appendChild(buttonContainer);
            card.appendChild(content);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
            trueButton.focus();
            trueButton.addEventListener("click", () => {
                const response = { result: true, detail: "" };
                resolve(response);
                close();
            });
            setTimeout(() => {
                overlay.style.opacity = "1";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
            const close = () => {
                overlay.style.opacity = "0";
                card.style.opacity = "0";
                card.style.transform = "translateY(50px)";
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            };
        });
    },
    error: ({ title = "Example", exitButtonLabel = "Close", iconColor = "currentColor", fontFamily = "'Kanit', sans-serif" }) => {
        return new Promise((resolve, reject) => {
            document.body.style.fontFamily = fontFamily;
            const overlay = document.createElement("div");
            overlay.style.cssText = popupOverlay;
            const card = document.createElement("div");
            card.style.cssText = popupCard;
            const content = document.createElement("div");
            content.style.cssText = popupContent;
            const strong = document.createElement("strong");
            strong.textContent = title;
            strong.style.marginTop = "15px";
            strong.style.fontSize = "24px";
            strong.style.color = "#000000CC";
            strong.style.display = "block";
            strong.style.textAlign = "center";
            const buttonContainer = document.createElement("div");
            buttonContainer.style.marginTop = "13px";
            const trueButton = document.createElement("button");
            trueButton.style.cssText = styleFalseButton;
            trueButton.textContent = exitButtonLabel;
            const svgStr = svgIcon("error");
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgStr, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            svgElement.setAttribute("fill", iconColor);
            buttonContainer.appendChild(trueButton);
            content.appendChild(svgElement);
            content.appendChild(strong);
            content.appendChild(buttonContainer);
            card.appendChild(content);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
            trueButton.focus();
            trueButton.addEventListener("click", () => {
                const response = { result: true, detail: "" };
                resolve(response);
                close();
            });
            setTimeout(() => {
                overlay.style.opacity = "1";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
            const close = () => {
                overlay.style.opacity = "0";
                card.style.opacity = "0";
                card.style.transform = "translateY(50px)";
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            };
        });
    },
    warning: ({ title = "Example", exitButtonLabel = "Close", iconColor = "currentColor", fontFamily = "'Kanit', sans-serif" }) => {
        return new Promise((resolve, reject) => {
            document.body.style.fontFamily = fontFamily;
            const overlay = document.createElement("div");
            overlay.style.cssText = popupOverlay;
            const card = document.createElement("div");
            card.style.cssText = popupCard;
            const content = document.createElement("div");
            content.style.cssText = popupContent;
            const strong = document.createElement("strong");
            strong.textContent = title;
            strong.style.marginTop = "15px";
            strong.style.fontSize = "24px";
            strong.style.color = "#000000CC";
            strong.style.display = "block";
            strong.style.textAlign = "center";
            const buttonContainer = document.createElement("div");
            buttonContainer.style.marginTop = "13px";
            const trueButton = document.createElement("button");
            trueButton.style.cssText = styleFalseButton;
            trueButton.textContent = exitButtonLabel;
            const svgStr = svgIcon("warning");
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgStr, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            svgElement.setAttribute("fill", iconColor);
            buttonContainer.appendChild(trueButton);
            content.appendChild(svgElement);
            content.appendChild(strong);
            content.appendChild(buttonContainer);
            card.appendChild(content);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
            trueButton.focus();
            trueButton.addEventListener("click", () => {
                const response = { result: true, detail: "" };
                resolve(response);
                close();
            });
            setTimeout(() => {
                overlay.style.opacity = "1";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
            const close = () => {
                overlay.style.opacity = "0";
                card.style.opacity = "0";
                card.style.transform = "translateY(50px)";
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            };
        });
    },
    info: ({ title = "Example", exitButtonLabel = "Close", iconColor = "currentColor", fontFamily = "'Kanit', sans-serif" }) => {
        return new Promise((resolve, reject) => {
            document.body.style.fontFamily = fontFamily;
            const overlay = document.createElement("div");
            overlay.style.cssText = popupOverlay;
            const card = document.createElement("div");
            card.style.cssText = popupCard;
            const content = document.createElement("div");
            content.style.cssText = popupContent;
            const strong = document.createElement("strong");
            strong.textContent = title;
            strong.style.marginTop = "15px";
            strong.style.fontSize = "24px";
            strong.style.color = "#000000CC";
            strong.style.display = "block";
            strong.style.textAlign = "center";
            const buttonContainer = document.createElement("div");
            buttonContainer.style.marginTop = "13px";
            const trueButton = document.createElement("button");
            trueButton.style.cssText = styleFalseButton;
            trueButton.textContent = exitButtonLabel;
            const svgStr = svgIcon("info");
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgStr, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            svgElement.setAttribute("fill", iconColor);
            buttonContainer.appendChild(trueButton);
            content.appendChild(svgElement);
            content.appendChild(strong);
            content.appendChild(buttonContainer);
            card.appendChild(content);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
            trueButton.focus();
            trueButton.addEventListener("click", () => {
                const response = { result: true, detail: "" };
                resolve(response);
                close();
            });
            setTimeout(() => {
                overlay.style.opacity = "1";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
            const close = () => {
                overlay.style.opacity = "0";
                card.style.opacity = "0";
                card.style.transform = "translateY(50px)";
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            };
        });
    },
    question: ({ title = "Example", exitButtonLabel = "Close", iconColor = "currentColor", fontFamily = "'Kanit', sans-serif" }) => {
        return new Promise((resolve, reject) => {
            document.body.style.fontFamily = fontFamily;
            const overlay = document.createElement("div");
            overlay.style.cssText = popupOverlay;
            const card = document.createElement("div");
            card.style.cssText = popupCard;
            const content = document.createElement("div");
            content.style.cssText = popupContent;
            const strong = document.createElement("strong");
            strong.textContent = title;
            strong.style.marginTop = "15px";
            strong.style.fontSize = "24px";
            strong.style.color = "#000000CC";
            strong.style.display = "block";
            strong.style.textAlign = "center";
            const buttonContainer = document.createElement("div");
            buttonContainer.style.marginTop = "13px";
            const trueButton = document.createElement("button");
            trueButton.style.cssText = styleFalseButton;
            trueButton.textContent = exitButtonLabel;
            const svgStr = svgIcon("question");
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgStr, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            svgElement.setAttribute("fill", iconColor);
            buttonContainer.appendChild(trueButton);
            content.appendChild(svgElement);
            content.appendChild(strong);
            content.appendChild(buttonContainer);
            card.appendChild(content);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
            trueButton.focus();
            trueButton.addEventListener("click", () => {
                const response = { result: true, detail: "" };
                resolve(response);
                close();
            });
            setTimeout(() => {
                overlay.style.opacity = "1";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
            const close = () => {
                overlay.style.opacity = "0";
                card.style.opacity = "0";
                card.style.transform = "translateY(50px)";
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            };
        });
    },
    asking: ({ title = "Please confirm", confirmButtonLabel = "Confirm", cancelButtonLabel = "Cancel", type = "question", iconColor = "currentColor", fontFamily = "'Kanit', sans-serif", errorLabel = "Input cannot be empty." }) => {
        return new Promise((resolve, reject) => {
            document.body.style.fontFamily = fontFamily;
            const overlay = document.createElement("div");
            overlay.style.cssText = popupOverlay;
            const card = document.createElement("div");
            card.style.cssText = popupCard;
            const content = document.createElement("div");
            content.style.cssText = popupContent;
            const strong = document.createElement("strong");
            strong.textContent = title;
            strong.style.marginTop = "15px";
            strong.style.fontSize = "24px";
            strong.style.color = "#000000CC";
            strong.style.display = "block";
            strong.style.textAlign = "center";
            // Create and style the input box
            const inputBox = document.createElement("input");
            inputBox.type = "text";
            inputBox.style.marginTop = "10px";
            inputBox.style.padding = "8px";
            inputBox.style.fontSize = "16px";
            inputBox.style.width = "calc(100% - 20px)";
            inputBox.style.boxSizing = "border-box";
            inputBox.style.display = "block";
            inputBox.style.marginLeft = "auto";
            inputBox.style.marginRight = "auto";
            inputBox.style.borderRadius = "5px";
            inputBox.style.border = "1px solid #ccc";
            // Create and style the error message
            const errorMessage = document.createElement("div");
            errorMessage.textContent = errorLabel === "" ? "Input cannot be empty." : errorLabel;
            errorMessage.style.color = "red";
            errorMessage.style.fontSize = "14px";
            errorMessage.style.textAlign = "left"; // Align left
            errorMessage.style.marginTop = "5px";
            errorMessage.style.marginLeft = "5px";
            // errorMessage.style.marginLeft = "calc(10% + 10px)"; // Adjust margin to align with input box
            errorMessage.style.display = "none"; // Hide it initially
            const buttonContainer = document.createElement("div");
            buttonContainer.style.marginTop = "13px";
            const trueButton = document.createElement("button");
            trueButton.style.cssText = styleTrueButton;
            trueButton.textContent = confirmButtonLabel;
            const falseButton = document.createElement("button");
            falseButton.style.cssText = styleFalseButton;
            falseButton.textContent = cancelButtonLabel;
            const svgStr = svgIcon(type); // Adjusted to use the dynamic type
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgStr, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            svgElement.setAttribute("fill", iconColor);
            buttonContainer.appendChild(trueButton);
            buttonContainer.appendChild(falseButton);
            content.appendChild(svgElement);
            content.appendChild(strong);
            content.appendChild(inputBox);
            content.appendChild(errorMessage); // Append the error message
            content.appendChild(buttonContainer);
            card.appendChild(content);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
            inputBox.focus();
            inputBox.addEventListener("input", () => {
                if (inputBox.value.trim() !== "") {
                    errorMessage.style.display = "none"; // Hide the error message
                }
            });
            trueButton.addEventListener("click", () => {
                if (inputBox.value.trim() === "") {
                    errorMessage.style.display = "block"; // Show the error message
                    inputBox.focus();
                }
                else {
                    const response = { result: true, detail: inputBox.value };
                    resolve(response);
                    close();
                }
            });
            falseButton.addEventListener("click", () => {
                const response = { result: false, detail: "" };
                resolve(response);
                close();
            });
            setTimeout(() => {
                overlay.style.opacity = "1";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
            const close = () => {
                overlay.style.opacity = "0";
                card.style.opacity = "0";
                card.style.transform = "translateY(50px)";
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            };
        });
    }
};
