export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh]">
      <div className="container-x py-16 text-center">
        <div className="inline-block w-12 h-12 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
        <p className="mt-6 eyebrow">Загрузка</p>
      </div>
    </div>
  );
}
