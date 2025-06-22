export default function Label({ label, className, children }) {
  return (
    <>
      <span className={className}>{label || children}</span>
    </>
  );
}
