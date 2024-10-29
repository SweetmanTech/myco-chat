import { useAccount } from "wagmi";
import { Lightbulb } from "lucide-react";
import { useChatProvider } from "@/providers/ChatProvider";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const SuggestionButton = ({
  suggestion,
  className,
  initial,
}: {
  suggestion: string;
  className?: string;
  initial?: boolean;
}) => {
  const { append } = useChatProvider();
  const { address } = useAccount();

  const onSubmit = async (message: string) =>
    append({
      id: `${address}-${Date.now().toLocaleString()}`,
      role: "user",
      content: message,
    });

  return (
    <Button
      onClick={() => onSubmit(suggestion)}
      className={cn(
        "flex flex-col items-start justify-start gap-1 text-black text-left border border-gray-300 w-[156px] h-auto whitespace-normal rounded-2xl shadow-md hover:shadow-lg transition-shadow text-lg",
        className,
      )}
    >
      {initial && <Lightbulb size={18} color="#E0C45C" />}
      {suggestion}
    </Button>
  );
};

export default SuggestionButton;
