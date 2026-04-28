import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";

type NotificationCardProps = {
  title: string;
  description: string;
  tag: string;
  Icon: any;
  unread?: boolean;
  url: string;
  createdAt: Date;
};

export default function NotificationCard({
  title,
  description,
  tag,
  Icon,
  unread = true,
  url,
  createdAt,
}: NotificationCardProps) {
  const relativeCreatedAt = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const router = useRouter();

  function handleClick() {
    if (unread) router.push(url);
  }

  return (
    <button
      type="button"
      disabled={!unread}
      onClick={handleClick}
      className={`relative h-[154.92px] w-302.25 rounded-[17.33px] border ${
        unread
          ? "border-[#155DFC] bg-[linear-gradient(180deg,rgba(239,246,255,0.5)_0%,#FFFFFF_100%)]"
          : "border-[#CDCED2] bg-white"
      } flex items-center p-6 shadow-[0px_2.17px_8.67px_0px_#155DFC1A]`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-[43.33px] w-[43.33px] items-center justify-center rounded-full bg-[#DBEAFE]">
          <Icon size={20} className="text-[#155DFC]" />
        </div>

        <div className="item-start flex flex-col text-left">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-[#4A5565]">{description}</span>
          <span className="text-xs text-[#817D76]">{relativeCreatedAt}</span>
        </div>
      </div>

      <span className="absolute top-11 right-6 rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-medium text-[#155DFC]">
        {tag}
      </span>
      <div
        className={`absolute top-22 right-20 h-2 w-2 -translate-y-1/2 rounded-full ${
          unread ? "bg-[#155DFC]" : "bg-[#CDCED2]"
        } `}
      />
    </button>
  );
}
