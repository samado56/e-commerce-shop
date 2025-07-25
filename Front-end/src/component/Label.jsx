export default function Label({ label, className, children }) {
  return (
    <>
      <div className={className}>{label || children}</div>
    </>
  );
}
