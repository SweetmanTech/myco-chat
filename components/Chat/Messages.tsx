import { useEffect, useRef } from "react";
import { TvMinimalPlay } from "lucide-react";
import ReactMarkdown from "react-markdown";
import useProfileSearch from "@/hooks/useProfileSearch";
import getZoraPfpLink from "@/lib/zora/getZoraPfpLink";
import { useChatProvider } from "@/providers/ChatProvider";
import Thinking from "./Thinking";
import { Message } from "ai";
import ToolContent from "@/lib/tools/ToolContent";
import { ToolCallProvider } from "@/providers/ToolCallProvider";

const Messages = () => {
  const { messages, pending } = useChatProvider();
  const { profile } = useProfileSearch();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "auto" });
  });

  return (
    <div className="w-full max-w-xl mt-4 mb-2 overflow-y-auto">
      <div className="space-y-4 flex flex-col">
        {messages.map((message: Message, index: number) => message.content && (
          <ToolCallProvider 
            key={index} 
            message={message}
            scrollTo={() => scrollRef.current?.scrollIntoView({ behavior: "auto" })}
          >
            <div className={message.role === "assistant" ? "flex" : ""}>
              {
                message.role === "assistant" && (
                  <div className="w-8 h-8">
                    {
                      profile.length > 0 ? (
                        <img
                          src={getZoraPfpLink(profile[0])}
                          alt="PFP"
                          width={36}
                          height={36}
                          className="rounded-full"
                        />
                      ) : (
                        <TvMinimalPlay size={32} color="#000000" />
                      )
                    }
                  </div>
                )
              }
              <div
                className={`p-3 rounded-lg ${message.role === "user"
                  ? "bg-black text-white float-right max-w-[85%]"
                  : "flex-1 bg-transparent text-black"
                  }`}
              >
                <ReactMarkdown className="text-sm">
                  {message.content}
                </ReactMarkdown>
              </div>
              <ToolContent />
            </div>
          </ToolCallProvider>
        ))}
        {pending && <Thinking />}
      </div>
      <div ref={scrollRef} />
    </div>
  );
};

export default Messages;
