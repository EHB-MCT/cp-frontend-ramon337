const SceneWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`scene-wrapper ${className}`}
    >
      {children}
    </div>
  );
};
export default SceneWrapper;
