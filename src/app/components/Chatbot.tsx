"use client";
import dynamic from "next/dynamic";
import { FC } from "react";

// Dynamically import BubbleChat to avoid SSR issues
const BubbleChat = dynamic(
  () => import("flowise-embed-react").then((mod) => mod.BubbleChat),
  { ssr: false }
);

const Chatbot: FC = () => {
  return (
    <BubbleChat
      chatflowid="04a3493a-b829-46b5-ad23-b96e120e61dd"
      apiHost="https://123application12-production.up.railway.app"
      theme={{
        button: {
          backgroundColor: "#000",
          right: 20,
          bottom: 20,
          size: 48,
          dragAndDrop: true,
          iconColor: "white",
          customIconSrc:
            "alisocial.png",
          autoWindowOpen: {
            autoOpen: true,
            openDelay: 2,
            autoOpenOnMobile: false,
          },
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: "Hafiz Ali👋",
          tooltipBackgroundColor: "black",
          tooltipTextColor: "white",
          tooltipFontSize: 16,
        },
        // disclaimer: {
        //   title: "Disclaimer",
        //   message:
        //     'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>',
        //   textColor: "black",
        //   buttonColor: "#3b82f6",
        //   buttonText: "Start Chatting",
        //   buttonTextColor: "white",
        //   blurredBackgroundColor: "rgba(0, 0, 0, 0.4)",
        //   backgroundColor: "white",
        // },
        customCSS: ``,
        chatWindow: {
          showTitle: true,
          showAgentMessages: true,
          title: "🤖 Hafiz Ali Assistant!👈🏻",
          welcomeMessage:
            'Hello there! This is Hafiz Ali AI assistant ready to help with any questions. How may I assist you today?"',
          errorMessage: "This is a custom error message",
          backgroundColor: "#ffffff",
          backgroundImage: "enter image path or link",
          height: 500,
          width: 350,
          fontSize: 16,
          starterPrompts: ["Who is Hafiz Ali?", "What services does Hafiz Ali offer?"],
          starterPromptFontSize: 15,
          clearChatOnReload: false,
          sourceDocsTitle: "Sources:",
          renderHTML: true,
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc:
              "/alisocial.png",
          },
          userMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc:
              "/User3.png",
          },
          textInput: {
            placeholder: "Type your question",
            backgroundColor: "#ffffff",
            textColor: "#303235",
            sendButtonColor: "#50555e",
            maxChars: 70,
            maxCharsWarningMessage:
              "You exceeded the characters limit. Please input less than 70 characters.",
            autoFocus: true,
            // sendMessageSound: true,
            // sendSoundLocation: "send_message.mp3",
            // receiveMessageSound: true,
            // receiveSoundLocation: "receive_message.mp3",
          },
          feedback: {
            color: "#303235",
          },
          dateTimeToggle: {
            date: true,
            time: true,
          },
          footer: {
            textColor: "#303235",
            text: "Crafted by",
            company: "Ali Ahmed",
            companyLink: "https://github.com/HafizAliAhmed",
          },
        },
      }}
    />
  );
};

export default Chatbot;
