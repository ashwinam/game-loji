function App() {
  return (
    <div className="grid m-5 sm:grid-cols-2 gap-4">
      <div className="nav sm:col-span-2 bg-sky-500 h-20 shadow-lg">Nav</div>
      <div className="aside bg-orange-500 hidden sm:block h-20 shadow-lg">
        aside
      </div>
      <div className="main bg-teal-500 h-20 shadow-lg">main</div>
    </div>
  );
}

export default App;
