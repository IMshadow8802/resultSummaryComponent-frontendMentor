function App() {
  return (
    <div className="flex flex-col bg-pale-blue min-h-screen items-center justify-center">
      <div className="w-[450px] bg-white rounded-3xl flex md:flex-row">
        <aside className="py-9 gap-4 px-4 w-full md:w-1/2 rounded-3xl flex flex-col items-center justify-center bg-gradient-to-b from-slate-blue-light to-slate-blue-dark">
          <div className="text-pale-blue text-xl font-hanken">Your Result</div>
          <div className="flex flex-col gap-1 items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-violet-blue to-slate-blue-dark px-4 py-4 font-hanken">
            <span className="text-white text-4xl">76</span>
            <span className="text-gray-400 text-xs"> of 100</span>
          </div>
          <div className="text-pale-blue text-2xl font-hankenRegular">
            Great
          </div>
          <div className="text-pale-blue text-center text-sm font-hanken">
            You scored higher than 60% of the people who have taken these tests.
          </div>
        </aside>

        {/* other half */}
        <div className="px-8 py-8 flex flex-col w-full md:w-1/2 gap-5">
          <h1 className="text-lg font-hankenBold">Summary</h1>
          <ul className="flex flex-col gap-2 font-hanken ">
            <li className="px-2 py-2 bg-light-red-light rounded-xl flex justify-between items-center">
              <div className="flex gap-1">
                <img src="../src/assets/icon-reaction.svg" />
                <span className="text-sm text-light-red-default ">
                  Reaction
                </span>
              </div>
              <div className="text-sm">
                80 / <span className="text-gray-500">100</span>
              </div>
            </li>
            <li className="px-2 py-2 bg-light-red-memory rounded-xl flex justify-between items-center ">
              <div className="flex gap-1">
                <img src="../src/assets/icon-memory.svg" />
                <span className="text-sm text-memory flex flex-row">
                  Memory
                </span>
              </div>
              <div className="text-sm">
                92 / <span className="text-gray-500">100</span>
              </div>
            </li>
            <li className="px-2 py-2 bg-light-red-verbal rounded-xl flex justify-between items-center ">
              <div className="flex gap-1">
                <img src="../src/assets/icon-verbal.svg" />
                <span className="text-sm text-verbal">Verbal</span>
              </div>
              <div className="text-sm">
                61 / <span className="text-gray-500">100</span>
              </div>
            </li>
            <li className="px-2 py-2 bg-light-red-visual rounded-xl flex justify-between items-center ">
              <div className="flex gap-1">
                <img src="../src/assets/icon-visual.svg" />
                <span className="text-sm text-visual">Visual</span>
              </div>
              <div className="text-sm">
                72 / <span className="text-gray-500">100</span>
              </div>
            </li>
          </ul>
          <button className="px-4 py-2 bg-dark-gray-blue rounded-3xl text-white text-sm font-hanken">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
