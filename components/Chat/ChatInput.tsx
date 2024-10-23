import Image from "next/image";
import useProfileSearch from "@/hooks/useProfileSearch";
import SubmitButton from "./SubmitButton";

interface ChatInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  input: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  handleSubmit,
  handleInputChange,
  input,
}) => {
  const { profile } = useProfileSearch()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className="w-full max-w-[555px] bg-white py-3 rounded-3xl border border-gray-300 p-1.5 mb-3 shadow-lg flex items-center">
      <form onSubmit={handleSubmit} className="w-full flex items-center">
        {
          profile.length > 0 ? (
            <Image src={profile[0].avatar} alt="PFP" width={36} height={36} className="rounded-full" />
          ) : (
            <Image src="/PFP.png" alt="PFP" width={44} height={44} className="rounded-full" />
          )
        }
        <textarea
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Message MycoChat"
          className="w-full text-black outline-none text-lg px-4 resize-none pr-12 font-normal duration-150 ease-in-out flex items-center"
          aria-label="Chat input"
          rows={1}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default ChatInput;
