export const App = function () {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <img src="/habina.svg" alt="" className="w-40" />

        <div className="flex flex-col items-center text-secondary-500">
          <h1 className="text-5xl font-normal text-primary-500">Habina</h1>
          <sub className="text-lg tracking-widest">
            Encontre. Visite. Habite.
          </sub>
        </div>
      </div>
    </div>
  );
};
