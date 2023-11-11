"use client"
import { useEffect } from 'react';

const WatsonChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "ad54c474-d62e-4311-a9f8-ff5a1548348c",
      region: "au-syd",
      serviceInstanceID: "8bf772ad-453f-427e-bad3-266f0ca65225",
      onLoad: async (instance) => {
        await instance.render();
      }
    };

    setTimeout(function () {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }, []);

  return null;
};

export default WatsonChat;
