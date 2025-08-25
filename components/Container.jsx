export default function Container({ className = "", ...props }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}
      {...props}
    />
  );
}
