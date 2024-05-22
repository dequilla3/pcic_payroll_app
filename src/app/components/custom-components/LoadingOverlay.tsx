import { memo } from "react";

interface LoadingOverlayProps {
  loading?: boolean;
}

function LoadingOverlay({ loading }: LoadingOverlayProps) {
  return (
    <div>
      {loading ? (
        <div className="fixed bg-white bg-opacity-60 z-50 h-full w-full flex left-0 top-0 items-center justify-center">
          <div className="flex items-center animate-bounce font-bold text-green-600 text-2xl">
            Loading . . .
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default memo(LoadingOverlay);
