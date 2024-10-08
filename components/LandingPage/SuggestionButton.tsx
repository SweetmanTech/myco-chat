import { useChatProvider } from "@/providers/ChatProvider";
import { Button } from "../ui/Button";
import { Lightbulb } from "lucide-react";

const SuggestionButton = ({ suggestion }: { suggestion: string }) => {
  const { append } = useChatProvider();

  const onSubmit = async (message: string) =>
    append({ id: "1", role: "user", content: message });

  return (
    <Button
      onClick={() => onSubmit(suggestion)}
      className="flex flex-col items-start justify-start gap-1 text-black text-left border border-gray-300 w-[156px] h-auto whitespace-normal rounded rounded-2xl shadow-md hover:shadow-lg transition-shadow text-lg"
    >
      <Lightbulb size={18} color="#E0C45C" />
      {suggestion}
    </Button>
  );
};

export default SuggestionButton;
