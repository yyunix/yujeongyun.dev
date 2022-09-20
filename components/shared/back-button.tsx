import { useRouter } from "next/router";
import ArrowLeftIcon from "@/assets/arrow-left.svg";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center gap-2 mb-10 hover:text-accent"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <span className="text-sm font-semibold">Go back</span>
    </button>
  );
};

export default BackButton;
