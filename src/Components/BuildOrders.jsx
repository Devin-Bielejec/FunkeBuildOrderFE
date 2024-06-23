export default function BuildOrders({ builds, handleBuild }) {
  return (
    <div>
      {builds.map((build, i) => {
        <button key={i} onClick={() => handleBuild(i)}>
          {build.name}
        </button>;
      })}
    </div>
  );
}
