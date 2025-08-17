export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

// LoadingOverlay
export function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-50 bg-black/10 backdrop-blur-xs flex items-center justify-center ">
      <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

// SkeletonCard
export function SkeletonCard({ hieght }) {
  return (
    <div
      className={` shadow-sm shadow-black/10 rounded-lg animate-pulse ${hieght} `}
    >
      <div className="h-full w-full rounded-md bg-gray-200 mb-4" />
    </div>
  );
}

// DotsLoader
export function DotsLoader() {
  return (
    <div className="flex items-center gap-1" aria-label="Loading">
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.2s]" />
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.1s]" />
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
    </div>
  );
}

// LoadingButton
export function LoadingButton({ loading, children, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={props.className}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
}
