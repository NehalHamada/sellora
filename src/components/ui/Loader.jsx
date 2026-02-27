function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-slate-700 border-t-indigo-500 animate-spin" />
        <div
          className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-b-cyan-500 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1s" }}
        />
      </div>
      <p className="text-slate-400 text-sm font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
export default Loader;
