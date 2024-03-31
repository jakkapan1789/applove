"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applove = void 0;
require("./applove.css");
const svgIcon = (type) => {
    if (type === "warning") {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>';
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
exports.applove = {
    confirm: ({ title = "Please confirm", confirmButtonLabel = "Confirm", cancelButtonLabel = "Cancel", type = "question" }) => {
        return new Promise((resolve, reject) => {
            const overlay = document.createElement("div");
            overlay.className = "popup-overlay";
            const card = document.createElement("div");
            card.className = "popup-card";
            const content = document.createElement("div");
            content.className = "popup-content";
            const strong = document.createElement("strong");
            strong.textContent = title;
            const buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";
            const yesButton = document.createElement("button");
            yesButton.className = "btn-default true-button";
            yesButton.textContent = confirmButtonLabel;
            const noButton = document.createElement("button");
            noButton.className = "btn-default false-button";
            noButton.textContent = cancelButtonLabel;
            const svgStr = svgIcon(type);
            const parser = new DOMParser();
            const svgElement = parser.parseFromString(svgStr, "image/svg+xml").documentElement;
            buttonContainer.appendChild(yesButton);
            buttonContainer.appendChild(noButton);
            content.appendChild(svgElement);
            content.appendChild(strong);
            content.appendChild(buttonContainer);
            card.appendChild(content);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
            yesButton.addEventListener("click", () => {
                const response = { result: true, detail: "" };
                resolve(response);
                close();
            });
            noButton.addEventListener("click", () => {
                const response = { result: false, detail: "" };
                resolve(response);
                close();
            });
            setTimeout(() => {
                overlay.classList.add("open");
                card.classList.add("open");
            }, 10);
            const close = () => {
                const overlay = document.querySelector(".popup-overlay");
                const card = document.querySelector(".popup-card");
                if (overlay && card) {
                    overlay.classList.remove("open");
                    card.classList.remove("open");
                    setTimeout(() => {
                        overlay.remove();
                    }, 300);
                }
            };
        });
    },
    success: ({ title = "Example", ExitButtonLabel = "Close" }) => {
        const overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        const card = document.createElement("div");
        card.className = "popup-card";
        const content = document.createElement("div");
        content.className = "popup-content";
        const strong = document.createElement("strong");
        strong.textContent = title;
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        const yesButton = document.createElement("button");
        yesButton.className = "btn-default true-button";
        yesButton.textContent = ExitButtonLabel;
        const svgStr = svgIcon("success");
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(svgStr, "image/svg+xml").documentElement;
        buttonContainer.appendChild(yesButton);
        content.appendChild(svgElement);
        content.appendChild(strong);
        content.appendChild(buttonContainer);
        card.appendChild(content);
        overlay.appendChild(card);
        document.body.appendChild(overlay);
        yesButton.addEventListener("click", () => {
            close();
        });
        setTimeout(() => {
            overlay.classList.add("open");
            card.classList.add("open");
        }, 10);
        const close = () => {
            const overlay = document.querySelector(".popup-overlay");
            const card = document.querySelector(".popup-card");
            if (overlay && card) {
                overlay.classList.remove("open");
                card.classList.remove("open");
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            }
        };
    },
    error: ({ title = "Example", ExitButtonLabel = "Close" }) => {
        const overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        const card = document.createElement("div");
        card.className = "popup-card";
        const content = document.createElement("div");
        content.className = "popup-content";
        const strong = document.createElement("strong");
        strong.textContent = title;
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        const yesButton = document.createElement("button");
        yesButton.className = "btn-default true-button";
        yesButton.textContent = ExitButtonLabel;
        const svgStr = svgIcon("error");
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(svgStr, "image/svg+xml").documentElement;
        buttonContainer.appendChild(yesButton);
        content.appendChild(svgElement);
        content.appendChild(strong);
        content.appendChild(buttonContainer);
        card.appendChild(content);
        overlay.appendChild(card);
        document.body.appendChild(overlay);
        yesButton.addEventListener("click", () => {
            close();
        });
        setTimeout(() => {
            overlay.classList.add("open");
            card.classList.add("open");
        }, 10);
        const close = () => {
            const overlay = document.querySelector(".popup-overlay");
            const card = document.querySelector(".popup-card");
            if (overlay && card) {
                overlay.classList.remove("open");
                card.classList.remove("open");
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            }
        };
    },
    warning: ({ title = "Example", ExitButtonLabel = "Close" }) => {
        const overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        const card = document.createElement("div");
        card.className = "popup-card";
        const content = document.createElement("div");
        content.className = "popup-content";
        const strong = document.createElement("strong");
        strong.textContent = title;
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        const yesButton = document.createElement("button");
        yesButton.className = "btn-default true-button";
        yesButton.textContent = ExitButtonLabel;
        const svgStr = svgIcon("warning");
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(svgStr, "image/svg+xml").documentElement;
        buttonContainer.appendChild(yesButton);
        content.appendChild(svgElement);
        content.appendChild(strong);
        content.appendChild(buttonContainer);
        card.appendChild(content);
        overlay.appendChild(card);
        document.body.appendChild(overlay);
        yesButton.addEventListener("click", () => {
            close();
        });
        setTimeout(() => {
            overlay.classList.add("open");
            card.classList.add("open");
        }, 10);
        const close = () => {
            const overlay = document.querySelector(".popup-overlay");
            const card = document.querySelector(".popup-card");
            if (overlay && card) {
                overlay.classList.remove("open");
                card.classList.remove("open");
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            }
        };
    },
    info: ({ title = "Example", ExitButtonLabel = "Close" }) => {
        const overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        const card = document.createElement("div");
        card.className = "popup-card";
        const content = document.createElement("div");
        content.className = "popup-content";
        const strong = document.createElement("strong");
        strong.textContent = title;
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        const yesButton = document.createElement("button");
        yesButton.className = "btn-default true-button";
        yesButton.textContent = ExitButtonLabel;
        const svgStr = svgIcon("info");
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(svgStr, "image/svg+xml").documentElement;
        buttonContainer.appendChild(yesButton);
        content.appendChild(svgElement);
        content.appendChild(strong);
        content.appendChild(buttonContainer);
        card.appendChild(content);
        overlay.appendChild(card);
        document.body.appendChild(overlay);
        yesButton.addEventListener("click", () => {
            close();
        });
        setTimeout(() => {
            overlay.classList.add("open");
            card.classList.add("open");
        }, 10);
        const close = () => {
            const overlay = document.querySelector(".popup-overlay");
            const card = document.querySelector(".popup-card");
            if (overlay && card) {
                overlay.classList.remove("open");
                card.classList.remove("open");
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            }
        };
    },
};