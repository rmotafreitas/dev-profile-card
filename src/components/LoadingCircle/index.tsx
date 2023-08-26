// TODO: Add some params like colors, size, some stuff like that...
//
export function LoadingCircle() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
          </div>
          <p className="text-white font-bold text-lg">Loading user...</p>
        </div>
    );
}
