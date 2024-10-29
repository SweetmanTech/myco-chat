import { useChatProvider } from "@/providers/ChatProvider";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import Suggestions from "./Suggestions";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } =
    useChatProvider();

  return (
    <div className="w-full items-center flex flex-col max-h-[85vh]">
      <Messages messages={messages} />
      <Suggestions />
      <ChatInput
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </div>
  );
};

export default Chat;
