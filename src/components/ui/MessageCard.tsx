import type { Message } from "@/types/message";

type MessageCardProps = {
  message: Message;
  expanded: boolean;
  top: number;
  left: number;
  onClick: () => void;
};

export function MessageCard({ message, expanded, top, left, onClick }: MessageCardProps) {
  return (
    <div
      onClick={onClick}
      className="absolute cursor-pointer transition-all duration-300"
      style={{
        top,
        left,
        width: expanded ? 300 : 160,
        background: message.bg,
        border: `1px solid ${message.border}`,
        padding: expanded ? 20 : 14,
        transform: `rotate(${message.rotate}deg) scale(${expanded ? 1.06 : 1})`,
        boxShadow: expanded ? "0 24px 60px rgba(0,0,0,0.8)" : "0 4px 20px rgba(0,0,0,0.4)",
        zIndex: expanded ? 20 : 1,
      }}
    >
      <p
        className="m-0 overflow-hidden font-body italic text-white/70"
        style={{
          fontSize: expanded ? 15 : 12,
          lineHeight: 1.7,
          display: "-webkit-box",
          WebkitLineClamp: expanded ? 20 : 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {message.text}
      </p>
      <p className="mb-0 mt-2.5 font-sans text-[10px] tracking-[0.08em] text-white/35">- {message.author}</p>
    </div>
  );
}
