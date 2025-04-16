export default function CardLayout({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

