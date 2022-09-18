import { useRouter } from "next/router";
import ChevronLeftIcon from "@/assets/chevron-left.svg";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center gap-2 mb-10"
    >
      <ChevronLeftIcon className="h-4 w-4" />
      Go back
    </button>
  );
};

export default BackButton;
